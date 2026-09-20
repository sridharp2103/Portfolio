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
              href="https://www.youtube.com/@Meethitamilan"
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
              <p className="text-white font-medium text-sm mb-4">Meethitamilan</p>
              <span className="text-xs text-accent uppercase font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Watch on YouTube →</span>
            </motion.a>

          </div>

          {/* Enquiry Form Section */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
            {/* Form Side */}
            <motion.div
              className="bg-darker p-8 md:p-12 border border-white/10 rounded-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-display text-white mb-6 tracking-wide">SEND AN ENQUIRY</h3>
              <form action="https://formsubmit.co/sridharp2103@gmail.com" method="POST" className="flex flex-col gap-6">
                {/* Disable Captcha for smoother UX (FormSubmit feature) */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Enquiry from Portfolio Website!" />
                <input type="hidden" name="_next" value={window.location.href} />

                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Your Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-dark border border-white/10 focus:border-white focus:outline-none text-white px-4 py-3 rounded-sm transition-colors" placeholder="John Doe" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Your Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-dark border border-white/10 focus:border-white focus:outline-none text-white px-4 py-3 rounded-sm transition-colors" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Project Details</label>
                  <textarea id="message" name="message" rows="4" required className="w-full bg-dark border border-white/10 focus:border-white focus:outline-none text-white px-4 py-3 rounded-sm transition-colors resize-none" placeholder="Tell me about your video editing needs..."></textarea>
                </div>

                <button type="submit" className="w-full bg-white text-black font-bold tracking-widest uppercase py-4 mt-2 hover:bg-gray-200 transition-colors rounded-sm">
                  SEND ENQUIRY →
                </button>
              </form>
            </motion.div>

            {/* CTA Side */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display tracking-wide text-white mb-6">
                READY TO TURN RAW FOOTAGE INTO SOMETHING GREAT?
              </h2>
              <p className="text-xl font-medium text-gray-400 mb-6">
                Available for freelance & project-based editing work. Remote • Quick Turnaround • Open to New Projects.
              </p>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.instagram.com/sri_the_king.007?stkn=NDN4YnluaTl4b2Fp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit px-8 py-4 bg-white/5 border border-white/10 text-white font-bold tracking-wider hover:bg-white hover:text-black transition-colors rounded-sm uppercase text-sm"
                >
                  MESSAGE ON INSTAGRAM →
                </a>
                <a 
                  href="mailto:sridharp2103@gmail.com"
                  className="w-fit px-8 py-4 bg-transparent border border-white/10 text-white font-bold tracking-wider hover:border-white hover:text-white transition-colors rounded-sm uppercase text-sm"
                >
                  EMAIL ME DIRECTLY →
                </a>
              </div>
            </motion.div>
          </div>
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
              <a href="https://www.youtube.com/@Meethitamilan" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">YouTube</a>
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
