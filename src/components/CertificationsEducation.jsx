import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, CheckCircle } from 'lucide-react';

const CertificationsEducation = () => {
  return (
    <section id="credentials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16 md:mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl text-white tracking-wide"
          >
            CREDENTIALS <span className="text-primary text-glow">&</span> PATH
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-primary mt-4 mx-auto origin-center"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2 text-primary">
              <Award size={28} />
              <h3 className="text-2xl font-display tracking-wider text-white">CERTIFICATION</h3>
            </div>
            
            <div className="glass-card p-1 rounded-2xl relative group overflow-hidden h-full">
              {/* Glowing gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="bg-dark p-6 rounded-xl h-full relative z-10 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop Logo" className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">Adobe Photoshop</h4>
                  <p className="text-primary font-medium text-sm mb-4">Course Completion Certificate</p>
                  
                  <p className="text-gray-400 text-sm mb-6">
                    Comprehensive training in advanced photo manipulation, colour grading, masking, and high-impact thumbnail design tailored for social media growth.
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10">
                  <CheckCircle size={14} className="text-green-500" />
                  <span>Verified Skill</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2 text-primary">
              <GraduationCap size={28} />
              <h3 className="text-2xl font-display tracking-wider text-white">EDUCATION</h3>
            </div>
            
            <div className="glass-card p-1 rounded-2xl relative group overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="bg-dark p-6 rounded-xl h-full relative z-10 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    <span className="font-display text-2xl">B.E.</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 leading-tight">Electronics & Communication Engineering</h4>
                  <p className="text-primary font-medium text-sm mb-4">Currently Pursuing — 2nd Year</p>
                  
                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm">
                      <strong className="text-gray-200">The Engineering Edge:</strong> My background in ECE provides a highly analytical approach to problem-solving. It allows me to build extremely efficient editing workflows and understand the technical depths of video compression, bitrates, and audio frequencies.
                    </p>
                    <p className="text-gray-500 text-xs italic">
                      Based in Erode, Tamil Nadu. Balancing academic rigor with creative execution.
                    </p>
                  </div>
                </div>
                
                <div className="w-full h-1.5 bg-white/5 rounded-full mt-6 overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full bg-primary/50 w-1/2"></div>
                  <span className="absolute -top-5 right-[50%] translate-x-1/2 text-[10px] text-primary">50%</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CertificationsEducation;
