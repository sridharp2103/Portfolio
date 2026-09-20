import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const FeaturedProject = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">Featured</span>
          <h2 className="text-4xl md:text-5xl font-display text-white tracking-wide">30 VIDEOS / 30 DAYS</h2>
        </motion.div>

        <div className="relative rounded-sm overflow-hidden group">
          {/* Background Image / Thumbnail */}
          <div className="absolute inset-0 bg-gray-900">
             <img 
               src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop" 
               alt="30 Videos 30 Days Challenge" 
               className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
          </div>

          <div className="relative z-10 px-6 py-16 md:py-24 md:px-16 flex flex-col md:flex-row items-end justify-between gap-8 h-full min-h-[500px]">
            <motion.div 
              className="max-w-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                A Self-Driven Editing Challenge
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light">
                "Focused on improving speed, consistency, creativity and storytelling. One video every day, no excuses."
              </p>
              
              <div className="flex gap-6 mb-8 text-white font-display tracking-wider text-xl">
                <div>
                  <span className="block text-accent text-sm tracking-widest mb-1">VIDEOS</span>
                  30
                </div>
                <div>
                  <span className="block text-accent text-sm tracking-widest mb-1">DAYS</span>
                  30
                </div>
                <div>
                  <span className="block text-accent text-sm tracking-widest mb-1">EDITOR</span>
                  1
                </div>
              </div>

              <a 
                href="https://www.instagram.com/cutsbycalm/" 
                target="_blank" 
                rel="noopener noreferrer"
                data-cursor="play"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-dark font-bold tracking-wider hover:bg-gray-200 transition-colors rounded-sm"
              >
                <Play size={18} className="fill-dark" />
                VIEW PROJECT
              </a>
            </motion.div>

            {/* Play Button Overlay Graphic */}
            <motion.div 
              className="hidden md:flex items-center justify-center w-24 h-24 rounded-full border border-white/20 backdrop-blur-sm group-hover:bg-accent/20 group-hover:border-accent transition-colors duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Play size={32} className="text-white ml-2" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
