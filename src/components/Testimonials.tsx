import { TESTIMONIALS } from '../lib/data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-lg text-text-muted">
            Découvrez les retours d'expérience des agriculteurs et éleveurs qui utilisent Enzyme Africa au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-gray p-8 rounded-3xl border border-border-main"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-secondary text-secondary" />
                ))}
              </div>
              
              <blockquote className="text-lg text-text-main font-medium mb-8">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-light text-primary font-bold text-lg rounded-full flex items-center justify-center">
                  {testimonial.name.charAt(0)}{testimonial.name.split(' ')[1]?.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-text-muted">{testimonial.profile}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
