import { useState } from 'react';
import { SECTIONS } from '../lib/data';
import { createWhatsAppLink, WHATSAPP_DISPLAY } from '../lib/whatsapp';
import { MessageSquareText } from 'lucide-react';

export default function QuickOrder() {
  const [format, setFormat] = useState('Bouteille 150 ml');
  const [need, setNeed] = useState('Agriculture / cultures');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Bonjour Enzyme Africa, je souhaite commander le format ${format}. Mon besoin principal est : ${need}. Mon nom est : ${name || "Non précisé"}. Merci de me donner les informations de disponibilité et de livraison.`;
    window.open(createWhatsAppLink(msg), '_blank');
  };

  return (
    <section id={SECTIONS.COMMANDE} className="py-24 bg-deep scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Commande rapide
            </h2>
            <p className="text-lg text-light/80">
              Sélectionnez votre format, indiquez votre besoin principal, puis envoyez automatiquement votre demande sur WhatsApp.
            </p>
            
            <div className="inline-flex flex-col space-y-2 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-light text-sm font-semibold uppercase tracking-wider">
                Contact rapide
              </span>
              <span className="text-2xl font-bold text-white flex items-center gap-3">
                <MessageSquareText size={28} className="text-secondary" />
                {WHATSAPP_DISPLAY}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="format" className="block text-sm font-bold text-primary">
                  Format souhaité
                </label>
                <select 
                  id="format"
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full bg-gray border border-border-main rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                >
                  <option>Bouteille 15 ml</option>
                  <option>Bouteille 150 ml</option>
                  <option>Bouteille 200 ml</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="need" className="block text-sm font-bold text-primary">
                  Besoin principal
                </label>
                <select 
                  id="need"
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  className="w-full bg-gray border border-border-main rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                >
                  <option>Agriculture / cultures</option>
                  <option>Élevage</option>
                  <option>Maison & jardin</option>
                  <option>Désodorisation</option>
                  <option>Compostage / déchets organiques</option>
                  <option>Autre besoin</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold text-primary">
                  Votre nom
                </label>
                <input 
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex. Mamadou Ndiaye"
                  className="w-full bg-gray border border-border-main rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder-text-muted"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all mt-4"
              >
                Envoyer ma commande WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
