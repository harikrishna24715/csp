export type Translation = {
  [key: string]: {
    [key: string]: string;
  };
};

export const translations: Translation = {
  en: {
    welcome: "Learn Road Safety",
    startLearning: "Start Learning",
    takeQuiz: "Take Quiz",
    lessons: "Lessons",
    games: "Games",
    certificate: "Certificate",
    about: "About SafeSteps",
    contact: "Contact Us"
  },
  hi: {
    welcome: "सड़क सुरक्षा सीखें",
    startLearning: "सीखना शुरू करें",
    takeQuiz: "परीक्षा दें",
    lessons: "पाठ",
    games: "खेल",
    certificate: "प्रमाणपत्र",
    about: "सेफस्टेप्स के बारे में",
    contact: "संपर्क करें"
  }
};