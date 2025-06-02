import React, { useRef } from 'react';
import { Award, Download, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface CertificateProps {
  score: number;
  totalQuestions: number;
  name?: string;
}

const CertificateComponent: React.FC<CertificateProps> = ({ score, totalQuestions, name = "Road Safety Learner" }) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const date = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const downloadCertificate = () => {
    alert("Download functionality would be implemented here.");
    // In a real implementation, this would create a PDF or image of the certificate
  };
  
  const shareCertificate = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Road Safety Certificate',
        text: `I scored ${percentage}% on my road safety quiz!`,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        ref={certificateRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-8 border-double border-yellow-500 rounded-lg p-8 max-w-2xl w-full shadow-xl my-8"
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Award className="h-16 w-16 text-yellow-500" />
          </div>
          
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Certificate of Achievement</h2>
          <p className="text-lg text-gray-600 mb-6">Road Safety Education Program</p>
          
          <p className="text-xl mb-4">This certifies that</p>
          <p className="text-2xl font-bold text-blue-800 mb-4">{name}</p>
          <p className="text-xl mb-6">has successfully completed the Road Safety course with a score of</p>
          <p className="text-3xl font-bold text-green-600 mb-6">{percentage}%</p>
          
          <div className="mb-6 border-t-2 border-gray-200 pt-4">
            <p className="text-lg">Awarded on {date}</p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-32 border-t-2 border-black pt-2">
              <p className="text-lg font-medium">SafeSteps</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button 
          onClick={downloadCertificate}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="h-5 w-5" />
          Download Certificate
        </button>
        
        <button 
          onClick={shareCertificate}
          className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-green-700 transition-colors"
        >
          <Share2 className="h-5 w-5" />
          Share Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificateComponent;