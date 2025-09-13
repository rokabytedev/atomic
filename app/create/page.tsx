export default function CreateHabitPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col">
        <header className="flex items-center justify-between border-b border-gray-200 px-4 py-6 sm:px-0">
          <a className="flex items-center gap-2 text-gray-600 hover:text-gray-900" href="#">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="text-sm font-medium">Back</span>
          </a>
          <h1 className="text-center text-xl font-bold text-gray-900">
            Create a New Habit
          </h1>
          <div className="w-16"></div>
        </header>
        <main className="flex-grow py-12">
          <form className="space-y-12 px-4 sm:px-0">
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
                />
                <input 
                  className="w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-orange-500 focus:ring-orange-500" 
                  placeholder="To achieve this, my new habit is..." 
                  type="text"
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
                    defaultChecked 
                    className="h-5 w-5 border-gray-300 text-orange-600 focus:ring-orange-500" 
                    name="cue_type" 
                    type="radio"
                  />
                  <span className="font-medium">Specific Time & Place</span>
                </label>
                <label className="flex items-center gap-3 rounded-md border border-gray-300 p-4 shadow-sm has-[:checked]:border-orange-500 has-[:checked]:ring-2 has-[:checked]:ring-orange-500">
                  <input 
                    className="h-5 w-5 border-gray-300 text-orange-600 focus:ring-orange-500" 
                    name="cue_type" 
                    type="radio"
                  />
                  <span className="font-medium">After an Existing Habit</span>
                </label>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input 
                  className="w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-orange-500 focus:ring-orange-500" 
                  placeholder="Time" 
                  type="time"
                />
                <input 
                  className="w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-orange-500 focus:ring-orange-500" 
                  placeholder="Location" 
                  type="text"
                />
              </div>
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
                  <input className="peer sr-only" type="checkbox" />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300"></div>
                </label>
              </div>
              <div>
                <input 
                  className="w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-orange-500 focus:ring-orange-500" 
                  placeholder="What temptation will you bundle with this habit?" 
                  type="text"
                />
              </div>
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