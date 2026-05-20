import { WHATSAPP_DISPLAY } from '../lib/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-[#051A13] text-white pt-10 md:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          
          <div className="space-y-3 sm:space-y-4">
            <div className="font-bold text-xl sm:text-2xl tracking-tight">
              Enzyme Africa
            </div>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-sm">
              La solution naturelle polyvalente pour accompagner vos cultures, vos élevages et vos espaces de vie.
            </p>
          </div>

          <div className="flex flex-row flex-wrap gap-x-6 gap-y-2 md:flex-col md:items-center md:space-y-4 md:gap-0">
            <a href="#" className="font-medium text-sm sm:text-base text-white/80 hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="font-medium text-sm sm:text-base text-white/80 hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="font-medium text-sm sm:text-base text-white/80 hover:text-white transition-colors">Contact</a>
            <a href="#" className="font-medium text-sm sm:text-base text-white/80 hover:text-white transition-colors">Distributeurs</a>
          </div>

          <div className="flex flex-col md:items-end space-y-2 sm:space-y-4">
            <p className="text-white/60 font-medium text-xs sm:text-sm tracking-wide uppercase">
              NOUS CONTACTER
            </p>
            <div className="font-bold text-lg sm:text-xl">
              WhatsApp : {WHATSAPP_DISPLAY}
            </div>
          </div>

        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10 text-center text-white/40 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Enzyme Africa. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
