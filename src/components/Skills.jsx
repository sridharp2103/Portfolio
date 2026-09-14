import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Sparkles, LayoutTemplate, Aperture, Scissors, FastForward, Activity, MessageSquare } from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-6xl text-white tracking-wide"
            >
              THE <span className="text-primary text-glow">ARSENAL</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className="h-1 w-24 bg-primary mt-4 origin-left"
            ></motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md text-sm md:text-right"
          >
            Tools and techniques I use to transform raw footage into high-retention cinematic experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Software */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <MonitorPlay className="text-primary" size={24} />
              <h3 className="text-2xl font-display tracking-wider text-white">SOFTWARE</h3>
            </div>
            
            <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">CapCut Pro</h4>
                <span className="text-xs font-mono bg-primary/20 text-primary px-2 py-1 rounded">Specialized</span>
              </div>
              <p className="text-sm text-gray-400">Advanced masking, keyframing, speed curves, and dynamic effects for ultra-fast workflow.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl hover:border-blue-400/50 hover:bg-blue-400/5 transition-all group">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Adobe Photoshop</h4>
                <span className="text-xs font-mono bg-blue-400/20 text-blue-400 px-2 py-1 rounded">Certified</span>
              </div>
              <p className="text-sm text-gray-400">High-CTR thumbnail design, photo manipulation, and precise image asset creation.</p>
            </motion.div>
          </motion.div>

          {/* Column 2: Techniques */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="text-primary" size={24} />
              <h3 className="text-2xl font-display tracking-wider text-white">TECHNIQUES</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: <Activity size={16} />, name: "Beat-Synced Editing" },
                { icon: <Aperture size={16} />, name: "Cinematic Colour Grading" },
                { icon: <FastForward size={16} />, name: "Speed Ramps & Velocity" },
                { icon: <Scissors size={16} />, name: "J-Cuts & L-Cuts" },
                { icon: <MessageSquare size={16} />, name: "Dynamic Subtitle Styling" },
                { icon: <LayoutTemplate size={16} />, name: "High-CTR Thumbnails" }
              ].map((tech, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants} 
                  className="flex items-center gap-4 bg-dark-lighter border border-white/5 p-4 rounded-lg hover:border-primary/30 transition-colors"
                >
                  <div className="text-primary/70">{tech.icon}</div>
                  <span className="text-sm font-medium text-gray-200">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Formats */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <LayoutTemplate className="text-primary" size={24} />
              <h3 className="text-2xl font-display tracking-wider text-white">FORMATS</h3>
            </div>
            
            <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-xl border border-white/10 aspect-video">
              <div className="absolute inset-0 bg-dark-lighter z-0 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-5 z-20">
                <span className="inline-block px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] uppercase tracking-wider text-white mb-2">9:16 Vertical</span>
                <h4 className="text-lg font-bold text-white mb-1">Reels & Shorts</h4>
                <p className="text-xs text-gray-400">High-energy, fast-paced edits designed for maximum retention on Instagram & YouTube Shorts.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-xl border border-white/10 aspect-video">
              <div className="absolute inset-0 bg-dark-lighter z-0 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-5 z-20">
                <span className="inline-block px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] uppercase tracking-wider text-white mb-2">16:9 Widescreen</span>
                <h4 className="text-lg font-bold text-white mb-1">YouTube & Podcasts</h4>
                <p className="text-xs text-gray-400">Engaging long-form content, podcast cutdowns, and cinematic brand promos.</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
