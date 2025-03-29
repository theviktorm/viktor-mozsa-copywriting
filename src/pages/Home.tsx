import React from 'react';
import { AuroraBackground } from '../components/ui/aurora-background';
import { motion } from 'framer-motion';
import About from '../components/About';
import Services from '../components/Services';
import Newsletter from '../components/Newsletter';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <main className="bg-white">
      <AuroraBackground className="from-white to-blue-50">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center pt-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 typewriter relative">
              Viktor Mózsa Copywriting
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-[#19216C] mb-8">
              Copywriting That Hits Harder Than Your Last Excuse
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Words that cut through noise, crack open wallets, and drive real f*cking results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-[#19216C] text-white rounded-lg hover:bg-[#131A4D] transition-all transform hover:scale-105 flex items-center justify-center gap-2 group">
                Book Your Free Growth Consultation
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-[#19216C] text-[#19216C] rounded-lg hover:bg-[#19216C]/5 transition-all transform hover:scale-105">
                Join The Positive Life Maxxing Newsletter
              </button>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
      <About />
      <Services />
      <Newsletter />
      <CallToAction />
    </main>
  );
}