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
    <section className="py-24 bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-secondary/30 text-light rounded-full font-semibold text-sm tracking-wide">
              LA RÉPONSE ENZYME AFRICA
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Un seul produit, plusieurs bénéfices concrets.
            </h2>
            <p className="text-lg text-light/80 leading-relaxed">
              Enzyme Africa est pensé pour une utilisation polyvalente : assainissement, agriculture, élevage, hygiène et gestion écologique des déchets.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {BENEFITS.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-secondary/20 text-light rounded-xl flex items-center justify-center mb-4">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
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
