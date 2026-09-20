import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const WatchMyWork = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display text-white tracking-wide mb-2">WATCH MY WORK</h2>
            <div className="flex items-center gap-3 text-gray-400 text-lg">
               <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
               </svg>
               <span className="font-bold text-white tracking-wider">MEETHITHAMILAN</span>
            </div>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="https://www.youtube.com/@Meethithamilan"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="youtube"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold tracking-wider hover:bg-red-700 transition-colors uppercase rounded-sm"
          >
            VISIT YOUTUBE CHANNEL <ExternalLink size={16} />
          </motion.a>
        </div>

        <motion.div 
          className="relative rounded-sm overflow-hidden bg-darker border border-white/5 aspect-video w-full max-w-4xl mx-auto shadow-2xl group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Mock YouTube Player UI */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop" 
               alt="YouTube Channel Preview"
               className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" 
             />
          </div>
          
          <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-500 flex items-center justify-center">
             <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
               <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="black"></polygon>
               </svg>
             </div>
          </div>
          
          {/* YouTube Bottom Bar Mock */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20">
             <div className="h-full bg-red-600 w-1/3 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
             </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default WatchMyWork;
