import Link from 'next/link';

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
              style={{backgroundImage: 'url("/hero.png")'}}
            ></div>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-5xl font-bold tracking-tighter text-gray-900">Your journey starts here.</h1>
              <p className="text-lg font-normal leading-relaxed text-gray-600">
                Small changes can make a big difference. Create your first habit and start building a better you, one day at a time.
              </p>
            </div>
            <Link href="/create" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#f77c18] text-white text-base font-bold leading-normal shadow-lg hover:bg-[#f77c18]/90 focus:outline-none focus:ring-2 focus:ring-[#f77c18] focus:ring-offset-2 transition-all duration-300">
              <span className="truncate">Create My First Habit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}