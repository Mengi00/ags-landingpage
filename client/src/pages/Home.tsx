import ModernHeader from '@/components/ModernHeader';
import ModernHero from '@/components/ModernHero';
import StatsSection from '@/components/StatsSection';
import ProblemStats from '@/components/ProblemStats';
import ProcessComplexity from '@/components/ProcessComplexity';
import RiskCalculator from '@/components/RiskCalculator';
import Solution from '@/components/Solution';
import FivePillars from '@/components/FivePillars';
import Implementation from '@/components/Implementation';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import PricingModel from '@/components/PricingModel';
import ContactForm from '@/components/ContactForm';
import ModernFooter from '@/components/ModernFooter';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ModernHeader />
      <ModernHero />
      <StatsSection />
      <ProblemStats />
      <ProcessComplexity />
      <CTASection />
      <RiskCalculator />
      <Solution />
      <FivePillars />
      <Implementation />
      <Testimonials />
      <PricingModel />
      <ContactForm />
      <ModernFooter />
      <FloatingCTA />
    </div>
  );
}
