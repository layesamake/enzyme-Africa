import { useState } from 'react';
import { SECTIONS } from '../lib/data';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: SECTIONS.USAGES, label: "Usages" },
    { id: SECTIONS.FORMATS, label: "Formats" },
    { id: SECTIONS.CONSEILS, label: "Conseils" },
    { id: SECTIONS.FAQ, label: "FAQ" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#" className="font-bold text-xl sm:text-2xl text-primary tracking-tight">
              Enzyme Africa
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className="text-text-main hover:text-secondary font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a 
              href={`#${SECTIONS.COMMANDE}`} 
              className="bg-primary hover:bg-deep text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow"
            >
              Commander
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-text-main p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with smooth transition */}
      <div 
        className={`md:hidden bg-white border-t border-border-main shadow-lg absolute w-full left-0 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-text-main hover:text-secondary hover:bg-gray px-3 py-3 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`#${SECTIONS.COMMANDE}`}
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-primary hover:bg-deep text-white px-6 py-3.5 rounded-xl font-semibold transition-colors mt-3"
          >
            Commander
          </a>
        </div>
      </div>
    </header>
  );
}
