import React from 'react';
import { Play, Lock, CheckCircle } from 'lucide-react';

export default function PreCall() {
  return (
    <main className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to The Viktor Vault
            </h1>
            <p className="text-xl text-gray-600">
              Free trainings, call prep, and a bonus surprise - designed to make our next call your most valuable hour this year.
            </p>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Step 1: Free Case Studies + Bonuses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['DICU Framework', 'Self-Segmenting Campaigns', 'The "4 U\'s" Headline Formula', 'NESB Training', 'Viktor\'s Swipe File'].map((title, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-lg border border-[#19216C]/10 group hover:border-[#19216C]/30 transition-all">
                <div className="aspect-video rounded-lg bg-blue-50 mb-4 flex items-center justify-center">
                  {index === 4 ? (
                    <Lock className="w-12 h-12 text-[#19216C]" />
                  ) : (
                    <Play className="w-12 h-12 text-[#19216C]" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                {index === 4 && (
                  <p className="text-[#19216C]">Unlock on call</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Optimization */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Step 2: How to Get the Most From Our Call</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              'Know your core offer + outcome',
              'Watch at least 1 full masterclass',
              'Be ready to execute',
              'Leave fluff at the door'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-lg border border-[#19216C]/10">
                <CheckCircle className="w-6 h-6 text-[#19216C] flex-shrink-0" />
                <p className="text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Call Videos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Step 3: Mandatory Viewing Before We Talk</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              '7-Figure Framework Breakdown',
              'Belief-Stacking Copy Flow',
              'AI Copy Systems in Action'
            ].map((title, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-lg border border-[#19216C]/10 group hover:border-[#19216C]/30 transition-all">
                <div className="aspect-video rounded-lg bg-blue-50 mb-4 flex items-center justify-center">
                  <Play className="w-12 h-12 text-[#19216C]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">90-sec preview</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Surprise Gift Awaits</h2>
            <p className="text-xl text-gray-600 mb-8">Show up to the call and unlock:</p>
            <div className="p-8 rounded-xl bg-white shadow-lg border border-[#19216C]/10 mb-8">
              <h3 className="text-2xl font-bold text-[#19216C] mb-4">"The Moneybag Swipe File"</h3>
              <p className="text-gray-600">
                → The exact headlines, emails, and CTAs that printed my most profitable 7 days.
              </p>
            </div>
            <button className="px-8 py-4 bg-[#19216C] text-white rounded-lg hover:bg-[#131A4D] transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
              <Lock className="w-5 h-5" />
              Locked – Book a Call to Access
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}