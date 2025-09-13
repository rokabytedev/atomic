"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateHabitPage() {
  const router = useRouter();
  
  const [identity, setIdentity] = useState('');
  const [habitAction, setHabitAction] = useState('');
  const [cueType, setCueType] = useState('time_place');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [existingHabit, setExistingHabit] = useState('');
  const [showTemptation, setShowTemptation] = useState(false);
  const [temptationBundle, setTemptationBundle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!identity.trim() || !habitAction.trim()) {
      alert('Please fill in the required fields: identity and habit action');
      return;
    }
    
    if (cueType === 'time_place' && (!time || !location.trim())) {
      alert('Please fill in both time and location');
      return;
    }
    
    if (cueType === 'existing_habit' && !existingHabit.trim()) {
      alert('Please specify the existing habit');
      return;
    }

    const newHabit = {
      id: Date.now().toString(),
      identity: identity.trim(),
      habitAction: habitAction.trim(),
      cueType,
      time: cueType === 'time_place' ? time : '',
      location: cueType === 'time_place' ? location.trim() : '',
      existingHabit: cueType === 'existing_habit' ? existingHabit.trim() : '',
      temptationBundle: showTemptation ? temptationBundle.trim() : '',
      checkins: [],
      createdAt: new Date().toISOString()
    };

    const existingHabits = JSON.parse(localStorage.getItem('habits') || '[]');
    const updatedHabits = [...existingHabits, newHabit];
    localStorage.setItem('habits', JSON.stringify(updatedHabits));

    router.push('/');
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col">
        <header className="flex items-center justify-between border-b border-gray-200 px-4 py-6 sm:px-0">
          <Link className="flex items-center gap-2 text-gray-600 hover:text-gray-900" href="/">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="text-sm font-medium">Back</span>
          </Link>
          <h1 className="text-center text-xl font-bold text-gray-900">
            Create a New Habit
          </h1>
          <div className="w-16"></div>
        </header>
        <main className="flex-grow py-12">
          <form className="space-y-12 px-4 sm:px-0" onSubmit={handleSubmit}>
            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  Step 1: Define Your Identity
                </h2>
                <p className="text-sm text-gray-500">
                  Who do you want to become?
                </p>
              </div>
              <div className="space-y-4">
                <input 
                  className="w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-orange-500 focus:ring-orange-500" 
                  placeholder="I want to become a person who..." 
                  type="text"
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  required
                />
                <input 
                  className="w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-orange-500 focus:ring-orange-500" 
                  placeholder="To achieve this, my new habit is..." 
                  type="text"
                  value={habitAction}
                  onChange={(e) => setHabitAction(e.target.value)}
                  required
                />
              </div>
            </section>
            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  Step 2: Set Your Cue
                </h2>
                <p className="text-sm text-gray-500">
                  What will trigger your new habit?
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex items-center gap-3 rounded-md border border-gray-300 p-4 shadow-sm has-[:checked]:border-orange-500 has-[:checked]:ring-2 has-[:checked]:ring-orange-500">
                  <input 
                    checked={cueType === 'time_place'}
                    className="h-5 w-5 border-gray-300 text-orange-600 focus:ring-orange-500" 
                    name="cue_type" 
                    type="radio"
                    value="time_place"
                    onChange={(e) => setCueType(e.target.value)}
                  />
                  <span className="font-medium">Specific Time & Place</span>
                </label>
                <label className="flex items-center gap-3 rounded-md border border-gray-300 p-4 shadow-sm has-[:checked]:border-orange-500 has-[:checked]:ring-2 has-[:checked]:ring-orange-500">
                  <input 
                    checked={cueType === 'existing_habit'}
                    className="h-5 w-5 border-gray-300 text-orange-600 focus:ring-orange-500" 
                    name="cue_type" 
                    type="radio"
                    value="existing_habit"
                    onChange={(e) => setCueType(e.target.value)}
                  />
                  <span className="font-medium">After an Existing Habit</span>
                </label>
              </div>
              {cueType === 'time_place' && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input 
                    className="w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-orange-500 focus:ring-orange-500" 
                    placeholder="Time" 
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                  <input 
                    className="w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-orange-500 focus:ring-orange-500" 
                    placeholder="Location" 
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              )}
              {cueType === 'existing_habit' && (
                <div>
                  <input 
                    className="w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-orange-500 focus:ring-orange-500" 
                    placeholder="After I..." 
                    type="text"
                    value={existingHabit}
                    onChange={(e) => setExistingHabit(e.target.value)}
                  />
                </div>
              )}
            </section>
            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  Step 3: Make It Attractive (Optional)
                </h2>
                <p className="text-sm text-gray-500">
                  Pair your habit with something you enjoy.
                </p>
              </div>
              <div className="flex items-center justify-between rounded-md border border-gray-300 bg-white p-4 shadow-sm">
                <span className="font-medium">Add a Temptation Bundle</span>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input 
                    className="peer sr-only" 
                    type="checkbox" 
                    checked={showTemptation}
                    onChange={(e) => setShowTemptation(e.target.checked)}
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300"></div>
                </label>
              </div>
              {showTemptation && (
                <div>
                  <input 
                    className="w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-orange-500 focus:ring-orange-500" 
                    placeholder="What temptation will you bundle with this habit?" 
                    type="text"
                    value={temptationBundle}
                    onChange={(e) => setTemptationBundle(e.target.value)}
                  />
                </div>
              )}
            </section>
            <div className="pt-6">
              <button 
                type="submit"
                className="w-full rounded-md bg-orange-500 py-4 text-center text-lg font-bold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Start This Habit
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}