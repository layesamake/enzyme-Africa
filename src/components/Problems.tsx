import { PROBLEMS } from '../lib/data';
import { Bug, Sprout, Wind, Trash2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Bug,
  Sprout,
  Wind,
  Trash2
};

export default function Problems() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Vous luttez contre ces problèmes ?
          </h2>
          <p className="text-lg text-text-muted">
            Parce que l'agriculture, l'élevage et l'entretien environnemental exposent souvent aux mêmes difficultés : nuisibles, sols affaiblis, odeurs persistantes et déchets organiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((problem) => {
            const Icon = iconMap[problem.icon];
            return (
              <div 
                key={problem.id}
                className="bg-white border border-border-main rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-light transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-light text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {problem.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {problem.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
