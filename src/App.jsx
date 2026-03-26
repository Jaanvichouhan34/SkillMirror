import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Profile from './pages/Profile';

// Assessment
import DomainSelect from './pages/assessment/DomainSelect';
import LevelSelect  from './pages/assessment/LevelSelect';
import Quiz         from './pages/assessment/Quiz';
import QuizResult   from './pages/assessment/QuizResult';

// Learn
import LearnHome  from './pages/learn/LearnHome';
import PathDetail from './pages/learn/PathDetail';
import LessonView from './pages/learn/LessonView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="contact" element={<Contact />} />
        <Route path="help" element={<Help />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="profile" element={<Profile />} />
        {/* Assessment routes */}
        <Route path="assessment" element={<DomainSelect />} />
        <Route path="assessment/levels/:domain" element={<LevelSelect />} />
        <Route path="assessment/quiz/:domain/:level" element={<Quiz />} />
        <Route path="assessment/result/:domain/:level" element={<QuizResult />} />
        {/* Learn routes */}
        <Route path="learn" element={<LearnHome />} />
        <Route path="learn/:pathId" element={<PathDetail />} />
        <Route path="learn/:pathId/:moduleId/:lessonId" element={<LessonView />} />
      </Route>
    </Routes>
  );
}

export default App;
