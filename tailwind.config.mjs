/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#16151A', // near-black warm charcoal — base
          soft: '#221F28',    // secondary surface
        },
        paper: '#F5F1EC',     // warm off-white for light text/surfaces
        rose: {
          DEFAULT: '#E3AEB8', // dusty rose — "friendly" accent
          deep: '#C98A97',
        },
        steel: {
          DEFAULT: '#8A94A6', // cool steel-blue — "authority" accent
          deep: '#5E6A80',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
