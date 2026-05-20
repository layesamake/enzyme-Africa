import { TESTIMONIALS } from '../lib/data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            Découvrez les retours d'expérience des agriculteurs et éleveurs qui utilisent Enzyme Africa au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-gray p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-border-main"
            >
              <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary sm:hidden" />
                ))}
                {[...Array(5)].map((_, i) => (
                  <Star key={`lg-${i}`} size={20} className="fill-secondary text-secondary hidden sm:block" />
                ))}
              </div>
              
              <blockquote className="text-base sm:text-lg text-text-main font-medium mb-5 sm:mb-8">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-light text-primary font-bold text-sm sm:text-lg rounded-full flex items-center justify-center">
                  {testimonial.name.charAt(0)}{testimonial.name.split(' ')[1]?.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-primary text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-text-muted">{testimonial.profile}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
