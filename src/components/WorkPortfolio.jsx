import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, HardDrive } from 'lucide-react';
import { projects, reels } from '../data/projects';
import VideoModal from './VideoModal';

const WorkPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const getCardStyle = (size) => {
    switch(size) {
      case 'large': return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2 aspect-video md:aspect-auto';
      case 'medium': return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 aspect-video';
      case 'small': return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 aspect-video';
      default: return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1 aspect-video';
    }
  };

  return (
    <>
      <section id="work" className="py-24 relative overflow-hidden bg-darker">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-display text-white tracking-wide mb-2">MY WORK</h2>
              <p className="text-gray-400 text-lg">A collection of my editing work.</p>
            </div>
            <a 
              href="https://drive.google.com/drive/folders/1Ji3-Am55Xjxncq2XEjguPt9HUsyhagM3"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="work"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-accent hover:text-white transition-colors uppercase"
            >
              <HardDrive size={16} />
              View Full Work Archive <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 grid-rows-[auto]">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                data-cursor="play"
                className={`group cursor-pointer relative overflow-hidden rounded-sm bg-gray-900 border border-white/5 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-500 ${getCardStyle(project.size)}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Thumbnail */}
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  
                  {/* Play Icon Center */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                    <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                      <Play size={24} className="text-accent ml-1 fill-accent" />
                    </div>
                  </div>

                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white/50 text-[10px] font-bold tracking-widest">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-white/30 text-[10px]">/</span>
                      <span className="text-accent text-[10px] font-bold tracking-widest uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
                    <div className="text-sm text-accent font-bold tracking-wider uppercase flex items-center gap-2">
                      WATCH PROJECT <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reels Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 border-t border-white/10 pt-16"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-display text-white tracking-wide mb-2">CUTS BY CALM</h2>
                <p className="text-gray-400 text-lg">Short-form edits. Fast cuts. Strong visuals.</p>
              </div>
              <a 
                href="https://www.instagram.com/cutsbycalm/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="reels"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-sm font-bold tracking-widest text-white hover:border-accent hover:text-accent transition-colors uppercase rounded-sm"
              >
                VIEW ALL REELS <ExternalLink size={14} />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {reels.map((reel, idx) => (
                <motion.div
                  key={reel.id}
                  onClick={() => setSelectedProject(reel)}
                  data-cursor="reels"
                  className="group block relative overflow-hidden rounded-sm bg-gray-900 aspect-[9/16] cursor-pointer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <img 
                    src={reel.thumbnail} 
                    alt={reel.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/60 transition-colors duration-300"></div>
                  
                  {/* Play Icon Center */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Play size={20} className="text-white ml-1 fill-white" />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-dark to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                     <h4 className="text-white text-sm font-bold truncate">{reel.title}</h4>
                     <span className="text-accent text-[10px] uppercase tracking-wider block">{reel.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <VideoModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </>
  );
};

export default WorkPortfolio;
