# AGS WEB-SIL Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from enterprise B2B SaaS leaders that balance professionalism with modern aesthetics:
- **Primary Reference**: Stripe (clean, data-driven, trust-focused)
- **Secondary**: Linear (crisp typography, clear hierarchy)
- **Tertiary**: Salesforce/HubSpot (enterprise credibility, social proof integration)

**Rationale**: This is a high-value B2B solution targeting Chilean enterprises' Finance/HR/Treasury departments. The design must communicate trustworthiness, ROI, and professional competency while making complex financial data easily digestible.

## Core Design Elements

### A. Typography
- **Primary Font**: Inter (Google Fonts) - clean, professional, excellent readability
- **Headings**: 
  - H1: 3.5rem (56px) font-bold, tight leading (-0.02em)
  - H2: 2.5rem (40px) font-semibold
  - H3: 1.75rem (28px) font-semibold
- **Body**: 1.125rem (18px) base, 1rem (16px) secondary, leading-relaxed
- **Stats/Numbers**: tabular-nums, font-bold for emphasis

### B. Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (desktop), py-12 (mobile)
- Container max-width: max-w-7xl with px-8
- Component gaps: gap-8 for grids, gap-4 for cards
- Consistent vertical rhythm: space-y-16 between major sections

### C. Component Library

**Navigation**
- Fixed header with logo left, navigation center, CTA button right
- Transparent on hero, solid white on scroll with subtle shadow
- Mobile: Hamburger menu with slide-in drawer

**Hero Section** (100vh)
- Two-column layout: Left (60%) copy + CTA, Right (40%) hero image
- Hero image: Professional business/technology scene showing data analysis or team collaboration
- Headline emphasizing value: "Recupere millones en subsidios perdidos"
- Subheadline explaining the service
- Dual CTA: Primary "Calcular mi riesgo" + Secondary "Agendar demo"
- Trust indicators below CTAs: "Más de MM$16.000 recuperados" with client logos (Itaú, Metro, Collahuasi)

**Problem Sections** (3 distinct sections)
1. **Visual Impact Section**: Full-width with statistics grid (4 columns)
   - Large numbers with descriptive text below
   - Icons representing each pain point
   
2. **Process Flow Visualization**: Horizontal timeline showing complexity
   - 7 steps illustrated with icons and connecting lines
   - Time estimate prominently displayed
   
3. **Loss Comparison**: Side-by-side visual comparison
   - "Without AGS" vs "With AGS" flow diagrams
   - Red/green color coding for emphasis

**Interactive Calculator**
- Prominent section with gradient background (subtle)
- Slider input for company size (dotación)
- Real-time calculation display with animated number transitions
- Three result cards: Annual risk, 5-year prescription loss, potential recovery
- CTA below: "Recupere estos fondos - Contáctenos"

**Solution Section**
- "Software + Servicios" two-column split
- Left: Software features with checkmarks
- Right: Professional services benefits
- Center: Integration diagram showing workflow

**5 Pillars Section**
- Five cards in grid (3-2 layout on desktop, stack on mobile)
- Each card: Icon + Title + Description
- Icons: Custom illustrations matching brand
- Hover effect: subtle lift and shadow

**Implementation Timeline**
- Horizontal stepped process (2 phases)
- Phase 1: 30-60 days (Diagnosis + Automation)
- Phase 2: Ongoing (Professional Management + Fund Reception)
- Visual progress indicators

**Pricing Model**
- Three tiers displayed as cards
- Clear percentage indicators (12% recovery, 0% support)
- "Vinculado a resultados" emphasized
- CTA: "Solicitar diagnóstico gratuito"

**Social Proof**
- Client logos section (8-10 logos)
- Stats showcase: "70+ clientes", "+3M licencias gestionadas"
- Industry badges: Public sector (desde 2014), Private sector (desde 2024)

**Contact Form Section**
- Two-column layout: Left (form), Right (contact info + map/office image)
- Form fields: Nombre, Empresa, Cargo, Email, Teléfono, Dotación (dropdown)
- CRM integration indicator: "Conectado con Twenty CRM" badge
- Privacy policy checkbox
- Primary CTA: "Agendar diagnóstico gratuito"

**Footer**
- Three-column layout: Company info, Quick links, Contact details
- Social media icons
- Newsletter signup embedded
- Copyright and legal links

### D. Interactions
- Smooth scroll to sections on navigation click
- Calculator updates in real-time with smooth number animations
- Form validation with inline error messages
- Loading state on form submission with success/error feedback
- Sticky header transition (transparent to solid)
- Parallax effect on hero image (subtle)

## Images
**Hero Image**: Professional office setting with data dashboards visible on screens, or business professionals reviewing financial documents. Should convey trust and expertise. Image should be bright, modern, slightly desaturated to maintain professional tone.

**Section Images**: 
- Process complexity: Tangled workflow diagram transitioning to clean linear flow
- Team/office photo for "Gestión Profesional" section
- Contact section: Office exterior or team photo

**Image Treatment**: All images with subtle overlay (rgba(0,0,0,0.1)) for better text contrast, rounded corners (rounded-lg) for softer professional feel.

## Key Differentiators
- **Calculator Integration**: Interactive, real-time risk assessment tool
- **Data Visualization**: Charts showing loss progression over 5 years
- **Trust Signals**: Prominent client logos, certifications, recovery amounts
- **Bilingual Capability**: Spanish primary, English toggle option
- **CRM Integration Badge**: Visible indicator of Twenty CRM connection for credibility