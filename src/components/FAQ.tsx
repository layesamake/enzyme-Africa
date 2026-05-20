import { useState } from 'react';
import { FAQ_ITEMS, SECTIONS } from '../lib/data';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={SECTIONS.FAQ} className="py-14 md:py-24 bg-gray scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Questions fréquentes
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            Les réponses essentielles pour savoir si c'est le bon produit pour vous.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-border-main rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-4 py-4 sm:px-6 sm:py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-primary pr-4 sm:pr-8">
                    {item.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-secondary" : "text-text-muted"}`}>
                    <ChevronDown size={20} className="sm:hidden" />
                    <ChevronDown size={24} className="hidden sm:block" />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-sm sm:text-base text-text-muted leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
