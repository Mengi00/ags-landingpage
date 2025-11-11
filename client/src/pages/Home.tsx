import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemStats from '@/components/ProblemStats';
import ProcessComplexity from '@/components/ProcessComplexity';
import RiskCalculator from '@/components/RiskCalculator';
import Solution from '@/components/Solution';
import FivePillars from '@/components/FivePillars';
import Implementation from '@/components/Implementation';
import Experience from '@/components/Experience';
import PricingModel from '@/components/PricingModel';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemStats />
      <ProcessComplexity />
      <RiskCalculator />
      <Solution />
      <FivePillars />
      <Implementation />
      <Experience />
      <PricingModel />
      <ContactForm />
      <Footer />
    </div>
  );
}
