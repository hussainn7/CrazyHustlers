import { Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import { motion } from 'motion/react';

interface HeaderProps {
  activeSection: 'home' | 'map' | 'quiz';
  onNavigate: (section: 'home' | 'map' | 'quiz') => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <motion.header
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      {/* Centered pill */}
      <div className="bg-white/70 backdrop-blur-xl rounded-full border border-white/20 shadow-lg shadow-black/5 w-full max-w-3xl">
        {/* Top row inside pill */}
        <div className="flex items-center h-12 px-5 gap-4 w-full">
          {/* Logo */}
          <div className="flex items-center flex-none">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 group"
            >
              <motion.div
                className="w-1.5 h-1.5 bg-neutral-900 rounded-full"
                whileHover={{ scale: 3, borderRadius: '20%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-xs tracking-wider text-neutral-900 hidden sm:block font-medium">
                COMMUNITY HUB
              </span>
            </button>
          </div>

          {/* Desktop Navigation - centered within pill */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`text-xs transition-all relative py-1 ${
                activeSection === 'home'
                  ? 'text-neutral-900'
                  : 'text-neutral-400 hover:text-neutral-900'
              }`}
            >
              Resources
              {activeSection === 'home' && (
                <motion.div
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-neutral-900"
                  layoutId="nav-indicator"
                />
              )}
            </button>

            <button
              onClick={() => onNavigate('map')}
              className={`text-xs transition-all relative py-1 ${
                activeSection === 'map'
                  ? 'text-neutral-900'
                  : 'text-neutral-400 hover:text-neutral-900'
              }`}
            >
              Map
              {activeSection === 'map' && (
                <motion.div
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-neutral-900"
                  layoutId="nav-indicator"
                />
              )}
            </button>

            <button
              onClick={() => onNavigate('quiz')}
              className={`text-xs transition-all relative py-1 ${
                activeSection === 'quiz'
                  ? 'text-neutral-900'
                  : 'text-neutral-400 hover:text-neutral-900'
              }`}
            >
              Quiz
              {activeSection === 'quiz' && (
                <motion.div
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-neutral-900"
                  layoutId="nav-indicator"
                />
              )}
            </button>
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-3 flex-none">
            <div className="hidden lg:flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-3 py-1.5 w-36 border border-white/30">
              <Search className="w-3.5 h-3.5 text-neutral-400" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 bg-transparent p-0 focus-visible:ring-0 text-xs placeholder:text-neutral-400"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-neutral-900 hover:bg-white/50 rounded-full h-8 w-8"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden py-3 px-5 space-y-1.5 border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-full text-xs transition-all ${
                activeSection === 'home'
                  ? 'bg-white/80 text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:bg-white/50'
              }`}
            >
              Resources
            </button>

            <button
              onClick={() => {
                onNavigate('map');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-full text-xs transition-all ${
                activeSection === 'map'
                  ? 'bg-white/80 text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:bg-white/50'
              }`}
            >
              Map
            </button>

            <button
              onClick={() => {
                onNavigate('quiz');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-full text-xs transition-all ${
                activeSection === 'quiz'
                  ? 'bg-white/80 text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:bg-white/50'
              }`}
            >
              Quiz
            </button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}