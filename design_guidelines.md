# AGS WEB-SIL Landing Page - Material Design 3 Light Theme Guidelines

## Design Approach
**Design System Approach**: Material Design 3 with light theme baseline, customized for B2B enterprise credibility. Chilean financial services targeting Finance/HR/Treasury departments require trust signals while embracing modern, clean, professional aesthetics.

**Key Principles**: Clean surfaces with subtle elevation, tonal elevation instead of heavy shadows, sophisticated light-mode optimization, subtle gradients for depth, premium Material You color system integration with bright, welcoming atmosphere.

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
- Clean white surface with subtle border-bottom
- Logo left, nav center, "Calcular Riesgo" button right (primary blue)
- Sticky with slight background blur
- Mobile: Drawer navigation

**Hero Section** (85vh)
- Light gradient background (white to very light blue #F0F9FF)
- Two-column: Left (55%) headline/CTAs, Right (45%) elevated card with dashboard preview
- Display Large headline with gradient text (#3B82F6 to #EC4899)
- Dual CTAs: Primary blue button, Secondary outlined
- Stat chips below: "MM$16.000+ recuperados" with elevated containers
- Client logo chips (Itaú, Metro, Collahuasi) with light surface containers

**Problem Sections**
1. **Statistics Grid**: 4 elevated cards (white with subtle border, rounded-[24px])
   - Large gradient numbers (#3B82F6 to #EC4899)
   - Body Large descriptions in dark text
   - Subtle elevation with tonal shadows
   
2. **Process Complexity Timeline**: Horizontal stepper with 7 nodes
   - Connected lines with gradient
   - Elevated circular step indicators (white bg)
   - Time estimate chip at end
   
3. **Comparison Flow**: Two surface containers side-by-side
   - "Sin AGS" (red accent), "Con AGS" (green accent)
   - Light containers with colored accents

**Interactive Calculator**
- Prominent elevated white card with 24px border radius
- Subtle gradient border effect (1px, light blue to light pink)
- Material slider with custom primary blue thumb
- Three result cards with subtle elevation, animated number transitions
- Bottom button: "Recuperar Fondos" (pink #EC4899)

**Solution Section**
- Two elevated white cards (Software | Servicios) in grid
- Icon system: Material Symbols (rounded variant) in blue
- Checklist items with chip-style indicators
- Center: Elevated integration diagram card

**5 Pillars Grid**
- Five elevated white cards (3-2 layout desktop, stack mobile)
- Each: 24px rounded corners, p-6 padding, white background with border
- Custom gradient icons in circular containers
- Hover: subtle elevation transition

**Timeline Implementation**
- Stepped progress surface with 2 phases
- Elevated phase cards connected by gradient line
- Duration chips with secondary pink accents
- Visual completion indicators

**Pricing Cards**
- Three elevated white cards with 24px radius
- Gradient accent borders on recommended tier
- Percentage badges as Material chips (pink #EC4899)
- Button at bottom: "Diagnóstico Gratuito"

**Social Proof**
- Light container with logo grid (8-10 logos with individual white cards)
- Stat cards: Elevated white containers with gradient numbers
- Badge chips: "Sector Público desde 2014" with outlined style

**Contact Section**
- Two-column: Form card (elevated white, p-8) | Contact info card
- Text fields: Material outlined variant with primary blue focus
- Dropdown: Material filled variant for "Dotación"
- Submit button: Primary blue, full-width mobile
- Right: Contact info with icons in elevated chips

**Footer**
- Light gray background (#F8FAFC)
- Three columns with subtle dividers
- Social icon chips (outlined)
- Newsletter input: Material outlined field
- Secondary pink accent for links

### D. Interactions
- Smooth scroll with easing
- Calculator: Real-time updates with Material motion
- Form: Inline validation with error indicators
- Cards: Subtle elevation transitions on hover (100ms)
- Buttons: State layer overlay on interaction
- Subtle backdrop blur on sticky navigation

## Color Palette (Light Theme)

### Primary Colors
- **Primary Blue**: #3B82F6 (blue-500)
- **Primary Container**: #DBEAFE (blue-100)
- **On Primary**: #FFFFFF (white text on blue)

### Secondary Colors
- **Secondary Pink**: #EC4899 (pink-500)
- **Secondary Container**: #FCE7F3 (pink-100)
- **On Secondary**: #FFFFFF (white text on pink)

### Surface Colors
- **Background**: #FFFFFF (pure white)
- **Surface**: #FFFFFF (white cards)
- **Surface Variant**: #F8FAFC (very light gray)
- **Surface Container**: #F1F5F9 (light gray)

### Text Colors
- **On Surface**: #0F172A (dark slate for primary text)
- **On Surface Variant**: #475569 (medium gray for secondary text)
- **On Surface Dim**: #64748B (light gray for tertiary text)

### Border Colors
- **Outline**: #E2E8F0 (very light gray borders)
- **Outline Variant**: #CBD5E1 (medium gray borders)

### Gradient Accents
- **Blue to Pink**: linear-gradient(135deg, #3B82F6 0%, #EC4899 100%)
- **Light Blue Background**: linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)

## Images

**Hero Image**: Modern financial dashboard mockup or data analytics interface shown on elevated device frame. Light mode UI with blue/pink accent visualization. High-quality, crisp rendering suggesting precision and technology.

**Section Images**:
- Calculator section background: Subtle gradient mesh or abstract data pattern in light colors
- Solution section: Integration workflow diagram or system architecture visualization
- Contact section: Modern office space or professional team collaboration scene (elevated card treatment)

**Image Treatment**: All images in elevated white containers with 24px border radius, subtle borders where appropriate. Hero image has subtle overlay for CTA legibility.

## Material Design 3 Specifics
- **Elevation System**: Use tonal surfaces (subtle shadows and borders) not heavy drop shadows
- **State Layers**: 8% opacity overlays for hover, 12% for focus, 16% for press
- **Border Radius**: Consistent 24px for cards, 100px for buttons/chips, 12px for smaller elements
- **Subtle Effects**: Minimal blur effects, light gradients for depth
- **Motion**: 200ms ease-in-out for elevations, 100ms for state changes
- **Surface Tinting**: Apply subtle primary blue tint (3% opacity) to elevated surfaces for depth

## Accessibility
- Minimum contrast ratio 4.5:1 for body text, 3:1 for large text
- Focus indicators on all interactive elements (blue ring)
- Keyboard navigation support
- ARIA labels on icon-only buttons

## Responsive Behavior
- **Desktop** (1280px+): Full two-column layouts, expanded navigation
- **Tablet** (768px-1279px): Adaptive columns, condensed spacing
- **Mobile** (<768px): Single column, stacked cards, bottom drawer navigation

## Component States
- **Default**: Clean white surfaces with subtle borders
- **Hover**: Slight elevation increase (shadow intensification)
- **Focus**: Blue ring outline (2px)
- **Active**: Deeper blue or pink fill depending on context
- **Disabled**: 38% opacity, no interaction states
