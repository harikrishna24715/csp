import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { lessons } from '../data/lessons';
import { useAppContext } from '../context/AppContext';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const LessonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { markLessonComplete, completedLessons } = useAppContext();
  
  const lesson = lessons.find(lesson => lesson.id === id);
  
  const isCompleted = id ? !!completedLessons[id] : false;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleComplete = () => {
    if (id) {
      markLessonComplete(id);
      navigate('/lessons');
    }
  };
  
  if (!lesson) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
        <button 
          onClick={() => navigate('/lessons')}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Lessons
        </button>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button 
        onClick={() => navigate('/lessons')}
        className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Lessons
      </button>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">{lesson.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{lesson.description}</p>
          
          <div className="space-y-8">
            {lesson.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-blue-800 mb-3">{section.title}</h2>
                <p className="text-lg text-gray-700 mb-4">{section.text}</p>
                {section.image && (
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-48 md:h-64 object-cover rounded-lg"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button 
          onClick={handleComplete}
          disabled={isCompleted}
          className={`inline-flex items-center px-6 py-3 text-xl font-medium rounded-lg transition-colors ${
            isCompleted 
              ? 'bg-green-100 text-green-700 cursor-not-allowed' 
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="h-6 w-6 mr-2" />
              Lesson Completed
            </>
          ) : (
            'Mark as Completed'
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default LessonDetail;