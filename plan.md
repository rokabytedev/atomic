
### **AI Coding Prompt: Migrating Static HTML to a Full-Stack Interactive Next.js App - "Atomic Habit"**

#### **1. Project Overview (Project Overview)**

*   **Application Name**: Atomic Habit
*   **Core Task**: Migrate and refactor three existing static HTML files (`index.html`, `index_empty.html`, `create.html`, and `track.html`) into a fully functional Single Page Application (SPA) using **Next.js** and **Tailwind CSS**. The primary objective is to implement all client-side interactivity, state management, and data persistence using the browser's `localStorage`.
*   **Technology Stack**: **Next.js (App Router), React, Tailwind CSS, TypeScript (recommended)**
*   **Data Storage**: Browser `localStorage`

#### **2. Migration & Refactoring Guide (Migration & Refactoring Guide)**

**Primary Task: Set up the project and convert static HTML into React components.**

1.  **Initialize Next.js Project**: Create a new Next.js project using the command: `npx create-next-app@latest --typescript --tailwind --eslint`.
2.  **Convert HTML to JSX Components**:
    *   The homepage logic will be handled in `app/page.tsx`. This component will need to conditionally render one of two UIs based on whether any habits exist.
    *   Create a component `components/HabitDashboard.tsx` from the `index.html` file's content.
    *   Create another component `components/EmptyStateDashboard.tsx` from the `index_empty.html` file's content.
    *   Convert `create.html` into the route `app/create/page.tsx`.
    *   Convert `track.html` into the dynamic route `app/track/[id]/page.tsx`.
    *   **Important**: During conversion, all `class` attributes must be renamed to `className`, and any inline `<style>` tags or external CSS stylesheets must be replaced with the corresponding Tailwind CSS utility classes.

#### **3. Module Feature Implementation (Module Feature Implementation)**

**Module 1: Homepage / Habit Dashboard (`app/page.tsx`)**

*   **Static Parts**: Provided by `index.html` and `index_empty.html`.
*   **Dynamic Logic (To be implemented)**:
    *   **State Management**: Use `useState` and `useEffect` hooks. The `useEffect` hook should run on mount to read the list of habits from `localStorage` and populate a state variable, e.g., `const [habits, setHabits] = useState([])`.
    *   **Conditional Rendering**: This is the key logic for this page.
        *   If the `habits` array is empty (`habits.length === 0`), render the `<EmptyStateDashboard />` component.
        *   If the `habits` array is not empty, render the `<HabitDashboard />` component.
    *   **Data Rendering (`HabitDashboard` component)**: Pass the `habits` state as a prop. Inside the component, use the `.map()` method to iterate over the `habits` array and dynamically render the list of habit cards, ensuring a unique `key` for each.
    *   **Interactivity (`HabitDashboard` component)**:
        *   **Check-in Logic**: The checkbox on each habit card needs an `onClick` handler. This function should update the check-in status for the corresponding habit in the `habits` state and then write the updated array back to `localStorage`.
        *   **Routing**: The "New Habit" button should be a Next.js `<Link>` component pointing to `/create`. Each habit card should also be wrapped in a `<Link>` component pointing to its dynamic route, e.g., `/track/[habit.id]`.

**Module 2: Habit Creator Page (`app/create/page.tsx`)**

*   **Static Part**: Provided by `create.html`.
*   **Dynamic Logic (To be implemented)**:
    *   **Form State Management**: Use a separate `useState` hook for each form input (identity, habit action, time, location, etc.) to manage its value.
    *   **Conditional Rendering**: Use a state variable to track the selected radio button ("Specific Time & Place" vs. "After an Existing Habit"). Conditionally render the appropriate input fields based on this state's value. Use another boolean state to toggle the visibility of the "Temptation Bundle" input field.
    *   **Form Submission**: Attach an `onSubmit` handler to the `<form>` element. This function must:
        1.  Prevent the default form submission (`event.preventDefault()`).
        2.  Perform basic client-side validation (e.g., required fields are not empty).
        3.  Combine all form state values into a single habit object (JSON), generating a unique ID for it (using `Date.now().toString()` or a library like `uuid`).
        4.  Read the existing habits array from `localStorage`, push the new habit object into it, and save the updated array back to `localStorage`.
        5.  Use the `useRouter` hook from `next/navigation` to programmatically redirect the user back to the homepage (`/`).

**Module 3: Habit Tracking Page (`app/track/[id]/page.tsx`)**

*   **Static Part**: Provided by `track.html`.
*   **Dynamic Logic (To be implemented)**:
    *   **Get Dynamic Route Parameter**: Use the `useParams` hook to extract the `id` from the URL.
    *   **Data Loading & Display**: Use a `useEffect` hook that runs when the page loads or the `id` changes. Inside it, retrieve all habits from `localStorage`, find the one with the matching `id`, and store it in a state variable. Use this state to populate the "Habit Blueprint" summary card and the calendar.
    *   **Calendar Interactivity**:
        *   **Recommendation**: Integrate a lightweight React calendar library like `react-calendar`. Customize its appearance using Tailwind CSS to match the static design.
        *   Pass the habit's check-in records (an array of date strings) to the calendar component to highlight the completed days.
        *   Implement an `onClickDay` handler for the calendar. When a user clicks a date, the function should update the habit's check-in array in `localStorage` (adding the date if it's not there, removing it if it is) and then trigger a re-render to reflect the change.

#### **4. Priority Order (Priority Order)**

1.  **Project Setup & Componentization**: Initialize the Next.js project as specified. Convert the static HTML files into basic, non-interactive React components (`HabitDashboard`, `EmptyStateDashboard`, and the page components).
2.  **Implement Core Creation Logic**: Fully implement the state management and `localStorage` write functionality on the `create/page.tsx`. This is the data source for the entire app.
3.  **Implement Homepage Dynamic Rendering**: Code the logic in `app/page.tsx` to read from `localStorage` and correctly display either the `EmptyStateDashboard` or the populated `HabitDashboard`.
4.  **Implement Check-in & Tracking Logic**: Finalize the interactive logic for checking in habits on the homepage and the detailed tracking view on the `track/[id]` page, ensuring all data is persisted correctly.
5.  **Refine Routing & Styling**: Polish all navigation using `<Link>` components and fine-tune the Tailwind CSS classes to ensure the app is fully responsive and pixel-perfect according to the original static designs.

#### **5. UI Design (UI Design)**

*   **Overall Style**: Modern, clean, content-focused. Uses a card-based design system.
*   **Layout**: A mobile-first, responsive design.
*   **Page Breakdown**:
    *   **Homepage/Dashboard**: Top navigation bar with a main content area for habit cards or the empty state message.
    *   **Habit Creator Page**: A vertically scrolling form with clearly delineated sections.
    *   **Habit Tracking Page**: A habit summary card at the top, with a large calendar view below it.