"use client";

import { useState, useEffect } from 'react';
import HabitDashboard from "@/components/HabitDashboard";
import EmptyStateDashboard from "@/components/EmptyStateDashboard";

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

export default function Home() {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const storedHabits = localStorage.getItem('habits');
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }
  }, []);

  if (habits.length === 0) {
    return <EmptyStateDashboard />;
  }

  return <HabitDashboard habits={habits} setHabits={setHabits} />;
}
