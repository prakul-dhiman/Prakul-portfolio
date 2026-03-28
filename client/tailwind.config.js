/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050508',
        'bg-secondary': '#0d0d14',
        'bg-card': 'rgba(255,255,255,0.03)',
        'accent-blue': '#00d4ff',
        'accent-purple': '#7c3aed',
        'accent-pink': '#f72585',
        'text-primary': '#f0f0ff',
        'text-secondary': '#8892a4',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
