import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizQuestions } from '../data/quiz';
import QuizQuestion from '../components/ui/QuizQuestion';
import { useAppContext } from '../context/AppContext';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const QuizPage: React.FC = () => {
  const { setQuizScore, isAllLessonsCompleted, quizScore: savedScore } = useAppContext();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    Array(quizQuestions.length).fill(null)
  );
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const allQuestionsAnswered = answers.every(answer => answer !== null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestion]);
  
  const handleAnswer = (isCorrect: boolean) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = isCorrect;
    setAnswers(newAnswers);
    
    const newUserAnswers = [...userAnswers];
    // Note: This assumes we store the index of the selected option
    newUserAnswers[currentQuestion] = quizQuestions[currentQuestion].options.findIndex(
      (_, idx) => idx === (isCorrect ? quizQuestions[currentQuestion].correctAnswer : 0)
    );
    setUserAnswers(newUserAnswers);
  };
  
  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setShowResults(false);
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setShowResults(false);
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const showAnswer = () => {
    setShowResults(true);
  };
  
  const finishQuiz = () => {
    const score = answers.filter(Boolean).length;
    setQuizScore(score);
    setQuizCompleted(true);
  };
  
  if (quizCompleted) {
    const score = answers.filter(Boolean).length;
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = percentage >= 70;
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-8"
      >
        <h2 className="text-3xl font-bold mb-6">Quiz Results</h2>
        
        <div className={`p-8 rounded-2xl shadow-lg mb-8 ${
          passed ? 'bg-green-100' : 'bg-red-100'
        }`}>
          <div className="flex justify-center mb-4">
            <div className={`p-4 rounded-full ${
              passed ? 'bg-green-200' : 'bg-red-200'
            }`}>
              <CheckCircle className={`h-16 w-16 ${
                passed ? 'text-green-600' : 'text-red-600'
              }`} />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-2">
            You scored {score} out of {quizQuestions.length}
          </h3>
          <p className="text-xl mb-4">
            {percentage}% - {passed ? 'Congratulations, you passed!' : 'Try again to improve your score.'}
          </p>
          
          {passed ? (
            <p className="text-green-700 text-lg">
              Great job! You've shown a good understanding of road safety principles.
            </p>
          ) : (
            <p className="text-red-700 text-lg">
              Keep learning and try the quiz again. Review the lessons to improve your score.
            </p>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => {
              setAnswers(Array(quizQuestions.length).fill(null));
              setUserAnswers(Array(quizQuestions.length).fill(null));
              setCurrentQuestion(0);
              setShowResults(false);
              setQuizCompleted(false);
            }}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors"
          >
            Retake Quiz
          </button>
          
          {passed && (
            <button 
              onClick={() => navigate('/certificate')}
              className="bg-yellow-500 text-blue-900 py-3 px-6 rounded-lg font-medium text-lg hover:bg-yellow-600 transition-colors"
            >
              View Certificate
            </button>
          )}
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Road Safety Quiz</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Test your knowledge with these questions. Select the best answer for each question.
        </p>
      </div>
      
      {!isAllLessonsCompleted() && savedScore === null && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mb-8">
          <p className="text-yellow-700">
            For best results, complete all lessons before taking the quiz. You can still take the quiz now if you wish.
          </p>
        </div>
      )}
      
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="text-blue-800 font-medium text-center">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </p>
      </div>
      
      <QuizQuestion 
        question={quizQuestions[currentQuestion]}
        onAnswer={handleAnswer}
        showResults={showResults}
        userAnswer={userAnswers[currentQuestion]}
      />
      
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`inline-flex items-center px-4 py-2 font-medium rounded-lg ${
            currentQuestion === 0 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Previous
        </button>
        
        <div className="flex gap-4">
          {!showResults && answers[currentQuestion] === null && (
            <button
              onClick={showAnswer}
              className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
            >
              Skip Question
            </button>
          )}
          
          {!showResults && answers[currentQuestion] !== null && (
            <button
              onClick={showAnswer}
              className="px-4 py-2 bg-blue-200 text-blue-700 font-medium rounded-lg hover:bg-blue-300 transition-colors"
            >
              Show Answer
            </button>
          )}
        </div>
        
        {currentQuestion < quizQuestions.length - 1 ? (
          <button
            onClick={nextQuestion}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        ) : (
          <button
            onClick={finishQuiz}
            disabled={!answers.some(a => a !== null)}
            className={`px-4 py-2 font-medium rounded-lg ${
              !answers.some(a => a !== null)
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            Finish Quiz
          </button>
        )}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex justify-center">
          <div className="flex space-x-2">
            {quizQuestions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(idx);
                }}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  idx === currentQuestion
                    ? 'bg-blue-600 text-white'
                    : answers[idx] === true
                    ? 'bg-green-500 text-white'
                    : answers[idx] === false
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
        
        {allQuestionsAnswered && (
          <div className="text-center mt-6">
            <button
              onClick={finishQuiz}
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg text-lg hover:bg-green-700 transition-colors"
            >
              Submit All Answers
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default QuizPage;