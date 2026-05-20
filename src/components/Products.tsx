import { PRODUCTS, SECTIONS } from '../lib/data';
import { createProductOrderMessage, createWhatsAppLink } from '../lib/whatsapp';

export default function Products() {
  return (
    <section id={SECTIONS.FORMATS} className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Choisissez le format adapté
          </h2>
          <p className="text-lg text-text-muted">
            Trois conditionnements pour tester, utiliser régulièrement ou équiper une exploitation plus importante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRODUCTS.map((prod) => {
            const handleOrder = () => {
              const url = createWhatsAppLink(createProductOrderMessage(prod.format));
              window.open(url, '_blank');
            };

            return (
              <div 
                key={prod.id}
                className={`relative flex flex-col bg-white rounded-[2rem] p-8 ${
                  prod.recommended 
                    ? 'border-2 border-secondary shadow-xl md:-translate-y-4' 
                    : 'border border-border-main shadow-md'
                }`}
              >
                {prod.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                    {prod.badge}
                  </div>
                )}

                <div className="aspect-square bg-gray rounded-2xl mb-8 overflow-hidden">
                  <img 
                    src={prod.image}
                    alt={prod.name}
                    onError={(e) => { e.currentTarget.src = prod.fallbackImage; }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{prod.name}</h3>
                    <div className="text-secondary font-semibold mt-1">{prod.format}</div>
                  </div>
                  
                  <p className="text-text-muted">
                    {prod.description}
                  </p>

                  <div className="inline-block bg-light px-3 py-1.5 rounded-lg text-sm text-primary font-medium">
                    {prod.usage}
                  </div>
                </div>

                <div className="pt-8 mt-auto">
                  <button 
                    onClick={handleOrder}
                    className={`w-full py-4 rounded-xl font-bold transition-all ${
                      prod.recommended
                        ? 'bg-primary hover:bg-deep text-white shadow-lg shadow-primary/20 hover:-translate-y-0.5'
                        : 'bg-gray hover:bg-border-main text-primary'
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
