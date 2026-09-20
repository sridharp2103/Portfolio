import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/projects';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display text-white tracking-wide"
          >
            SKILLS & ARSENAL
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Software */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-accent text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
              SOFTWARE
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.software.map((skill, idx) => (
                <div key={idx} className="px-5 py-3 bg-dark border border-white/10 text-white font-medium rounded-sm hover:border-accent hover:text-accent transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Techniques */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-accent text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
              TECHNIQUES
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.techniques.map((skill, idx) => (
                <div key={idx} className="px-4 py-2 bg-dark/50 border border-white/5 text-gray-300 hover:text-white rounded-sm hover:border-white/30 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-accent text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
              FORMATS
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.formats.map((skill, idx) => (
                <div key={idx} className="px-4 py-2 bg-dark/50 border border-white/5 text-gray-300 hover:text-white rounded-sm hover:border-white/30 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
