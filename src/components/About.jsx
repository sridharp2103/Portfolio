import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: "10TH STANDARD",
    title: "Started Video Editing",
    desc: "Discovered the passion for crafting visuals."
  },
  {
    year: "FREELANCE",
    title: "Professional Path",
    desc: "Started working on editing projects for clients."
  },
  {
    year: "2ND YEAR B.E. ECE",
    title: "Engineering + Editing",
    desc: "Balancing academics with a growing creative career."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide">
              THE PERSON <br/><span className="text-gray-500">BEHIND THE EDIT</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg md:text-xl font-light leading-relaxed">
              <p>
                "I started editing videos when I was in 10th standard. What started as curiosity slowly became a skill, a creative outlet, and eventually a freelance career path."
              </p>
              <p>
                "Today, I'm pursuing my B.E. in Electronics and Communication Engineering while working on video editing projects."
              </p>
              <p>
                "I specialise in CapCut Pro and creating cinematic, high-energy edits with a strong focus on rhythm, storytelling and visual impact."
              </p>
            </div>

            <motion.div 
              className="mt-12 pl-6 border-l-4 border-accent py-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-display text-white italic">
                Engineering mindset. <br/> <span className="text-accent">Editor's eye.</span>
              </h3>
            </motion.div>
          </motion.div>

          {/* Right Column: Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-4 bottom-4 w-[1px] bg-white/10 z-0"></div>
            <div className="absolute left-4 top-4 bottom-4 w-[1px] bg-gradient-to-b from-accent via-accent to-transparent origin-top z-0" 
                 style={{ transform: 'scaleY(0.7)' }}></div>

            <div className="space-y-12 relative z-10">
              {timelineEvents.map((event, idx) => (
                <motion.div 
                  key={idx}
                  className="flex gap-8 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <div className="w-8 h-8 rounded-full bg-darker border-2 border-accent flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-accent mb-2 block">{event.year}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{event.title}</h4>
                    <p className="text-sm text-gray-400">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
