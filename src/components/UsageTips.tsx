import { USAGE_TIPS, SECTIONS } from '../lib/data';

export default function UsageTips() {
  return (
    <section id={SECTIONS.CONSEILS} className="py-14 md:py-24 bg-gray scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Conseils d'utilisation indicatifs
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            Les dosages varient selon l'objectif. Demandez toujours un conseil personnalisé avant usage intensif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {USAGE_TIPS.map((tip, idx) => (
            <div 
              key={idx}
              className="bg-white border border-border-main p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">
                {tip.title}
              </h3>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                {tip.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
