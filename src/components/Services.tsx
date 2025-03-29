import React from 'react';
import { FileText, Mail, Target, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Sales Pages',
    description: 'Engineered to agitate, escalate, and convert like hell.'
  },
  {
    icon: Mail,
    title: 'Emails',
    description: 'Sequences that print dopamine and drive clicks.'
  },
  {
    icon: Target,
    title: 'Ad Copy',
    description: 'Scroll-stopping, thumb-breaking, revenue-wrecking.'
  },
  {
    icon: Lightbulb,
    title: 'Offer Strategy',
    description: 'Turn a "meh" product into a market-dominating weapon.'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-white shadow-lg border border-[#19216C]/10 hover:border-[#19216C]/30 transition-all transform hover:-translate-y-1 group"
            >
              <service.icon className="w-12 h-12 text-[#19216C] mb-6 group-hover:text-[#2B4CB2] transition-colors" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}