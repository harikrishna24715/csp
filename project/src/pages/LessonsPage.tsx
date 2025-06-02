import React from 'react';
import { useNavigate } from 'react-router-dom';
import { lessons } from '../data/lessons';
import LessonCard from '../components/ui/LessonCard';
import { useAppContext } from '../context/AppContext';
import { Book, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LessonsPage: React.FC = () => {
  const { completedLessons, isAllLessonsCompleted } = useAppContext();
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Road Safety Lessons</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Choose a lesson below to learn important road safety skills.
        </p>
      </div>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mb-8">
        <div className="flex items-start">
          <Book className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
          <p className="text-yellow-700">
            Click on any lesson card to start learning. A green check mark will appear when you complete a lesson.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-blue-900">Progress</span>
          <span className="text-sm font-medium text-blue-900">
            {Object.keys(completedLessons).length} / {lessons.length} completed
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${(Object.keys(completedLessons).length / lessons.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            id={lesson.id}
            title={lesson.title}
            description={lesson.description}
            icon={lesson.icon}
            isCompleted={!!completedLessons[lesson.id]}
          />
        ))}
      </div>

      {isAllLessonsCompleted() && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-8 p-6 bg-green-100 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Congratulations! You've completed all lessons!
          </h2>
          <button
            onClick={() => navigate('/games')}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white text-xl font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            <Gamepad2 className="mr-2 h-6 w-6" />
            Play Games
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LessonsPage;