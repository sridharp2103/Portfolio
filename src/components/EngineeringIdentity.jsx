import React from 'react';
import { motion } from 'framer-motion';

const EngineeringIdentity = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Signature Identity</span>
          <h2 className="text-4xl md:text-5xl font-display text-white tracking-wide">
            TWO WORLDS. ONE CREATIVE MIND.
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 relative">
          
          {/* Background Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block"></div>

          {/* Left: Engineering */}
          <motion.div 
            className="flex-1 text-center md:text-right relative z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-accent font-display text-4xl lg:text-5xl mb-2 opacity-50">01</div>
            <h3 className="text-2xl font-bold text-white mb-2">ENGINEERING</h3>
            <p className="text-gray-400">B.E. Electronics & Communication Engineering</p>
            <p className="text-gray-500 text-sm mt-1">2nd Year</p>
          </motion.div>

          {/* Center: The Cross */}
          <motion.div 
            className="w-16 h-16 shrink-0 rounded-full bg-darker border-2 border-accent/50 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-2xl text-accent font-light">×</span>
          </motion.div>

          {/* Right: Editing */}
          <motion.div 
            className="flex-1 text-center md:text-left relative z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-accent font-display text-4xl lg:text-5xl mb-2 opacity-50">02</div>
            <h3 className="text-2xl font-bold text-white mb-2">EDITING</h3>
            <p className="text-gray-400">Video Editor & Content Creator</p>
            <p className="text-gray-500 text-sm mt-1">Freelancer</p>
          </motion.div>

        </div>

        <motion.div 
          className="mt-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-2xl md:text-3xl text-gray-300 font-light italic leading-relaxed">
            "Engineering teaches me how systems work.<br/>
            <span className="text-white font-medium">Editing teaches me how stories feel.</span>"
          </p>
        </motion.div>
      </div>

      {/* Abstract Background Animation (Circuit to Waveform) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between items-center z-0 overflow-hidden">
        {/* Left Side Circuit Lines */}
        <div className="w-1/2 h-full relative">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 L100,50 L100,150 L200,150" stroke="#8B5CF6" strokeWidth="1" fill="none" className="opacity-30" />
            <path d="M0,120 L50,120 L50,220 L150,220" stroke="#8B5CF6" strokeWidth="1" fill="none" className="opacity-30" />
          </svg>
        </div>
        {/* Right Side Waveform Lines */}
        <div className="w-1/2 h-full flex items-center justify-center gap-1 opacity-40">
           {Array.from({ length: 15 }).map((_, i) => (
             <motion.div
               key={i}
               className="w-[1px] bg-accent"
               initial={{ height: 10 }}
               animate={{ height: Math.random() * 100 + 20 }}
               transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror', delay: i * 0.1 }}
             />
           ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringIdentity;
