/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spiderman: {
          50: '#fef7ee',
          100: '#fdecd6',
          200: '#fbd5ac',
          300: '#f8b777',
          400: '#f59342',
          500: '#f2751a',
          600: '#e35a0f',
          700: '#bc4310',
          800: '#963514',
          900: '#792e14',
          950: '#411507',
          red: '#FF0000',
          'red-dark': '#CC0000',
          'red-light': '#FF3333',
          blue: '#0066CC',
          'blue-dark': '#004499',
          'blue-light': '#3399FF',
          purple: '#6600CC',
          'purple-dark': '#440099',
          'purple-light': '#9933FF',
          black: '#000000',
          'black-dark': '#0a0a0a',
          'black-light': '#1a1a1a',
          white: '#FFFFFF',
          'white-off': '#F5F5F5',
          gray: '#666666',
          'gray-dark': '#333333',
          'gray-light': '#999999',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'spiderman': ['Orbitron', 'monospace'],
        'miles': ['Poppins', 'sans-serif'],
      },
      animation: {
        'spider-swing': 'spider-swing 3s ease-in-out infinite',
        'spider-web': 'spider-web 2s ease-in-out infinite',
        'spider-pulse': 'spider-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spider-float': 'spider-float 6s ease-in-out infinite',
        'spider-glow': 'spider-glow 2s ease-in-out infinite alternate',
        'spider-bounce': 'spider-bounce 1s ease-in-out infinite',
        'spider-slide': 'spider-slide 0.5s ease-out',
        'spider-fade': 'spider-fade 0.5s ease-out',
        'spider-scale': 'spider-scale 0.3s ease-out',
        'spider-rotate': 'spider-rotate 0.5s ease-out',
        'spider-shake': 'spider-shake 0.5s ease-in-out',
        'spider-flip': 'spider-flip 0.6s ease-in-out',
        'spider-zoom': 'spider-zoom 0.3s ease-out',
        'spider-slide-up': 'spider-slide-up 0.5s ease-out',
        'spider-slide-down': 'spider-slide-down 0.5s ease-out',
        'spider-slide-left': 'spider-slide-left 0.5s ease-out',
        'spider-slide-right': 'spider-slide-right 0.5s ease-out',
      },
      keyframes: {
        'spider-swing': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(5deg)' },
          '50%': { transform: 'translateY(-40px) rotate(0deg)' },
          '75%': { transform: 'translateY(-20px) rotate(-5deg)' },
        },
        'spider-web': {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: 0 },
          '50%': { transform: 'scale(1) rotate(180deg)', opacity: 1 },
          '100%': { transform: 'scale(1.2) rotate(360deg)', opacity: 0 },
        },
        'spider-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'spider-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spider-glow': {
          '0%': { boxShadow: '0 0 5px #FF0000, 0 0 10px #FF0000, 0 0 15px #FF0000' },
          '100%': { boxShadow: '0 0 10px #FF0000, 0 0 20px #FF0000, 0 0 30px #FF0000' },
        },
        'spider-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spider-slide': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'spider-fade': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'spider-scale': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'spider-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spider-shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        'spider-flip': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        'spider-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'spider-slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'spider-slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'spider-slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'spider-slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'spiderman-gradient': 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #333333 50%, #1a1a1a 75%, #000000 100%)',
        'spiderman-radial': 'radial-gradient(circle at center, #FF0000 0%, transparent 70%)',
        'spiderman-web': 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
        'spiderman-mesh': 'linear-gradient(45deg, transparent 30%, rgba(255, 0, 0, 0.1) 50%, transparent 70%)',
        'spiderman-shimmer': 'linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.1), transparent)',
        'spiderman-venom': 'linear-gradient(135deg, #6600CC 0%, #9933FF 50%, #6600CC 100%)',
        'spiderman-electric': 'linear-gradient(135deg, #0066CC 0%, #3399FF 50%, #0066CC 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

