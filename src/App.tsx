import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { ResourceCategories } from './components/resource-categories';
import { ResourceMap } from './components/resource-map';
import { ResourceQuiz } from './components/resource-quiz';
import { AIAssistant } from './components/ai-assistant';
import { Footer } from './components/footer';
import { FloatingOrbs } from './components/floating-orbs';

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'map' | 'quiz'>('home');

  return (
    <div className="min-h-screen bg-neutral-50 relative overflow-hidden">
      <FloatingOrbs />
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      
      <AnimatePresence mode="wait">
        {activeSection === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero onStartQuiz={() => setActiveSection('quiz')} />
            <ResourceCategories />
          </motion.div>
        )}
        
        {activeSection === 'map' && (
          <motion.div
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ResourceMap />
          </motion.div>
        )}
        
        {activeSection === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ResourceQuiz />
          </motion.div>
        )}
      </AnimatePresence>
      
      <AIAssistant />
      <Footer />
    </div>
  );
}