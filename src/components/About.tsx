import React from 'react';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Viktor Mózsa"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glowing accent */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#19216C] rounded-full filter blur-[96px] opacity-10"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built From Grit. Forged In Fire.
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Viktor Mózsa. Self-made, zero-BS, and dangerously effective with words.</p>
              <p>I don't write to be liked - I write to sell.</p>
              <p>Motion creates emotion. Emotion drives action. Action prints money.</p>
              <p className="text-[#19216C] font-semibold">Want poetry? Read a sonnet.</p>
              <p className="text-[#19216C] font-semibold">Want conversions? Book me.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}