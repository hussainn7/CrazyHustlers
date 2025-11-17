import { motion } from 'motion/react';

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      {/* Subtle Minimal Spheres */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i === 0 ? '600px' : i === 1 ? '400px' : '500px',
            height: i === 0 ? '600px' : i === 1 ? '400px' : '500px',
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, i === 0 ? 50 : i === 1 ? -30 : 40, 0],
            y: [0, i === 0 ? -40 : i === 1 ? 60 : -50, 0],
          }}
          transition={{
            duration: i === 0 ? 25 : i === 1 ? 30 : 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          initial={{
            top: i === 0 ? '10%' : i === 1 ? '50%' : '70%',
            left: i === 0 ? '60%' : i === 1 ? '10%' : '70%',
          }}
        />
      ))}

      {/* Minimalist 3D Spheres */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`sphere-${i}`}
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.02))',
            boxShadow: `
              inset -20px -20px 40px rgba(0, 0, 0, 0.08),
              inset 20px 20px 40px rgba(255, 255, 255, 0.5),
              0 20px 40px rgba(0, 0, 0, 0.05)
            `,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
          initial={{
            top: `${15 + i * 20}%`,
            left: `${5 + i * 25}%`,
          }}
        />
      ))}
    </div>
  );
}