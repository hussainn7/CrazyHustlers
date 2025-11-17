import { Button } from './ui/button';
import { ArrowRight, MapPin, Heart, Users, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onStartQuiz: () => void;
}

export function Hero({ onStartQuiz }: HeroProps) {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-neutral-900">
        {/* Placeholder for video - replace with actual video URL */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900" />
        {/* 
          To add a real video:
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
          </video>
        */}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        {/* Animated placeholder - simulating people helping */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-neutral-600 text-9xl"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Users className="w-64 h-64" strokeWidth={0.5} />
          </motion.div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm text-white">Community Driven</span>
              </motion.div>

              <h1 className="text-7xl mb-6 text-white leading-tight">
                Together we make
                <br />
                a difference
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                Watch how our volunteers connect people with vital community resources. 
                Join us in making support accessible for everyone.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-start gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  onClick={onStartQuiz} 
                  className="gap-2 bg-white text-neutral-900 hover:bg-neutral-100 px-8 text-base h-12 shadow-xl"
                >
                  Find resources now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 text-base h-12"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch story
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                { icon: MapPin, value: '250+', label: 'Organizations' },
                { icon: Heart, value: '15', label: 'Categories' },
                { icon: Users, value: '10k+', label: 'People Helped' },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <stat.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-2xl text-white">{stat.value}</div>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}