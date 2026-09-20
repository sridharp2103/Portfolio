import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';

const ContactFooter = () => {
  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden bg-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display text-white tracking-wide mb-6">
              LET'S CREATE SOMETHING
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Have a video that needs an edit? Have a project in mind? Let's work together.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
            
            {/* Phone */}
            <motion.a 
              href="tel:8870719238"
              className="group bg-darker p-8 border border-white/5 rounded-sm hover:border-accent/50 transition-colors flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                <Phone size={20} className="text-white group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-2">PHONE</h3>
              <p className="text-white font-medium text-lg">8870719238</p>
            </motion.a>

            {/* Email */}
            <motion.a 
              href="mailto:sridharp2103@gmail.com"
              className="group bg-darker p-8 border border-white/5 rounded-sm hover:border-accent/50 transition-colors flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                <Mail size={20} className="text-white group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-2">EMAIL</h3>
              <p className="text-white font-medium text-sm md:text-base break-all">sridharp2103@gmail.com</p>
            </motion.a>

            {/* Personal Instagram */}
            <motion.a 
              href="https://www.instagram.com/sri_the_king.007?stkn=NDN4YnluaTl4b2Fp"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="instagram"
              className="group bg-darker p-8 border border-white/5 rounded-sm hover:border-accent/50 transition-colors flex flex-col items-center text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="absolute top-3 right-3 text-white/20 group-hover:text-accent transition-colors">
                <ArrowUpRight size={16} />
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-accent transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-2">PERSONAL INSTAGRAM</h3>
              <p className="text-white font-medium text-sm mb-4">@sri_the_king.007</p>
              <span className="text-xs text-accent uppercase font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Visit My Instagram →</span>
            </motion.a>

            {/* YouTube */}
            <motion.a 
              href="https://www.youtube.com/@Meethithamilan"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="youtube"
              className="group bg-darker p-8 border border-white/5 rounded-sm hover:border-accent/50 transition-colors flex flex-col items-center text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="absolute top-3 right-3 text-white/20 group-hover:text-accent transition-colors">
                <ArrowUpRight size={16} />
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600/10 group-hover:text-red-500 transition-all">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-red-500 transition-colors">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </div>
              <h3 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-2">YOUTUBE</h3>
              <p className="text-white font-medium text-sm mb-4">Meethithamilan</p>
              <span className="text-xs text-accent uppercase font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Watch on YouTube →</span>
            </motion.a>

          </div>

          {/* Large CTA */}
          <motion.div 
            className="bg-accent text-dark p-12 md:p-16 rounded-sm text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* CTA Background Pattern */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(circle at center, #000 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display tracking-wide mb-4">
                READY TO TURN RAW FOOTAGE INTO SOMETHING GREAT?
              </h2>
              <p className="text-xl font-medium mb-2">
                Available for freelance & project-based editing work.
              </p>
              <p className="text-sm font-bold tracking-widest uppercase opacity-70 mb-10">
                Remote • Quick Turnaround • Open to New Projects
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://www.instagram.com/sri_the_king.007?stkn=NDN4YnluaTl4b2Fp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-dark text-white font-bold tracking-wider hover:bg-darker transition-colors rounded-sm uppercase text-sm"
                >
                  INSTAGRAM →
                </a>
                <a 
                  href="mailto:sridharp2103@gmail.com"
                  className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-sm border border-dark/20 text-dark font-bold tracking-wider hover:bg-white/30 transition-colors rounded-sm uppercase text-sm"
                >
                  EMAIL ME →
                </a>
                <a 
                  href="#work"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent text-dark border border-dark font-bold tracking-wider hover:bg-dark/5 transition-colors rounded-sm uppercase text-sm"
                >
                  VIEW MY WORK →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-darker border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-display text-white tracking-widest mb-2">SRIDHAR P</h3>
              <p className="text-gray-400 text-sm">Video Editor • Content Creator • ECE Student</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://www.instagram.com/cutsbycalm/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">Editing Instagram</a>
              <a href="https://www.instagram.com/sri_the_king.007?stkn=NDN4YnluaTl4b2Fp" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Instagram</a>
              <a href="https://www.youtube.com/@Meethithamilan" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">YouTube</a>
              <a href="mailto:sridharp2103@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">Email</a>
              <a href="tel:8870719238" className="text-sm text-gray-400 hover:text-white transition-colors">Phone</a>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-white/5">
            <p className="text-gray-600 text-sm">© 2026 Sridhar P. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
