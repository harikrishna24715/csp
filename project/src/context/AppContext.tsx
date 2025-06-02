import React, { createContext, useContext, useState, useEffect } from 'react';
import { lessons } from '../data/lessons';
import { quizQuestions } from '../data/quiz';

type LessonProgress = {
  [key: string]: boolean;
};

type AppContextType = {
  completedLessons: LessonProgress;
  quizScore: number | null;
  markLessonComplete: (lessonId: string) => void;
  setQuizScore: (score: number) => void;
  resetProgress: () => void;
  isAllLessonsCompleted: () => boolean;
  hasPassed: boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY = 'roadwise_progress';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<LessonProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error('Error loading progress:', error);
      return {};
    }
  });
  
  const [quizScore, setQuizScore] = useState<number | null>(() => {
    try {
      const saved = localStorage.getItem('quizScore');
      return saved ? parseInt(saved, 10) : null;
    } catch (error) {
      console.error('Error loading quiz score:', error);
      return null;
    }
  });

  const hasPassed = quizScore !== null && quizScore >= Math.floor(quizQuestions.length * 0.7);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessons));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }, [completedLessons]);

  useEffect(() => {
    if (quizScore !== null) {
      try {
        localStorage.setItem('quizScore', quizScore.toString());
      } catch (error) {
        console.error('Error saving quiz score:', error);
      }
    }
  }, [quizScore]);

  const markLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => ({
      ...prev,
      [lessonId]: true
    }));
  };

  const resetProgress = () => {
    setCompletedLessons({});
    setQuizScore(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('quizScore');
    } catch (error) {
      console.error('Error resetting progress:', error);
    }
  };

  const isAllLessonsCompleted = () => {
    return lessons.every(lesson => completedLessons[lesson.id]);
  };

  return (
    <AppContext.Provider 
      value={{ 
        completedLessons, 
        quizScore, 
        markLessonComplete, 
        setQuizScore, 
        resetProgress, 
        isAllLessonsCompleted,
        hasPassed
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};