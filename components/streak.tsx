'use client'

import { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';

export function Streak() {
  const [currentStreak, setCurrentStreak] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_lastVisit, setLastVisit] = useState<null | string>(null);
  
  useEffect(() => {
    // Load streak data from localStorage
    const streakData = localStorage.getItem('streak_data');
    if (streakData) {
      const { streak, lastVisitDate } = JSON.parse(streakData);
      
      const today = new Date().toDateString();
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toDateString();
      
      if (lastVisitDate === today) {
        // Already visited today
        setCurrentStreak(streak);
        setLastVisit(lastVisitDate);
      } else if (lastVisitDate === yesterdayString) {
        // Visited yesterday, increment streak
        const newStreak = streak + 1;
        setCurrentStreak(newStreak);
        setLastVisit(today);
        localStorage.setItem('streak_data', JSON.stringify({
          streak: newStreak,
          lastVisitDate: today
        }));
      } else {
        // Streak broken
        setCurrentStreak(1);
        setLastVisit(today);
        localStorage.setItem('streak_data', JSON.stringify({
          streak: 1,
          lastVisitDate: today
        }));
      }
    } else {
      // First visit
      const today = new Date().toDateString();
      setCurrentStreak(1);
      setLastVisit(today);
      localStorage.setItem('streak_data', JSON.stringify({
        streak: 1,
        lastVisitDate: today
      }));
    }
  }, []);
  
  return (
    <div className="flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded-full">
      <Flame className="w-5 h-5" />
      <span className="font-bold">{currentStreak} {currentStreak === 1 ? 'dag' : 'dagen'}</span>
    </div>
  );
} 