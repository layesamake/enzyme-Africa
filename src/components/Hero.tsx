import { MessageCircle, ArrowDown } from 'lucide-react';
import { createInquiryMessage, createWhatsAppLink } from '../lib/whatsapp';
import { SECTIONS } from '../lib/data';

export default function Hero() {
  const whatsappUrl = createWhatsAppLink(createInquiryMessage());

  return (
    <section className="pt-20 pb-10 sm:pt-28 sm:pb-14 lg:pt-40 lg:pb-24 overflow-hidden bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          
          <div className="space-y-5 sm:space-y-8">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-light text-primary rounded-full font-semibold text-xs sm:text-sm tracking-wide">
              SOLUTION NATURELLE POLYVALENTE
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-primary leading-tight">
              Assainir, fertiliser et protéger naturellement
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-text-muted leading-relaxed max-w-xl">
              Enzyme Africa accompagne les agriculteurs, éleveurs, maraîchers, fermes, jardins et projets écologiques dans une démarche plus propre, plus saine et plus durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-deep text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 animate-pulse-gentle"
              >
                <MessageCircle size={20} />
                Commander sur WhatsApp
              </a>
              <a 
                href={`#${SECTIONS.USAGES}`}
                className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-white hover:bg-gray text-primary border border-border-main rounded-xl font-bold text-base sm:text-lg transition-all hover:scale-102"
              >
                Voir les usages
              </a>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-6">
              {['Agriculture & sols', 'Élevage', 'Environnement'].map((badge) => (
                <span key={badge} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-text-main shadow-sm border border-border-main/50 hover:border-secondary hover:text-secondary transition-colors duration-300">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-[2rem] shadow-xl border border-border-main/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]">
              <img 
                src="/images/hero-enzymeafrica.webp" 
                alt="Enzyme Africa Bouteille Nature" 
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1592982537447-6f296b0100d2?q=80&w=800&auto=format&fit=crop'; }}
                className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-sm"
              />
              
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {[
                  { size: "15 ml", desc: "Test rapide" },
                  { size: "150 ml", desc: "Format idéal" },
                  { size: "200 ml", desc: "Économique" }
                ].map((item) => (
                  <div key={item.size} className="bg-gray rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center hover:bg-light hover:scale-[1.04] transition-all duration-300 cursor-pointer">
                    <div className="font-bold text-primary text-xs sm:text-sm md:text-base">{item.size}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-text-muted mt-0.5 sm:mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative background blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-light rounded-[3rem] blur-3xl opacity-50 scale-110"></div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-12 animate-bounce">
          <a href={`#${SECTIONS.USAGES}`} className="text-primary/60 hover:text-secondary p-2 rounded-full hover:bg-gray transition-colors" aria-label="Défiler vers le bas">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
