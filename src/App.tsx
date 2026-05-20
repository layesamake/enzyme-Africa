import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import Products from './components/Products';
import QuickOrder from './components/QuickOrder';
import UsageTips from './components/UsageTips';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-text-main bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Benefits />
        <UseCases />
        <Products />
        <QuickOrder />
        <UsageTips />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
