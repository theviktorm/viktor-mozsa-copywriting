import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-[#19216C]/10 py-4 z-50 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-gray-900">Want results like that?</h3>
          <button 
            className="px-8 py-3 bg-[#19216C] text-white rounded-lg hover:bg-[#131A4D] transition-all transform hover:scale-105 flex items-center gap-2 group"
          >
            Book a Free Discovery Call
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}