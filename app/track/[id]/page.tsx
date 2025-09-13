export default function TrackHabitPage() {
  return (
    <div className="bg-[#f9fafb] text-[#111827]">
      <div className="flex flex-col min-h-screen">
        <header className="w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-5">
              <a className="flex items-center gap-2 text-[#6b7280] hover:text-[#111827] transition-colors" href="#">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fillRule="evenodd"></path>
                </svg>
                <span>Back</span>
              </a>
              <h1 className="text-xl font-bold text-[#111827]">Atomic Habit Coach</h1>
            </div>
          </div>
        </header>
        <main className="flex-grow w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-10">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">Morning Meditation</h2>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-[#e5e7eb]">
              <h3 className="text-lg font-semibold text-[#111827] mb-3">Habit Blueprint</h3>
              <div className="space-y-2 text-[#6b7280]">
                <p><span className="font-medium text-[#111827]">Identity:</span> I am a calm and mindful person.</p>
                <p><span className="font-medium text-[#111827]">Cue:</span> After waking up.</p>
                <p><span className="font-medium text-[#111827]">Reward:</span> A sense of peace and focus.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-[#e5e7eb]">
              <div className="flex items-center justify-between mb-4">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <svg className="h-6 w-6 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
                <h4 className="text-lg font-semibold text-[#111827]">July 2024</h4>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <svg className="h-6 w-6 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                <div className="text-xs font-semibold text-[#6b7280] py-2">S</div>
                <div className="text-xs font-semibold text-[#6b7280] py-2">M</div>
                <div className="text-xs font-semibold text-[#6b7280] py-2">T</div>
                <div className="text-xs font-semibold text-[#6b7280] py-2">W</div>
                <div className="text-xs font-semibold text-[#6b7280] py-2">T</div>
                <div className="text-xs font-semibold text-[#6b7280] py-2">F</div>
                <div className="text-xs font-semibold text-[#6b7280] py-2">S</div>
                <div className="col-start-4"></div>
                <div className="text-sm py-2">1</div>
                <div className="text-sm py-2">2</div>
                <div className="text-sm py-2">3</div>
                <div className="text-sm py-2 bg-[#e6f7f2] text-[#047857] rounded-full font-semibold">4</div>
                <div className="text-sm py-2 bg-[#e6f7f2] text-[#047857] rounded-full font-semibold">5</div>
                <div className="text-sm py-2 bg-[#e6f7f2] text-[#047857] rounded-full font-semibold">6</div>
                <div className="text-sm py-2">7</div>
                <div className="text-sm py-2">8</div>
                <div className="text-sm py-2 bg-[#e6f7f2] text-[#047857] rounded-full font-semibold">9</div>
                <div className="text-sm py-2">10</div>
                <div className="text-sm py-2 bg-[#e6f7f2] text-[#047857] rounded-full font-semibold">11</div>
                <div className="text-sm py-2">12</div>
                <div className="text-sm py-2">13</div>
                <div className="text-sm py-2 bg-white text-[#047857] rounded-full font-bold shadow-md ring-2 ring-[#047857]">14</div>
                <div className="text-sm py-2">15</div>
                <div className="text-sm py-2">16</div>
                <div className="text-sm py-2">17</div>
                <div className="text-sm py-2">18</div>
                <div className="text-sm py-2">19</div>
                <div className="text-sm py-2">20</div>
                <div className="text-sm py-2">21</div>
                <div className="text-sm py-2">22</div>
                <div className="text-sm py-2">23</div>
                <div className="text-sm py-2">24</div>
                <div className="text-sm py-2">25</div>
                <div className="text-sm py-2">26</div>
                <div className="text-sm py-2">27</div>
                <div className="text-sm py-2">28</div>
                <div className="text-sm py-2">29</div>
                <div className="text-sm py-2">30</div>
                <div className="text-sm py-2">31</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-[#e5e7eb] text-center">
                <p className="text-sm font-medium text-[#6b7280]">Current Streak</p>
                <p className="text-4xl font-bold text-[#047857] mt-2">5 days</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-[#e5e7eb] text-center">
                <p className="text-sm font-medium text-[#6b7280]">Total Completions</p>
                <p className="text-4xl font-bold text-[#047857] mt-2">20</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}