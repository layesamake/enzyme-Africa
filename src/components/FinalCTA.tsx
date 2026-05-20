import { createInquiryMessage, createWhatsAppLink } from '../lib/whatsapp';

export default function FinalCTA() {
  const handleContact = () => {
    window.open(createWhatsAppLink(createInquiryMessage()), '_blank');
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          Adoptez une solution naturelle pour produire plus proprement.
        </h2>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Enzyme Africa vous aide à aller vers une agriculture plus durable, un élevage plus sain et un environnement mieux entretenu.
        </p>
        <button 
          onClick={handleContact}
          className="bg-primary hover:bg-deep text-white font-bold text-lg px-12 py-5 rounded-full shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all"
        >
          Commander maintenant
        </button>
      </div>

      {/* Decorative blurred accents */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-light rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-60"></div>
    </section>
  );
}
