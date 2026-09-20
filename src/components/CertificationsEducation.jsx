import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const CertificationsEducation = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display text-white tracking-wide">CERTIFICATION</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-dark border border-white/10 rounded-sm p-1 overflow-hidden"
          >
            <div className="relative aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
               {/* Replace with real certificate image when available */}
               <img 
                 src="https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=2070&auto=format&fit=crop" 
                 alt="Adobe Photoshop Certificate" 
                 className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/10 transition-colors duration-500"></div>
               
               <div className="absolute top-4 left-4 flex items-center gap-2 bg-dark/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                 <Award size={14} className="text-accent" />
                 <span className="text-xs font-bold text-white tracking-wider">Adobe Photoshop</span>
               </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div>
                 <h3 className="text-2xl font-bold text-white mb-2">Course Completion Certificate</h3>
                 <p className="text-gray-400 text-sm uppercase tracking-widest">Adobe Photoshop</p>
               </div>
               <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white text-white hover:text-dark font-bold tracking-wider transition-colors rounded-sm uppercase text-sm border border-white/20 hover:border-white">
                 VIEW CERTIFICATE <ExternalLink size={16} />
               </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsEducation;
