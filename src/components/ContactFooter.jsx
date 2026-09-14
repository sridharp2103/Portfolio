import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Camera, MapPin, Clapperboard, Copy, Check, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const ContactFooter = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    
    // Trigger tiny confetti
    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.8 },
      colors: ['#3B82F6', '#ffffff']
    });

    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <footer id="contact" className="relative bg-dark-lighter border-t border-white/5 pt-24 pb-12 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-[100px] pointer-events-none rounded-t-full"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-20">
          
          {/* Left: CTA & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 w-fit mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider">Open for Freelance Work</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6">
              LET'S CREATE SOMETHING <br/> <span className="text-primary text-glow">CINEMATIC.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Whether you need high-retention Reels, engaging YouTube edits, or a full cinematic brand promo — let's talk. Remote, quick-turnaround, and professional.
            </p>

            <div className="flex gap-4">
              <a 
                href="https://wa.me/918870719238" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-glow text-dark px-6 py-3 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:-translate-y-1"
              >
                WhatsApp Me
              </a>
              <a 
                href="mailto:sridharp2103@gmail.com" 
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-lg font-medium transition-all hover:-translate-y-1"
              >
                Send Email
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="flex flex-col gap-4 justify-center lg:ml-auto w-full max-w-md"
          >
            {/* Phone Card */}
            <div className="glass-card p-6 rounded-xl flex items-center justify-between group hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                  <p className="text-lg font-medium text-white">+91 88707 19238</p>
                </div>
              </div>
              <button 
                onClick={() => handleCopy('+918870719238', 'phone')}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Email Card */}
            <div className="glass-card p-6 rounded-xl flex items-center justify-between group hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Address</p>
                  <p className="text-lg font-medium text-white sm:text-base">sridharp2103@gmail.com</p>
                </div>
              </div>
              <button 
                onClick={() => handleCopy('sridharp2103@gmail.com', 'email')}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-xl flex items-center gap-4 opacity-70">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                <p className="text-base font-medium text-gray-300">Erode, Tamil Nadu (Remote)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 group">
            <span className="font-display text-xl tracking-wider text-white">SRIDHAR <span className="text-primary">P</span></span>
            <span className="text-gray-600 text-sm">© {new Date().getFullYear()}</span>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://youtube.com/@Meethithamilan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center text-gray-400 transition-all"
              title="YouTube"
            >
              <Clapperboard size={18} />
            </a>
            <a 
              href="https://instagram.com/cutsbycalm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center text-gray-400 transition-all"
              title="Instagram"
            >
              <Camera size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactFooter;
