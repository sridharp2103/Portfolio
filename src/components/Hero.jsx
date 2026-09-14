import React from 'react';
import { motion } from 'framer-motion';
import { Play, Camera, ChevronDown, Video } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-lighter border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium tracking-wide text-gray-300">AVAILABLE FOR FREELANCE</span>
            </motion.div>

            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-4 text-white">
              SRIDHAR <span className="text-primary text-glow">P</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-gray-300 mb-2">
              Professional Video Editor & Content Creator
            </p>
            <p className="text-gray-500 font-light flex items-center gap-2 mb-10">
              <span className="w-8 h-[1px] bg-primary/50"></span>
              Freelance | Erode, Tamil Nadu
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://youtube.com/@Meethithamilan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-primary-glow transition-all hover:scale-105"
              >
                <Play size={18} className="fill-dark" />
                Watch My Work
              </a>
              <a 
                href="https://instagram.com/cutsbycalm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-dark-lighter border border-white/10 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:border-primary/50 hover:bg-dark transition-all hover:scale-105"
              >
                <Camera size={18} className="text-primary group-hover:text-primary-glow transition-colors" />
                View Reels
              </a>
            </div>
          </motion.div>

          {/* Visual / Mockup area */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Cinematic frame mockup */}
            <div className="relative aspect-video rounded-xl bg-dark-lighter border border-white/10 shadow-2xl overflow-hidden p-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>
              
              {/* Fake UI Editor Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-dark">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] font-mono text-gray-500">PROJ_SRIDHAR_PORTFOLIO.prproj</div>
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                  <span>1080p</span>
                  <span>24fps</span>
                </div>
              </div>

              {/* Main Video Area */}
              <div className="relative w-full h-[calc(100%-70px)] bg-black flex items-center justify-center group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <button className="relative z-10 w-16 h-16 rounded-full bg-primary/90 text-dark flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <Play size={24} className="fill-dark ml-1" />
                </button>
              </div>

              {/* Fake Timeline Scrubber */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-dark border-t border-white/5 px-4 flex flex-col justify-center">
                <div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 h-full bg-primary"
                  ></motion.div>
                </div>
                <div className="flex justify-between mt-1 text-[8px] font-mono text-gray-500">
                  <span>00:00:00:00</span>
                  <span>00:01:24:12</span>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-primary">
                <Video size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Specialization</p>
                <p className="text-sm font-bold text-white">CapCut Pro Master</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <a href="#about" className="flex flex-col items-center hover:text-primary transition-colors">
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;
