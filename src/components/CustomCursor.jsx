import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, ExternalLink } from 'lucide-react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState('default'); // 'play', 'view', 'open', 'instagram', 'youtube', 'reels'
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports hover and fine pointer (desktop)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor]');
      if (target) {
        setIsHovering(true);
        const type = target.getAttribute('data-cursor') || 'default';
        
        // Auto-detect link types if not explicitly set
        if (type === 'default' && target.tagName === 'A') {
          const href = target.getAttribute('href') || '';
          if (href.includes('youtube.com')) setHoverType('youtube');
          else if (href.includes('cutsbycalm')) setHoverType('reels');
          else if (href.includes('sri_the_king.007')) setHoverType('instagram');
          else if (href.includes('drive.google.com')) setHoverType('work');
          else if (href.includes('mailto:')) setHoverType('mail');
          else if (target.getAttribute('target') === '_blank') setHoverType('open');
          else setHoverType('view');
        } else {
          setHoverType(type);
        }
      } else {
        setIsHovering(false);
        setHoverType('default');
      }
    };

    if (mediaQuery.matches) {
      document.body.classList.add('custom-cursor-active');
      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  const getText = () => {
    switch (hoverType) {
      case 'play': return '▶ PLAY';
      case 'view': return 'VIEW ↗';
      case 'open': return 'OPEN ↗';
      case 'instagram': return 'IG ↗';
      case 'reels': return 'IG ↗';
      case 'youtube': return 'YT ↗';
      case 'work': return 'WORK ↗';
      case 'mail': return 'MAIL ↗';
      default: return '';
    }
  };

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[100] flex items-center justify-center mix-blend-difference
          ${isHovering ? 'bg-white' : 'bg-accent'}`}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering && hoverType === 'default' ? 1.5 : isHovering ? 6 : 1,
          opacity: 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
      </motion.div>
      
      {/* Cursor Text (separated for non-mix-blend-difference rendering) */}
      {isHovering && hoverType !== 'default' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[101] text-[8px] font-bold text-dark tracking-widest flex items-center justify-center w-20 h-20"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5
          }}
        >
          <span className="opacity-0 animate-[fadeIn_0.2s_ease_0.15s_forwards]">{getText()}</span>
        </motion.div>
      )}

      {/* Trailing outline */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[99]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 0.4
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.8
        }}
      />
      <style jsx="true">{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
