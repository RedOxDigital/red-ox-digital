import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '375px',   // Phone - from BUILDER! PDF
      'sm': '640px',   // Small tablets
      'md': '768px',   // Tablet - from BUILDER! PDF
      'lg': '1440px',  // Desktop - from BUILDER! PDF (changed from default 1024px)
      'xl': '1920px',  // Large desktop
    },
    extend: {
      // Preserve existing brand colors from CSS variables
    },
  },
  plugins: [],
}

export default config
