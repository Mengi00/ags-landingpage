# AGS WEB-SIL Landing Page - Material Design 3 Dark Theme Guidelines

## Design Approach
**Design System Approach**: Material Design 3 with dark theme baseline, customized for B2B enterprise credibility. Chilean financial services targeting Finance/HR/Treasury departments require trust signals while embracing modern, premium aesthetics.

**Key Principles**: Elevated surfaces over flat design, tonal elevation instead of heavy shadows, sophisticated dark-mode optimization, glassmorphism for depth, premium Material You color system integration.

## Core Design Elements

### A. Typography (Material Design 3 Type Scale)
- **Display Large**: 57px/64px, font-normal (Hero headline)
- **Headline Large**: 40px/48px, font-semibold (Section headers)
- **Headline Medium**: 32px/40px, font-semibold (Sub-sections)
- **Title Large**: 22px/28px, font-medium (Card headers)
- **Body Large**: 18px/28px, font-normal (Primary content)
- **Body Medium**: 16px/24px, font-normal (Secondary content)
- **Label Large**: 14px/20px, font-medium (Buttons, chips)
- **Font Family**: Roboto (Material Design standard) via Google Fonts

### B. Layout System
**8dp Grid**: All spacing in multiples of 8px (Tailwind: 2, 4, 6, 8, 12, 16, 20, 24, 32)
- Section padding: py-24 (desktop), py-16 (mobile)
- Container: max-w-7xl, px-8
- Card padding: p-6 to p-8
- Component gaps: gap-6 for grids, gap-4 internal
- Vertical rhythm: space-y-24 between major sections

### C. Component Library

**Navigation**
- Elevated surface container (surface-dim #1E293B)
- Logo left, nav center, "Calcular Riesgo" FAB button right (#1E40AF with elevation-1)
- Sticky with backdrop-blur-xl glassmorphism
- Mobile: Bottom sheet navigation drawer

**Hero Section** (85vh)
- Dark gradient background (#0F172A to #1E293B)
- Two-column: Left (55%) headline/CTAs, Right (45%) elevated card with dashboard preview image
- Display Large headline with gradient text (#3B82F6 to #EC4899)
- Dual FAB CTAs: Primary (#1E40AF), Secondary outlined
- Glassmorphic stat chips below: "MM$16.000+ recuperados" with floating badge effect
- Client logo chips (Itaú, Metro, Collahuasi) with surface-bright containers

**Problem Sections**
1. **Statistics Grid**: 4 elevated cards (surface-container #334155, rounded-3xl)
   - Large gradient numbers (#3B82F6 to #EC4899)
   - Body Large descriptions
   - Subtle elevation-2 with tonal shadows
   
2. **Process Complexity Timeline**: Horizontal stepper with 7 nodes
   - Connected lines with gradient
   - Elevated circular step indicators
   - Time estimate chip at end
   
3. **Comparison Flow**: Two surface containers side-by-side
   - "Sin AGS" (red accent), "Con AGS" (green accent)
   - Glassmorphic overlays for emphasis

**Interactive Calculator**
- Prominent elevated surface-bright card with 24px border radius
- Gradient border effect (1px, #1E40AF to #EC4899)
- Material slider with custom primary color thumb
- Three result cards with elevation-3, animated number transitions
- Bottom FAB: "Recuperar Fondos" (#EC4899)

**Solution Section**
- Two elevated cards (Software | Servicios) in grid
- Icon system: Material Symbols (rounded variant)
- Checklist items with chip-style indicators
- Center: Elevated integration diagram card

**5 Pillars Grid**
- Five elevated cards (3-2 layout desktop, stack mobile)
- Each: 24px rounded corners, p-6 padding, surface-container-high
- Custom gradient icons in circular containers
- Hover: elevation-2 to elevation-3 transition

**Timeline Implementation**
- Stepped progress surface with 2 phases
- Elevated phase cards connected by gradient line
- Duration chips with secondary pink accents
- Visual completion indicators

**Pricing Cards**
- Three elevated surface-bright cards with 24px radius
- Gradient accent borders on recommended tier
- Percentage badges as Material chips (#EC4899)
- FAB at bottom: "Diagnóstico Gratuito"

**Social Proof**
- Glassmorphic container with logo grid (8-10 logos with individual surface chips)
- Stat cards: Elevated containers with gradient numbers
- Badge chips: "Sector Público desde 2014" with outlined style

**Contact Section**
- Two-column: Form card (elevated, p-8) | Contact info card
- Text fields: Material outlined variant with primary blue focus
- Dropdown: Material filled variant for "Dotación"
- CRM badge: Floating chip with glassmorphism
- Submit FAB: Primary blue, full-width mobile
- Right: Office image in elevated surface container + contact chips

**Footer**
- Surface-dim background (#1E293B)
- Three columns with dividers
- Social icon chips (outlined)
- Newsletter input: Material filled field
- Secondary pink accent for links

### D. Interactions
- Smooth scroll with easing
- Calculator: Real-time updates with Material motion
- Form: Inline validation with error chips
- Cards: Elevation transitions on hover (subtle 100ms)
- FABs: State layer overlay on interaction
- Glassmorphism: backdrop-blur-xl on hero/navigation

## Images

**Hero Image**: Modern financial dashboard mockup or data analytics interface shown on elevated device frame. Dark mode UI with blue/pink accent visualization. High-quality, crisp rendering suggesting precision and technology.

**Section Images**:
- Calculator section background: Subtle gradient mesh or abstract data pattern
- Solution section: Integration workflow diagram or system architecture visualization
- Contact section: Modern office space or professional team collaboration scene (elevated card treatment)

**Image Treatment**: All images in elevated surface containers with 24px border radius, subtle 1px gradient borders where appropriate. Hero image has glassmorphic overlay for CTA legibility. No image backgrounds for buttons - use blur backdrop instead.

## Material Design 3 Specifics
- **Elevation System**: Use tonal surfaces (elevation-1 through elevation-5) not drop shadows
- **State Layers**: 8% opacity overlays for hover, 12% for focus, 16% for press
- **Border Radius**: Consistent 24px for cards, 100px for FABs/chips, 12px for smaller elements
- **Glassmorphism**: backdrop-blur-xl + bg-opacity-10 on floating elements
- **Motion**: 200ms ease-in-out for elevations, 100ms for state changes
- **Surface Tinting**: Apply subtle primary blue tint (5% opacity) to elevated surfaces for depth