import { MessageCircle } from 'lucide-react';
import { createInquiryMessage, createWhatsAppLink } from '../lib/whatsapp';
import { SECTIONS } from '../lib/data';

export default function Hero() {
  const whatsappUrl = createWhatsAppLink(createInquiryMessage());

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-light text-primary rounded-full font-semibold text-sm tracking-wide">
              SOLUTION NATURELLE POLYVALENTE
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Assainir, fertiliser et protéger naturellement
            </h1>
            
            <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-xl">
              Enzyme Africa accompagne les agriculteurs, éleveurs, maraîchers, fermes, jardins et projets écologiques dans une démarche plus propre, plus saine et plus durable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-deep text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle size={22} />
                Commander sur WhatsApp
              </a>
              <a 
                href={`#${SECTIONS.USAGES}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray text-primary border border-border-main rounded-xl font-bold text-lg transition-colors"
              >
                Voir les usages
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              {['Agriculture & sols', 'Élevage', 'Environnement'].map((badge) => (
                <span key={badge} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-text-main shadow-sm border border-border-main/50">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-4 sm:p-6 rounded-[2rem] shadow-xl border border-border-main/50">
              <img 
                src="/images/enzyme-hero.jpg" 
                alt="Enzyme Africa Bouteille Nature" 
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1592982537447-6f296b0100d2?q=80&w=800&auto=format&fit=crop'; }}
                className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl mb-6 shadow-sm"
              />
              
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { size: "15 ml", desc: "Test rapide" },
                  { size: "150 ml", desc: "Format idéal" },
                  { size: "200 ml", desc: "Économique" }
                ].map((item) => (
                  <div key={item.size} className="bg-gray rounded-xl p-3 sm:p-4 text-center">
                    <div className="font-bold text-primary text-sm sm:text-base">{item.size}</div>
                    <div className="text-xs sm:text-sm text-text-muted mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative background blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-light rounded-[3rem] blur-3xl opacity-50 scale-110"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
