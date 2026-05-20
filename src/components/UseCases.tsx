import { USE_CASES, SECTIONS } from '../lib/data';
import { Tractor, Bird, TreePine, Home, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Tractor,
  Bird,
  TreePine,
  Home
};

export default function UseCases() {
  return (
    <section id={SECTIONS.USAGES} className="py-14 md:py-24 bg-gray scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Domaines d'utilisation
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            Enzyme Africa s'intègre facilement dans plusieurs réalités : agriculture, élevage, maison, jardin, environnement et petits espaces de vie.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {USE_CASES.map((useCase, idx) => {
            const Icon = iconMap[useCase.icon];
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-8 shadow-sm border border-border-main hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-light text-primary rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  {Icon && <Icon size={24} className="sm:hidden" />}
                  {Icon && <Icon size={28} className="hidden sm:block" />}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-sm sm:text-base text-text-muted mb-4 sm:mb-6">
                  {useCase.text}
                </p>

                <ul className="space-y-2 sm:space-y-3">
                  {useCase.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5 sm:hidden" />
                      <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5 hidden sm:block" />
                      <span className="text-sm font-medium text-text-main leading-tight">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
