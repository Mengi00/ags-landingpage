# AGS WEB-SIL Landing Page

## Project Overview
Modern landing page for AGS WEB-SIL, a Chilean medical license subsidy management service. **Now redesigned with Material Design 3 (M3)** featuring a cohesive dark theme, blue/pink color palette, and streamlined component architecture that eliminates content duplication.

## Purpose & Goals
- Convert visitors into qualified leads through compelling storytelling and social proof
- Showcase the value proposition: maximizing efficiency in medical license management
- Capture leads for Twenty CRM integration (pending implementation)
- Demonstrate MM$16,000 in recovered funds and 70+ satisfied clients

## Technology Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with Material Design 3 custom tokens
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **Data Fetching**: TanStack Query v5
- **Backend**: Express.js (Node.js)
- **Storage**: In-memory (MemStorage)

## Material Design 3 System (November 2025 Redesign)

### Color Palette
**M3 Primary (Blue):**
- Primary: `#3B82F6` (blue-500)
- Primary Container: `#1E40AF` (blue-800)
- On Primary: White text on primary backgrounds

**M3 Secondary (Pink/Magenta):**
- Secondary: `#EC4899` (pink-500)
- Secondary Container: Darker pink variants
- On Secondary: White text on secondary backgrounds

**M3 Surface & Background:**
- Background: Dark slate (`#0F172A`, `#1E293B`)
- Surface: Card backgrounds with tonal variations
- Surface Dim/Bright: Subtle elevation hierarchy
- Border colors: Low-opacity white (`border-white/10`)

### Typography Scale (M3)
Based on Roboto/system fonts with M3 type scale:
- **Display Large**: Hero titles (text-6xl equivalent)
- **Display Medium/Small**: Section titles
- **Headline Large/Medium/Small**: Subsection headings
- **Title Large/Medium/Small**: Card titles, labels
- **Body Large/Medium/Small**: Paragraph text
- **Label Large/Medium/Small**: Form labels, buttons

### Visual System
1. **Border Radius**: 24px for cards, 16px for smaller elements, 100px for FAB buttons
2. **Elevation**: `elevation-1`, `elevation-2`, `elevation-3` utilities (tonal, not shadow-based)
3. **Spacing**: 8dp grid system (Tailwind units: 2, 4, 6, 8)
4. **Transitions**: Fast 200ms for interactions
5. **Blur Effects**: Decorative background gradients with `blur-3xl`

## Component Architecture (M3 Streamlined)

### Active Components (9 total - consolidated from 13)
1. **ModernHeader** - M3 sticky header with elevation, smooth scroll navigation
2. **ModernHero** - Display typography, single call-to-action, no duplicate stats
3. **StatsSection** - **ONLY** stats section (4 cards: MM$16K, 70+, 60%, compliance)
4. **Problem** - Consolidated problem presentation (merged ProblemStats + ProcessComplexity)
5. **SolutionBenefits** - Integrated solution with 5 pillars (merged Solution + FivePillars)
6. **RiskCalculator** - Interactive calculator with M3 cards (no card nesting)
7. **Testimonials** - Client testimonials with M3 elevation
8. **PricingModel** - 3 pricing tiers with M3 styling
9. **ContactForm** - Lead capture with M3 inputs, **NO duplicate stats**
10. **ModernFooter** - M3 footer with contact info and social links
11. **FloatingCTA** - Fixed bottom-right FAB with contact options

### Removed/Consolidated Components
- ❌ **CTASection** - Removed (redundant with other CTAs)
- ❌ **Implementation** - Removed (content consolidated)
- ✅ **ProblemStats + ProcessComplexity** → **Problem** (single component)
- ✅ **Solution + FivePillars** → **SolutionBenefits** (single component)

### Page Flow (Optimized)
Hero → Stats → Problem → SolutionBenefits → Calculator → Testimonials → Pricing → Contact → Footer

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

## Recent Changes (November 2025 - Material Design 3 Redesign)
- ✅ Complete Material Design 3 redesign with dark theme
- ✅ Generated design_guidelines.md with M3 specifications
- ✅ Updated index.css with M3 color tokens and elevation system
- ✅ Eliminated ALL duplicate statistics (consolidated into single StatsSection)
- ✅ Consolidated components from 13 to 9 (removed CTASection, Implementation)
- ✅ Merged ProblemStats + ProcessComplexity → Problem component
- ✅ Merged Solution + FivePillars → SolutionBenefits component
- ✅ Redesigned all components with M3 styling:
  - ModernHero: Display typography, streamlined CTAs
  - StatsSection: 4 M3 cards with 24px border radius
  - Problem: Consolidated problem data without duplication
  - SolutionBenefits: 5 pillars integrated into solution
  - RiskCalculator: M3 cards, proper container (no card nesting)
  - Testimonials: M3 elevation and styling
  - PricingModel: M3 pricing tiers
  - ContactForm: M3 inputs, contact info cards (NO stats)
  - ModernHeader: M3 navigation with elevation
  - ModernFooter: M3 footer styling
- ✅ Lead capture system fully functional and tested:
  - Lead schema with Zod validation
  - API endpoint POST /api/leads with validation
  - React Hook Form integration in ContactForm
  - MemStorage for development (temporary)
  - E2E tested with comprehensive logging
  - Form submission, validation, and reset working correctly

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
