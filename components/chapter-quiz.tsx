'use client'

import { useState } from 'react';
import quiz_4_4 from '@/content/quizzes/4_4.json';
import { BookOpen, X } from 'lucide-react';
import { Quiz } from './quiz';
import { CodeChallenge } from './code-challenge';

// External quiz registry (expandable)
const quizRegistry: Record<string, {
  title: string;
  quiz: { question: string; options: string[]; correctAnswer: number }[];
  codeChallenge: { initialCode: string; expectedOutput: string; hint: string; solution: string };
}> = {
  '4.4': quiz_4_4 as unknown as {
    title: string;
    quiz: { question: string; options: string[]; correctAnswer: number }[];
    codeChallenge: { initialCode: string; expectedOutput: string; hint: string; solution: string };
  }
};

// Add a type for the chapter content
type ChapterContentType = {
  [key: string]: {
    title: string;
    quiz: {
      question: string;
      options: string[];
      correctAnswer: number;
    }[];
    codeChallenge: {
      initialCode: string;
      expectedOutput: string;
      hint: string;
      solution: string;
    };
  };
};

// Map of chapter IDs to their quizzes and challenges (externalized)
const chapterContent: ChapterContentType = Object.fromEntries(
  Object.entries(quizRegistry).map(([key, value]) => [key, value])
);

export function ChapterQuiz({ 
  chapterId,
  currentCourse,
  modalMode = false
}: { 
  chapterId: string, 
  currentCourse: string,
  modalMode?: boolean
}) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showChallenge, setShowChallenge] = useState(false);
  
  // Check if we have content for this chapter
  const content = chapterContent[chapterId];
  
  // Add this debug message
  console.log(`ChapterQuiz: chapterId=${chapterId}, content=${content ? 'found' : 'not found'}`);
  
  if (!content) return null;
  
  // Track completion in localStorage to update achievements
  const markQuizCompleted = (score: number, total: number) => {
    const key = `${currentCourse}_quiz_${chapterId}`;
    localStorage.setItem(key, JSON.stringify({ completed: true, score, total }));
    
    // If perfect score, unlock achievement
    if (score === total) {
      const savedAchievements = localStorage.getItem(`achievements_${currentCourse}`);
      const achievements = savedAchievements ? JSON.parse(savedAchievements) : [];
      
      if (!achievements.includes('perfect_quiz')) {
        const newAchievements = [...achievements, 'perfect_quiz'];
        localStorage.setItem(`achievements_${currentCourse}`, JSON.stringify(newAchievements));
      }
    }
  };
  
  const markChallengeCompleted = () => {
    const key = `${currentCourse}_challenge_${chapterId}`;
    localStorage.setItem(key, JSON.stringify({ completed: true }));
    
    // Unlock achievement for first challenge
    const savedAchievements = localStorage.getItem(`achievements_${currentCourse}`);
    const achievements = savedAchievements ? JSON.parse(savedAchievements) : [];
    
    if (!achievements.includes('first_challenge')) {
      const newAchievements = [...achievements, 'first_challenge'];
      localStorage.setItem(`achievements_${currentCourse}`, JSON.stringify(newAchievements));
    }
    
    // Count completed challenges
    const challengeCount = Object.keys(localStorage)
      .filter(key => key.startsWith(`${currentCourse}_challenge_`) && 
              JSON.parse(localStorage.getItem(key) || '{}').completed)
      .length;
    
    // Unlock achievement for 5 challenges
    if (challengeCount >= 5 && !achievements.includes('five_challenges')) {
      const newAchievements = [...achievements, 'five_challenges'];
      localStorage.setItem(`achievements_${currentCourse}`, JSON.stringify(newAchievements));
    }
  };
  
  // If in modal mode, just render the quiz or challenge directly
  if (modalMode) {
    if (content) {
      return (
        <div>
          <Quiz questions={content.quiz} onComplete={markQuizCompleted} />
        </div>
      );
    }
    return null;
  }
  
  // Otherwise render the buttons
  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-bold">Test je kennis</h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setShowQuiz(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
        >
          <BookOpen className="w-5 h-5" />
          <span>Quiz: {content.title}</span>
        </button>
        
        <button
          onClick={() => setShowChallenge(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
        >
          <BookOpen className="w-5 h-5" />
          <span>Code Challenge: {content.title}</span>
        </button>
      </div>
      
      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Quiz: {content.title}</h2>
              <button 
                onClick={() => setShowQuiz(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <Quiz questions={content.quiz} onComplete={(score, total) => {
              markQuizCompleted(score, total);
            }} />
          </div>
        </div>
      )}
      
      {showChallenge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Code Challenge: {content.title}</h2>
              <button 
                onClick={() => setShowChallenge(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <CodeChallenge 
              initialCode={content.codeChallenge.initialCode}
              expectedOutput={content.codeChallenge.expectedOutput}
              hint={content.codeChallenge.hint}
              solution={content.codeChallenge.solution}
              onComplete={() => {
                markChallengeCompleted();
              }}
              showSolutionButton={false}
            />
          </div>
        </div>
      )}
    </div>
  );
} 