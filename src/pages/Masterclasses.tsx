import React from 'react';
import { Play, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Masterclasses() {
  const masterclasses = [
    {
      title: 'DICU Framework',
      description: 'Master the Direct-Intent-Context-Urgency framework',
      locked: false
    },
    {
      title: 'Self-Segmenting Campaigns',
      description: 'Create campaigns that automatically segment your audience',
      locked: false
    },
    {
      title: 'The "4 U\'s" Headline Formula',
      description: 'Write headlines that stop the scroll and drive action',
      locked: false
    },
    {
      title: 'NESB Training',
      description: 'Navigate-Educate-Solve-Bridge methodology explained',
      locked: false
    },
    {
      title: 'Viktor\'s Swipe File',
      description: 'My personal collection of high-converting copy examples',
      locked: true
    }
  ];

  return (
    <main className="pt-20 bg-white min-h-screen">
      <section className="py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Viktor Vault
            </h1>
            <p className="text-xl text-gray-600">
              Premium masterclasses that turn mediocre copy into money-printing machines.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masterclasses.map((masterclass, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white shadow-lg border border-[#19216C]/10 group hover:border-[#19216C]/30 transition-all"
              >
                <div className="aspect-video rounded-lg bg-blue-50 mb-4 flex items-center justify-center">
                  {masterclass.locked ? (
                    <Lock className="w-12 h-12 text-[#19216C]" />
                  ) : (
                    <Play className="w-12 h-12 text-[#19216C]" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{masterclass.title}</h3>
                <p className="text-gray-600 mb-4">{masterclass.description}</p>
                {masterclass.locked ? (
                  <p className="text-[#19216C] font-semibold">Unlock on call</p>
                ) : (
                  <button className="px-4 py-2 bg-[#19216C] text-white rounded-lg hover:bg-[#131A4D] transition-colors w-full">
                    Watch Now
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}