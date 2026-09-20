import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    title: "REELS",
    desc: "Short-form content designed for attention and retention."
  },
  {
    title: "YOUTUBE",
    desc: "Long-form videos with pacing, storytelling and clean transitions."
  },
  {
    title: "INFLUENCER EDITS",
    desc: "Personal-brand focused content for creators."
  },
  {
    title: "CINEMATIC EDITS",
    desc: "High-energy mass + class visual style."
  },
  {
    title: "THUMBNAILS",
    desc: "Eye-catching YouTube and social thumbnails."
  },
  {
    title: "PHOTO EDITING",
    desc: "Professional social-media-ready image editing."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-dark">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display text-white tracking-wide">WHAT I CAN EDIT</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-darker border border-white/5 p-8 rounded-sm overflow-hidden hover:border-accent/50 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Subtle Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 tracking-wider">
                {service.title}
              </h3>
              <p className="text-gray-400 relative z-10">
                {service.desc}
              </p>
              
              {/* Decor Line */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
