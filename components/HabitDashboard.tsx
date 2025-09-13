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

interface HabitDashboardProps {
  habits: Habit[];
  setHabits: (habits: Habit[]) => void;
}

export default function HabitDashboard({ habits, setHabits }: HabitDashboardProps) {
  const today = new Date().toISOString().split('T')[0];

  const handleCheckIn = (habitId: string) => {
    const updatedHabits = habits.map(habit => {
      if (habit.id === habitId) {
        const checkins = [...habit.checkins];
        const todayIndex = checkins.indexOf(today);
        
        if (todayIndex > -1) {
          checkins.splice(todayIndex, 1);
        } else {
          checkins.push(today);
        }
        
        return { ...habit, checkins };
      }
      return habit;
    });
    
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  const isCheckedToday = (habit: Habit) => {
    return habit.checkins.includes(today);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold text-gray-800">Atomic Habit Coach</h1>
            <Link href="/create" className="bg-[#f77c18] text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f77c18] flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" fillRule="evenodd"></path>
              </svg>
              <span>New Habit</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Your Habits for Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.map((habit) => (
            <Link key={habit.id} href={`/track/${habit.id}`} className="block">
              <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-800">{habit.habitAction}</h3>
                    <p className="text-sm text-gray-500 mt-1">{habit.identity}</p>
                  </div>
                  <div className="relative w-8 h-8 flex-shrink-0" onClick={(e) => e.preventDefault()}>
                    <input 
                      checked={isCheckedToday(habit)}
                      className="appearance-none w-8 h-8 rounded-full border-2 border-[#f77c18] cursor-pointer transition-all duration-300 checked:bg-[#a7e0c2] checked:border-[#a7e0c2]" 
                      id={`habit-${habit.id}`} 
                      type="checkbox"
                      onChange={() => handleCheckIn(habit.id)}
                    />
                    {isCheckedToday(habit) && (
                      <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}