import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Target, Clock, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-lighter/30">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl text-white tracking-wide"
          >
            THE <span className="text-primary text-glow">MINDSET</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-primary mt-4 mx-auto md:mx-0 origin-left"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Story Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-6 text-gray-300 text-lg font-light leading-relaxed"
          >
            <p className="text-2xl font-medium text-white mb-8 border-l-4 border-primary pl-6">
              "Engineering mindset. Editor's eye."
            </p>
            
            <p>
              My journey started back in 10th standard when I first discovered the magic of manipulating time and emotion through cuts. What began as a curiosity quickly evolved into an obsession with visual storytelling.
            </p>
            
            <p>
              Today, I balance my work as a <strong className="text-white font-medium">freelance video editor</strong> with pursuing a <strong className="text-white font-medium">B.E. in Electronics and Communication Engineering (2nd Year)</strong>. This isn't a contradiction—it's my unfair advantage. The technical rigor of engineering gives me the discipline for complex workflows, precise pacing, and problem-solving, while my creative side brings the "mass and class" cinematic flair.
            </p>
            
            <p>
              I specialize in <strong className="text-primary">CapCut Pro</strong>, pushing the software to its absolute limits to craft high-retention, beat-synced, and visually striking content for YouTube and Instagram.
            </p>
          </motion.div>

          {/* Stats / Challenge Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* The 30/30 Card */}
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The Consistency Engine</h3>
                  <p className="text-sm text-gray-400">Self-Driven Challenge</p>
                </div>
              </div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-end">
                  <div className="text-4xl font-display text-primary text-glow-sm">30/30</div>
                  <div className="text-sm text-gray-400 font-medium mb-1">VIDEOS IN DAYS</div>
                </div>
                <p className="text-sm text-gray-300">
                  Completed a grueling self-imposed challenge to edit and publish one high-quality video every single day for a month. This forged my speed, consistency, and ability to deliver under pressure.
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                <Clock className="text-primary opacity-70" size={20} />
                <div>
                  <div className="text-xs text-gray-400 mb-1">Experience</div>
                  <div className="text-lg font-bold text-white">2+ Years</div>
                </div>
              </div>
              <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                <Zap className="text-primary opacity-70" size={20} />
                <div>
                  <div className="text-xs text-gray-400 mb-1">Turnaround</div>
                  <div className="text-lg font-bold text-white">Fast & Precise</div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
