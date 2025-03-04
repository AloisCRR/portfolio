# CLAUDE.md - Astro Project Guide

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro check` - Run type checking

## Code Style Guidelines
- **TypeScript**: Follow strict typing (extends "astro/tsconfigs/strict")
- **Components**: Use .astro files for static components, client-only when needed
- **Imports**: Group by type (Astro, components, utils, styles)
- **Naming**: PascalCase for components, camelCase for variables/functions
- **CSS**: Prefer Tailwind utility classes for styling
- **Astro Patterns**: Use slots for component composition
- **Reactivity**: Minimize client directives, prefer static rendering
- **Error Handling**: Use try/catch for data fetching with fallback UI

## Project Structure
- `/src/components` - Reusable UI components
- `/src/layouts` - Page layouts and templates
- `/src/pages` - Route pages
- `/src/styles` - Global styles

## Icons Usage
This project uses Feather Icons for SVG icons. Import and use the FeatherIcon component:

```astro
import FeatherIcon from './components/FeatherIcon.astro';

<FeatherIcon name="github" size={24} class="w-6 h-6" />
```

### Common Feather Icons
- **UI Elements**: menu, x, check, chevron-down, chevron-up, chevron-left, chevron-right
- **Actions**: search, download, upload, edit, trash, copy, save
- **Communication**: mail, message-circle, phone
- **Social**: github, linkedin, twitter, facebook, instagram
- **Media**: image, video, music, play, pause
- **Arrows**: arrow-up, arrow-down, arrow-left, arrow-right
- **Misc**: user, home, settings, alert-circle, help-circle, info, external-link

For a complete list of icons, visit [Feather Icons](https://feathericons.com/)

## SVG Wave Backgrounds
This project includes two types of SVG wave background components:

### 1. Simple Wave Background
The `WavyBackground` component creates a simple static wave shape at the top or bottom of a section:

```astro
import WavyBackground from './components/WavyBackground.astro';

<!-- Light mode wave at the bottom -->
<WavyBackground 
  position="bottom" 
  color="#f8fafc" 
  height={120} 
  class="dark:hidden" 
/>

<!-- Dark mode wave at the bottom -->
<WavyBackground 
  position="bottom" 
  color="#0f172a" 
  height={120} 
  class="hidden dark:block" 
/>
```

### 2. Animated Multi-Wave Background
The `MultiWaveBackground` component creates an animated series of waves with a parallax-like effect:

```astro
import MultiWaveBackground from './components/MultiWaveBackground.astro';

<!-- Define colors for light and dark modes -->
const lightColors = ['#dbeafe', '#bfdbfe', '#93c5fd']; // Blue tones
const darkColors = ['#1e3a8a', '#1e40af', '#1d4ed8']; // Dark blue tones

<!-- Light mode animated waves -->
<MultiWaveBackground 
  position="top" 
  colors={lightColors} 
  height={200} 
  class="dark:hidden" 
/>

<!-- Dark mode animated waves -->
<MultiWaveBackground 
  position="top" 
  colors={darkColors} 
  height={200} 
  class="hidden dark:block" 
/>
```

Both components are used to create a more interesting visual effect between sections of the portfolio.