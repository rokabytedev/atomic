export default function HabitDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold text-gray-800">Atomic Habit Coach</h1>
            <button className="bg-[#f77c18] text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f77c18] flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" fillRule="evenodd"></path>
              </svg>
              <span>New Habit</span>
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Your Habits for Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-800">Read 10 pages</h3>
                <p className="text-sm text-gray-500 mt-1">Become a reader</p>
              </div>
              <div className="relative w-8 h-8 flex-shrink-0">
                <input 
                  defaultChecked 
                  className="appearance-none w-8 h-8 rounded-full border-2 border-[#f77c18] cursor-pointer transition-all duration-300 checked:bg-[#a7e0c2] checked:border-[#a7e0c2]" 
                  id="habit1" 
                  type="checkbox"
                />
                <div className="absolute inset-0 hidden items-center justify-center text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-800">Meditate for 5 minutes</h3>
                <p className="text-sm text-gray-500 mt-1">Become a calm person</p>
              </div>
              <div className="relative w-8 h-8 flex-shrink-0">
                <input 
                  className="appearance-none w-8 h-8 rounded-full border-2 border-[#f77c18] cursor-pointer transition-all duration-300 checked:bg-[#a7e0c2] checked:border-[#a7e0c2]" 
                  id="habit2" 
                  type="checkbox"
                />
                <div className="absolute inset-0 hidden items-center justify-center text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-800">Go for a 20-min walk</h3>
                <p className="text-sm text-gray-500 mt-1">Become a healthy person</p>
              </div>
              <div className="relative w-8 h-8 flex-shrink-0">
                <input 
                  defaultChecked 
                  className="appearance-none w-8 h-8 rounded-full border-2 border-[#f77c18] cursor-pointer transition-all duration-300 checked:bg-[#a7e0c2] checked:border-[#a7e0c2]" 
                  id="habit3" 
                  type="checkbox"
                />
                <div className="absolute inset-0 hidden items-center justify-center text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-800">Drink 8 glasses of water</h3>
                <p className="text-sm text-gray-500 mt-1">Become a hydrated person</p>
              </div>
              <div className="relative w-8 h-8 flex-shrink-0">
                <input 
                  className="appearance-none w-8 h-8 rounded-full border-2 border-[#f77c18] cursor-pointer transition-all duration-300 checked:bg-[#a7e0c2] checked:border-[#a7e0c2]" 
                  id="habit4" 
                  type="checkbox"
                />
                <div className="absolute inset-0 hidden items-center justify-center text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-800">Journal one sentence</h3>
                <p className="text-sm text-gray-500 mt-1">Become a reflective person</p>
              </div>
              <div className="relative w-8 h-8 flex-shrink-0">
                <input 
                  className="appearance-none w-8 h-8 rounded-full border-2 border-[#f77c18] cursor-pointer transition-all duration-300 checked:bg-[#a7e0c2] checked:border-[#a7e0c2]" 
                  id="habit5" 
                  type="checkbox"
                />
                <div className="absolute inset-0 hidden items-center justify-center text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}