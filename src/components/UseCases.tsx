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
    <section id={SECTIONS.USAGES} className="py-24 bg-gray scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Domaines d'utilisation
          </h2>
          <p className="text-lg text-text-muted">
            Enzyme Africa s'intègre facilement dans plusieurs réalités : agriculture, élevage, maison, jardin, environnement et petits espaces de vie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USE_CASES.map((useCase, idx) => {
            const Icon = iconMap[useCase.icon];
            return (
              <div 
                key={idx}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-border-main hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-light text-primary rounded-2xl flex items-center justify-center mb-6">
                  {Icon && <Icon size={28} />}
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-text-muted mb-6">
                  {useCase.text}
                </p>

                <ul className="space-y-3">
                  {useCase.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
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
