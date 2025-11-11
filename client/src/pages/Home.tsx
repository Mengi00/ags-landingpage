import ModernHeader from '@/components/ModernHeader';
import ModernHero from '@/components/ModernHero';
import StatsSection from '@/components/StatsSection';
import Problem from '@/components/Problem';
import SolutionBenefits from '@/components/SolutionBenefits';
import RiskCalculator from '@/components/RiskCalculator';
import Testimonials from '@/components/Testimonials';
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
      <Problem />
      <SolutionBenefits />
      <RiskCalculator />
      <Testimonials />
      <PricingModel />
      <ContactForm />
      <ModernFooter />
      <FloatingCTA />
    </div>
  );
}
