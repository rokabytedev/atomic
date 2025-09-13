"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Habit {
  id: string;
  identity: string;
  habitAction: string;
  cueType: string;
  time: string;
  location: string;
  existingHabit: string;
  temptationBundle: string;
  checkins: string[];
  createdAt: string;
}

export default function TrackHabitPage() {
  const params = useParams();
  const [habit, setHabit] = useState<Habit | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const habitId = params.id as string;
    const storedHabits = localStorage.getItem('habits');
    if (storedHabits) {
      const habits: Habit[] = JSON.parse(storedHabits);
      const foundHabit = habits.find(h => h.id === habitId);
      if (foundHabit) {
        setHabit(foundHabit);
      }
    }
  }, [params.id]);

  const handleDateClick = (date: Date) => {
    if (!habit) return;

    const dateString = date.toISOString().split('T')[0];
    const storedHabits = localStorage.getItem('habits');
    if (storedHabits) {
      const habits: Habit[] = JSON.parse(storedHabits);
      const habitIndex = habits.findIndex(h => h.id === habit.id);
      
      if (habitIndex !== -1) {
        const updatedHabit = { ...habits[habitIndex] };
        const checkinIndex = updatedHabit.checkins.indexOf(dateString);
        
        if (checkinIndex > -1) {
          updatedHabit.checkins.splice(checkinIndex, 1);
        } else {
          updatedHabit.checkins.push(dateString);
        }
        
        habits[habitIndex] = updatedHabit;
        localStorage.setItem('habits', JSON.stringify(habits));
        setHabit(updatedHabit);
      }
    }
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const currentDateObj = new Date();
    const currentDateString = currentDateObj.toISOString().split('T')[0];

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const dateString = date.toISOString().split('T')[0];
      const isCurrentMonth = date.getMonth() === month;
      const isCheckedIn = habit?.checkins.includes(dateString) || false;
      const isToday = dateString === currentDateString;

      days.push(
        <button
          key={dateString}
          onClick={() => handleDateClick(date)}
          className={`text-sm py-2 rounded-full transition-colors ${
            !isCurrentMonth 
              ? 'text-gray-300 cursor-default' 
              : isToday
                ? 'bg-white text-green-700 font-bold shadow-md ring-2 ring-green-700'
                : isCheckedIn
                  ? 'bg-green-100 text-green-700 font-semibold hover:bg-green-200'
                  : 'hover:bg-gray-100 cursor-pointer'
          }`}
          disabled={!isCurrentMonth}
        >
          {date.getDate()}
        </button>
      );
    }

    return days;
  };

  const calculateStreak = () => {
    if (!habit || habit.checkins.length === 0) return 0;
    
    const sortedCheckins = habit.checkins.sort((a, b) => b.localeCompare(a));
    let streak = 0;
    const today = new Date();
    const currentCheckDate = new Date(today);
    
    for (let i = 0; i < sortedCheckins.length; i++) {
      const dateString = currentCheckDate.toISOString().split('T')[0];
      if (sortedCheckins.includes(dateString)) {
        streak++;
        currentCheckDate.setDate(currentCheckDate.getDate() - 1);
      } else {
        break;
      }
    }
    
    return streak;
  };

  const getCueText = () => {
    if (!habit) return '';
    if (habit.cueType === 'time_place') {
      return `At ${habit.time} in ${habit.location}`;
    } else {
      return `After ${habit.existingHabit}`;
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  if (!habit) {
    return (
      <div className="bg-gray-50 text-gray-800 min-h-screen flex items-center justify-center">
        <p>Loading habit...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="flex flex-col min-h-screen">
        <header className="w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-5">
              <Link className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors" href="/">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fillRule="evenodd"></path>
                </svg>
                <span>Back</span>
              </Link>
              <h1 className="text-xl font-bold text-gray-900">Atomic Habit Coach</h1>
            </div>
          </div>
        </header>
        <main className="flex-grow w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-10">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{habit.habitAction}</h2>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Habit Blueprint</h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium text-gray-900">Identity:</span> {habit.identity}</p>
                <p><span className="font-medium text-gray-900">Cue:</span> {getCueText()}</p>
                {habit.temptationBundle && (
                  <p><span className="font-medium text-gray-900">Reward:</span> {habit.temptationBundle}</p>
                )}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={() => navigateMonth(-1)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
                <h4 className="text-lg font-semibold text-gray-900">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h4>
                <button 
                  onClick={() => navigateMonth(1)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                <div className="text-xs font-semibold text-gray-600 py-2">S</div>
                <div className="text-xs font-semibold text-gray-600 py-2">M</div>
                <div className="text-xs font-semibold text-gray-600 py-2">T</div>
                <div className="text-xs font-semibold text-gray-600 py-2">W</div>
                <div className="text-xs font-semibold text-gray-600 py-2">T</div>
                <div className="text-xs font-semibold text-gray-600 py-2">F</div>
                <div className="text-xs font-semibold text-gray-600 py-2">S</div>
                {renderCalendar()}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 text-center">
                <p className="text-sm font-medium text-gray-600">Current Streak</p>
                <p className="text-4xl font-bold text-green-700 mt-2">{calculateStreak()} days</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 text-center">
                <p className="text-sm font-medium text-gray-600">Total Completions</p>
                <p className="text-4xl font-bold text-green-700 mt-2">{habit.checkins.length}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}