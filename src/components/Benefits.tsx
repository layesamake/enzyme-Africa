import { BENEFITS } from '../lib/data';
import { Leaf, Wind, ShieldAlert, Recycle } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  Wind,
  ShieldAlert,
  Recycle
};

export default function Benefits() {
  return (
    <section className="py-14 md:py-24 bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-secondary/30 text-light rounded-full font-semibold text-xs sm:text-sm tracking-wide">
              LA RÉPONSE ENZYME AFRICA
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
              Un seul produit, plusieurs bénéfices concrets.
            </h2>
            <p className="text-base sm:text-lg text-light/80 leading-relaxed">
              Enzyme Africa est pensé pour une utilisation polyvalente : assainissement, agriculture, élevage, hygiène et gestion écologique des déchets.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {BENEFITS.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 text-light rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    {Icon && <Icon size={20} className="sm:hidden" />}
                    {Icon && <Icon size={24} className="hidden sm:block" />}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-light/70 text-sm leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
