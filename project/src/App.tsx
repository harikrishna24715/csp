import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import LessonDetail from './pages/LessonDetail';
import QuizPage from './pages/QuizPage';
import CertificatePage from './pages/CertificatePage';
import GamesPage from './pages/GamesPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/lessons/:id" element={<LessonDetail />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/games" element={<GamesPage />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App