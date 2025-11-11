# AGS WEB-SIL Landing Page

## Project Overview
Modern landing page for AGS WEB-SIL, a Chilean medical license subsidy management service. The design blends professional B2B aesthetics with modern, dynamic visual elements inspired by Tec de Monterrey's landing page, featuring vibrant gradients, blur effects, and contemporary UI patterns.

## Purpose & Goals
- Convert visitors into qualified leads through compelling storytelling and social proof
- Showcase the value proposition: maximizing efficiency in medical license management
- Capture leads for Twenty CRM integration (pending implementation)
- Demonstrate MM$16,000 in recovered funds and 70+ satisfied clients

## Technology Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **Data Fetching**: TanStack Query v5
- **Backend**: Express.js (Node.js)
- **Storage**: In-memory (MemStorage)

## Design System

### Color Palette
**Primary Colors:**
- Blue Gradient: `from-blue-600 via-blue-700 to-blue-800`
- Pink/Magenta Accent: `from-pink-500 to-pink-600`
- Dark Backgrounds: `from-slate-900 via-blue-900 to-slate-900`

**Usage:**
- Primary CTAs: Pink gradient buttons with shadow effects
- Headers/Sections: Blue gradients
- Hero sections: Dark gradients with blur circles
- Cards/Stats: White overlay with low opacity (`bg-white/5` to `bg-white/10`)

### Typography
- **Font Family**: Inter (sans-serif)
- **Headings**: Bold (font-weight: 700), large sizes (text-4xl to text-6xl)
- **Body**: Regular weight, relaxed leading
- **CTAs**: Bold, uppercase for emphasis

### Visual Effects
1. **Blur Circles**: Decorative gradient circles with `blur-3xl` and low opacity
2. **Glassmorphism**: `backdrop-blur-xl` with semi-transparent backgrounds
3. **Hover Effects**: 
   - Scale transforms (`hover:scale-105`)
   - Shadow intensification (`hover:shadow-2xl`)
   - Translation (`hover:-translate-y-2`)
4. **Transitions**: Smooth `duration-300` animations

## Component Architecture

### Modern Components (New Design)
1. **ModernHeader** - Sticky header with gradient stripe, smooth scroll navigation
2. **ModernHero** - Dark gradient hero with blur effects and animated stats grid
3. **StatsSection** - 4-column stats with icon cards and hover effects
4. **CTASection** - Intermediate conversion sections with gradient backgrounds
5. **Testimonials** - Client testimonials with star ratings and results
6. **ModernFooter** - Dark gradient footer with social links and contact info
7. **FloatingCTA** - Floating action button with WhatsApp and phone options
8. **ContactForm** - Dark-themed form with glassmorphism design

### Existing Components (Maintained)
- **ProblemStats** - Statistical problem presentation
- **ProcessComplexity** - Process visualization
- **RiskCalculator** - Interactive risk calculator
- **Solution** - Solution presentation
- **FivePillars** - Core pillars of service
- **Implementation** - Implementation process
- **PricingModel** - Pricing information

## Key Features

### Lead Capture Form (ContactForm)
**Fields:**
- Nombre, Apellido
- Correo empresarial
- País/Código (lada), Teléfono
- Nombre de empresa
- Tamaño de empresa (dotación)
- País/región
- Acceptance checkbox for privacy policy

**Integration Point**: 
- Twenty CRM integration pending (marked with `//todo: remove mock functionality`)
- Currently logs form data to console

### Risk Calculator
Interactive calculator that estimates potential losses and savings based on company size

### Floating CTA
Fixed bottom-right button providing quick access to:
- WhatsApp: +56 9 4213 9942
- Phone: +56 2 2696 8905

## Contact Information
**Primary Contacts:**
- Andrea Gajardo S. - Gerencia de Negocios
  - Tel: 2-2696 8905
  - Cel: +56 9 4213 9942
  
- Cristián Sánchez - Subgerente de Negocios
  - Tel: 2-2696 8905
  - Cel: +56 9 8975 4707

**Website**: https://agschile.cl

## Design Inspiration
Based on Tec de Monterrey's corporate programs landing page:
- Modern gradients (blue/pink)
- Dark themed sections with blur effects
- Vibrant CTAs with glow effects
- Clean, professional B2B aesthetic
- Dynamic visual elements

## Recent Changes (November 2025)
- ✅ Redesigned with modern fusion aesthetic
- ✅ Created 8 new modern components
- ✅ Integrated gradient system with blue/pink palette
- ✅ Added floating CTA with contact options
- ✅ Implemented glassmorphism design patterns
- ✅ Enhanced testimonials and stats sections
- ✅ Modernized contact form with dark theme
- ✅ Implemented complete lead capture system
  - Lead schema with Zod validation
  - API endpoint POST /api/leads with validation
  - React Hook Form integration in ContactForm
  - MemStorage for development (temporary)
  - E2E tested and working

## User Preferences
- Modern, dynamic design with gradients
- Professional B2B aesthetic
- Chilean market focus
- Lead generation priority
- Twenty CRM integration desired

## Production Readiness Notes

### ✅ Ready
- Modern, responsive design
- Complete lead capture form with validation
- E2E tested functionality
- All components have proper data-testid attributes
- Error handling and user feedback

### ⚠️ Before Production Deploy
1. **Lead Persistence**: Currently using MemStorage (data lost on restart)
   - Option A: Implement Twenty CRM integration to forward leads immediately
   - Option B: Set up PostgreSQL/database for persistent storage
   - Recommendation: Twenty CRM integration for automated lead nurturing

2. **Analytics**: Add tracking for:
   - Form submissions
   - CTA interactions
   - Scroll depth
   - Section views

3. **SEO Optimization**:
   - Add meta tags and Open Graph
   - Implement structured data
   - Optimize images with lazy loading

## Next Steps
1. **Priority: Twenty CRM Integration**
   - Set up API credentials
   - Forward leads from POST /api/leads to CRM
   - Add webhook for CRM confirmation
2. **Analytics Setup**: Google Analytics / Mixpanel
3. **Mobile Testing**: Comprehensive mobile device testing
4. **Performance**: Image optimization and lazy loading
5. **A/B Testing**: Test CTA placements and messaging

## Development Notes
- All components use data-testid attributes for e2e testing
- Form validation using Zod schemas
- Responsive design with mobile-first approach
- Dark mode compatible design system
- Accessibility considerations (ARIA labels, keyboard navigation)
