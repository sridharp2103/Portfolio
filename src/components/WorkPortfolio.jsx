import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Maximize2, ExternalLink } from 'lucide-react';

// Sub-component for the Video Modal
const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-dark rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <div>
              <h3 className="text-white font-medium text-lg">{video.title}</h3>
              <p className="text-gray-400 text-sm">{video.category}</p>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Video Container (16:9 or 9:16 constraint) */}
          <div className="bg-black w-full flex justify-center items-center overflow-hidden" style={{ height: '70vh', maxHeight: '600px' }}>
            {video.type === 'youtube' ? (
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`} 
                title={video.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className={video.aspectRatio === '9:16' ? 'max-w-[340px]' : 'w-full'}
              ></iframe>
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-500 h-full w-full">
                <Play size={48} className="mb-4 opacity-50" />
                <p>Placeholder for direct video file ({video.aspectRatio})</p>
                <p className="text-sm mt-2">Replace with actual &lt;video&gt; tag later</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const WorkPortfolio = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);

  const tabs = ['All', 'Reels', 'YouTube', 'Cinematic'];

  // Placeholder slots ready to be swapped with real content
  const portfolioItems = [
    {
      id: 1,
      title: "High-Energy Mass Edit",
      category: "Reels",
      aspectRatio: "9:16",
      duration: "00:45",
      type: "placeholder",
      videoId: "placeholder_1",
      thumb: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Podcast Cutdown - Episode 12",
      category: "YouTube",
      aspectRatio: "16:9",
      duration: "08:24",
      type: "placeholder",
      videoId: "placeholder_2",
      thumb: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Brand Promo Cinematic",
      category: "Cinematic",
      aspectRatio: "16:9",
      duration: "01:30",
      type: "placeholder",
      videoId: "placeholder_3",
      thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Trending Audio Beat Sync",
      category: "Reels",
      aspectRatio: "9:16",
      duration: "00:30",
      type: "placeholder",
      videoId: "placeholder_4",
      thumb: "https://images.unsplash.com/photo-1516280440502-6c2ab2374bb9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Vlog Style Edit (Quick Paced)",
      category: "YouTube",
      aspectRatio: "16:9",
      duration: "05:12",
      type: "placeholder",
      videoId: "placeholder_5",
      thumb: "https://images.unsplash.com/photo-1535016120720-40c746a6580c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Creative Transitions Showcase",
      category: "Cinematic",
      aspectRatio: "9:16",
      duration: "01:00",
      type: "placeholder",
      videoId: "placeholder_6",
      thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const filteredItems = activeTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-dark-lighter/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-6xl text-white tracking-wide"
            >
              SELECTED <span className="text-primary text-glow">WORKS</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className="h-1 w-24 bg-primary mt-4 origin-left mb-6"
            ></motion.div>
            
            <div className="flex gap-4">
              <a href="https://youtube.com/@Meethithamilan" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <ExternalLink size={14} /> @Meethithamilan
              </a>
              <a href="https://instagram.com/cutsbycalm" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <ExternalLink size={14} /> @cutsbycalm
              </a>
            </div>
          </div>
          
          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 bg-dark p-1 rounded-lg border border-white/10"
          >
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-primary text-dark shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Video Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(item)}
              >
                <div className={`relative overflow-hidden rounded-xl border border-white/10 bg-dark mb-4 ${item.aspectRatio === '9:16' ? 'aspect-[4/5] max-w-sm mx-auto' : 'aspect-video w-full'}`}>
                  {/* Thumbnail Image */}
                  <img src={item.thumb} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 text-dark flex items-center justify-center backdrop-blur-sm scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play size={24} className="fill-dark ml-1" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] uppercase font-mono text-white tracking-wider border border-white/10">
                      {item.aspectRatio}
                    </span>
                    <span className="bg-primary/80 backdrop-blur-md px-2 py-1 rounded text-[10px] uppercase font-mono text-dark font-bold tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/80 px-2 py-1 rounded text-[10px] font-mono text-white tracking-wider">
                      {item.duration}
                    </span>
                  </div>
                </div>

                <div className={`${item.aspectRatio === '9:16' ? 'max-w-sm mx-auto' : 'w-full'}`}>
                  <h3 className="text-lg font-medium text-white group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Maximize2 size={12} /> Click to play
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>

      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
};

export default WorkPortfolio;
