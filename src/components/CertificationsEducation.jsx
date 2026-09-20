import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const CertificationsEducation = () => {
  return (
    <section id="certifications" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Certification Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Award className="text-accent" size={32} />
              <h2 className="text-4xl font-display text-white tracking-wide">CERTIFICATION</h2>
            </div>

            <div className="relative group rounded-sm overflow-hidden bg-darker border border-white/10 hover:border-accent/40 transition-colors">
              {/* Premium Certificate Card */}
              <div className="aspect-[4/3] overflow-hidden relative bg-black flex flex-col items-center justify-center">
                <img 
                  src="/certificate.pdf"
                  alt="Adobe Photoshop Course Completion Certificate"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Fallback to a styled placeholder if browser can't render PDF as img directly
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback styling for PDF if img tag fails */}
                <div className="hidden absolute inset-0 bg-darker flex-col items-center justify-center p-8 text-center border-2 border-accent/20 m-4 rounded-sm">
                   <Award size={48} className="text-accent mb-4" />
                   <h3 className="text-2xl text-white font-bold mb-2">Adobe Photoshop</h3>
                   <p className="text-gray-400 font-medium tracking-widest uppercase text-sm">Course Completion Certificate</p>
                </div>
                
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500"></div>
              </div>

              <div className="p-6 bg-gradient-to-b from-transparent to-darker border-t border-white/5 flex flex-col items-start">
                <h3 className="text-xl font-bold text-white mb-1">Adobe Photoshop</h3>
                <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">Course Completion Certificate</p>
                
                <a 
                  href="/certificate.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-cursor="open"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-accent text-white text-sm font-bold tracking-widest uppercase rounded-sm transition-colors border border-white/10 hover:border-accent group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                >
                  VIEW CERTIFICATE <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-accent" size={32} />
              <h2 className="text-4xl font-display text-white tracking-wide">EDUCATION</h2>
            </div>
            
            <div className="relative group rounded-sm overflow-hidden bg-darker border border-white/10 p-8 hover:border-accent/40 transition-colors h-full">
              <div className="flex flex-col h-full justify-center">
                 <h3 className="text-2xl font-bold text-white mb-2">B.E. Electronics and Communication Engineering</h3>
                 <p className="text-accent text-sm font-bold tracking-widest uppercase mb-6">2nd Year Student</p>
                 <p className="text-gray-400 leading-relaxed">
                   Currently pursuing my engineering degree while working as a professional video editor. 
                   The engineering mindset helps me approach video editing with precision, technical problem-solving, and efficient workflows.
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsEducation;
