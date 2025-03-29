import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white to-blue-50 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-5 bg-cover bg-center"></div>
      
      {/* Glowing accent */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#19216C] rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-orange-500 rounded-full filter blur-[128px] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 typewriter">
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
              Book Your Free Growth Consult
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-[#19216C] text-[#19216C] rounded-lg hover:bg-[#19216C]/5 transition-all transform hover:scale-105">
              Join The Positive Life Maxxing Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}