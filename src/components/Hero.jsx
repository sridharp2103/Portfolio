import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Interactive Cinematic Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex flex-col justify-between">
        {/* Top Timeline */}
        <div className="h-12 border-b border-white/10 flex items-end px-4 gap-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`t-top-${i}`} className="h-2 w-[1px] bg-white/20 mb-1 flex-shrink-0" style={{ marginRight: '2%' }}></div>
          ))}
        </div>
        
        {/* Center Circuit / Waveform Elements */}
        <div className="flex-1 relative flex items-center justify-center opacity-30">
          <motion.div 
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at center, #8B5CF6 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
          {/* Subtle Glowing Orbs */}
          <motion.div 
            className="absolute w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Bottom Timeline */}
        <div className="h-16 border-t border-white/10 flex items-start px-4 gap-4 mt-auto overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div 
              key={`w-${i}`} 
              className="w-1 bg-accent/40 rounded-t-sm"
              initial={{ height: Math.random() * 40 + 5 }}
              animate={{ height: Math.random() * 40 + 5 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex flex-col md:flex-row items-center gap-3 md:gap-6 text-sm text-gray-400 tracking-widest uppercase font-medium"
        >
          <span>ECE Student</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span>Freelance Editor</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span>Erode, Tamil Nadu</span>
        </motion.div>

        <motion.h1 
          className="text-7xl md:text-[9rem] lg:text-[11rem] leading-none font-display text-white mb-2 tracking-tighter flex justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
        >
          {"SRIDHAR".split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span 
            className="text-accent"
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
            }}
          >.</motion.span>
          <motion.span
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
            }}
          >P</motion.span>
        </motion.h1>

        <motion.h2 
          className="text-2xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          VIDEO EDITOR <span className="mx-2 md:mx-4 opacity-50">×</span> CONTENT CREATOR
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I turn raw footage into scroll-stopping stories.
        </motion.p>

        <motion.div
          className="mb-12 inline-block px-6 py-2 border border-accent/30 rounded-full bg-accent/5 backdrop-blur-sm text-accent font-medium tracking-wide text-sm shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Engineering mindset. Editor's eye.
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="https://www.youtube.com/@Meethitamilan"
            target="_blank" 
            rel="noopener noreferrer"
            data-cursor="youtube"
            className="group relative px-8 py-4 bg-white text-dark font-bold tracking-wider hover:bg-gray-100 transition-colors flex items-center gap-3 overflow-hidden rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Play size={18} className="fill-dark" />
              WATCH MY WORK
            </span>
            <div className="absolute inset-0 h-full w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
          </a>

          <a 
            href="https://www.instagram.com/cutsbycalm/"
            target="_blank" 
            rel="noopener noreferrer"
            data-cursor="reels"
            className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-wider hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-3 rounded-sm"
          >
            VIEW MY REELS
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Editor UI Elements Overlay */}
      <div className="absolute top-24 left-6 hidden xl:flex flex-col gap-2 font-mono text-[10px] text-gray-500 select-none">
        <div>REC [00:00:00:00]</div>
        <div>FPS: 24.000</div>
        <div>RES: 3840x2160</div>
      </div>
      <div className="absolute bottom-12 right-6 hidden xl:flex flex-col gap-2 font-mono text-[10px] text-gray-500 text-right select-none">
        <div>AUDIO: 48000Hz</div>
        <div>COLOR: REC.709</div>
        <div className="text-accent animate-pulse">RENDER COMPLETE</div>
      </div>
    </section>
  );
};

export default Hero;
