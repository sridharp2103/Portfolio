import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-6xl aspect-video bg-black rounded-sm overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)] relative">
            <iframe 
              src={`https://drive.google.com/file/d/${project.driveFileId}/preview`}
              width="100%" 
              height="100%" 
              allow="autoplay"
              className="w-full h-full border-none"
              title={project.title}
            ></iframe>
            
            {/* Fallback Overlay if iframe fails or takes long */}
            <div className="absolute bottom-4 right-4 z-10">
              <a 
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="inline-flex items-center gap-2 px-4 py-2 bg-dark/80 backdrop-blur-sm border border-white/20 text-xs font-bold tracking-widest text-white hover:border-accent hover:text-accent transition-colors uppercase rounded-sm"
              >
                Watch on Google Drive <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="w-full max-w-6xl mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-accent text-xs font-bold tracking-widest uppercase mb-1 block">
                {project.category}
              </span>
              <h3 className="text-white text-2xl font-bold">{project.title}</h3>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
