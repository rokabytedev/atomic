export default function EmptyStateDashboard() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-4">
          <div className="flex items-center gap-3 text-gray-800">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">Atomic Habit Coach</h2>
          </div>
        </header>
        <div className="flex flex-1 items-center justify-center p-8">
          <div className="flex max-w-lg flex-col items-center gap-8 text-center">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-contain w-full max-w-[280px]" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDU24GmSaN9eaq2HfWTT4qkfno8Of8ayjQCYWXhnEuzS1YKF5ZpceCx4_5L07X2FnPSZ4q5lahi6Yd8-CfcYSpoJll2cQxEVVJTxuPZhMJ5P1JzCPmxqCHy6YfJ1nVwjud5iilAVspCGRlWIvSGObdvehy1IXT_yxWxtqSJbidrNS69_iqTohRe9h3IJnWUf0E5E1dO3ip7kHKEBmp7QIWqh0CIlTucCAH5Skib1B1VYVEz1EcJcKuhN_l_RG85JySFT59OE0epp0Ub")'}}
            ></div>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-5xl font-bold tracking-tighter text-gray-900">Your journey starts here.</h1>
              <p className="text-lg font-normal leading-relaxed text-gray-600">
                Small changes can make a big difference. Create your first habit and start building a better you, one day at a time.
              </p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#f97306] text-white text-base font-bold leading-normal shadow-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300">
              <span className="truncate">Create My First Habit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}