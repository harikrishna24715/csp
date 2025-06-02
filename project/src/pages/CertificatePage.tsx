import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { quizQuestions } from '../data/quiz';
import CertificateComponent from '../components/ui/CertificateComponent';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const CertificatePage: React.FC = () => {
  const { quizScore, hasPassed } = useAppContext();
  const navigate = useNavigate();
  
  if (quizScore === null) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">You need to complete the quiz first</h2>
        <button 
          onClick={() => navigate('/quiz')}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Take the Quiz
        </button>
      </div>
    );
  }
  
  if (!hasPassed) {
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Almost there!</h2>
        <p className="text-xl mb-6">
          You scored {percentage}% on the quiz. You need at least 70% to earn your certificate.
        </p>
        <button 
          onClick={() => navigate('/quiz')}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button 
        onClick={() => navigate(-1)}
        className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Congratulations!</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          You've successfully completed the Road Safety course and earned your certificate.
        </p>
      </div>
      
      <CertificateComponent 
        score={quizScore}
        totalQuestions={quizQuestions.length}
      />
    </motion.div>
  );
};

export default CertificatePage;