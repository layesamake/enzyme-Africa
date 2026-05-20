import { PRODUCTS, SECTIONS } from '../lib/data';
import { createProductOrderMessage, createWhatsAppLink } from '../lib/whatsapp';

export default function Products() {
  return (
    <section id={SECTIONS.FORMATS} className="py-14 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Choisissez le format adapté
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            Trois conditionnements pour tester, utiliser régulièrement ou équiper une exploitation plus importante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-stretch">
          {PRODUCTS.map((prod) => {
            const handleOrder = () => {
              const url = createWhatsAppLink(createProductOrderMessage(prod.format));
              window.open(url, '_blank');
            };

            return (
              <div 
                key={prod.id}
                className={`relative flex flex-col bg-white rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-8 transition-all duration-300 group ${
                  prod.recommended 
                    ? 'border-2 border-secondary shadow-xl md:-translate-y-4 hover:-translate-y-2 md:hover:-translate-y-6 hover:shadow-2xl hover:scale-[1.01]' 
                    : 'border border-border-main shadow-md hover:-translate-y-2 hover:shadow-lg hover:scale-[1.01]'
                }`}
              >
                {prod.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider">
                    {prod.badge}
                  </div>
                )}

                <div className="aspect-[4/3] sm:aspect-square bg-gray rounded-xl sm:rounded-2xl mb-5 md:mb-8 overflow-hidden relative">
                  <img 
                    src={prod.image}
                    alt={prod.name}
                    onError={(e) => { e.currentTarget.src = prod.fallbackImage; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex-grow space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">{prod.name}</h3>
                    <div className="text-secondary font-semibold mt-1">{prod.format}</div>
                  </div>

                  <div className="text-xl sm:text-2xl font-extrabold text-secondary">
                    {prod.price}
                  </div>
                  
                  <p className="text-sm sm:text-base text-text-muted">
                    {prod.description}
                  </p>

                  <div className="inline-block bg-light px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm text-primary font-medium">
                    {prod.usage}
                  </div>
                </div>

                <div className="pt-5 sm:pt-8 mt-auto">
                  <button 
                    onClick={handleOrder}
                    className={`w-full py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all ${
                      prod.recommended
                        ? 'bg-primary hover:bg-deep text-white shadow-lg shadow-primary/20 hover:-translate-y-0.5 animate-pulse-gentle'
                        : 'bg-light text-primary border-2 border-secondary/30 hover:bg-secondary hover:text-white hover:border-secondary hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                  >
                    Commander {prod.format}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
