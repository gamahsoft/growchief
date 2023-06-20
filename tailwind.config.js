/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        aura: '0px 0px 60px rgba(153,102,255,.4)'
      },
      backgroundImage: {
        'top-gradient': 'linear-gradient(120.9deg,hsla(0,0%,100%,0) 36.54%,hsla(0,0%,100%,.5) 47.09%,hsla(0,0%,100%,0) 56.65%),linear-gradient(84.79deg,#f4d0ff 27.33%,#ba7dc5 47.55%,#dcdfff 66.08%)',
        'gradient-top': 'linear-gradient(180deg, #21262d, #1a1e23 90%)',
        'grad-blue': 'radial-gradient(circle,rgba(77,102,229,.2) 0,transparent 70%),radial-gradient(circle,rgba(77,102,229,.1) 0,transparent 70%),radial-gradient(ellipse at center,hsla(0,0%,100%,.075) 0,transparent 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
