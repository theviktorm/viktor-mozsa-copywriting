import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-5 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Positive Life Maxxing Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            No fluff. No BS. Just raw strategy, life, marketing, AI and business.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-white border border-[#19216C]/20 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#19216C]/40"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-[#19216C] text-white rounded-lg hover:bg-[#131A4D] transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Subscribe Now
              <Send className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}