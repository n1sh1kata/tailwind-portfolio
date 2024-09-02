/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2', // Custom blue
        secondary: '#14171a', // Custom dark gray
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Adding Roboto as the default sans font
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulse: {
          '0%': { transform: 'scale(0.9)' },
          '70%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.9)' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.5)' },
        },
        pop: {
          '0%': {
            transform: 'scale(0.5)',
            opacity: 0,
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
          },
          '60%': {
            transform: 'scale(1.1)',
            opacity: 1,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
          },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite', // Defining the bounce animation
        spin: 'spin 2s linear infinite', // Defining the spin animation
        fade: 'fade 0.5s ease-in-out 0.5s', // Defining the fade animation
        pulse: 'pulse 2s ease-in-out infinite', // Defining the pulse animation
        slideInTop: 'slideInTop 0.5s ease-out', // Defining the slideInTop animation
        slideInBottom: 'slideInBottom 0.5s ease-out', // Defining the slideInBottom animation
        slideInLeft: 'slideInLeft 0.5s ease-out', // Defining the slideInLeft animation
        slideInRight: 'slideInRight 0.5s ease-out', // Defining the slideInRight animation
        slideOut: 'slideOut 0.5s ease-in', // Defining the slideOut animation
        zoomIn: 'zoomIn 0.5s ease-out', // Defining the zoomIn animation
        zoomOut: 'zoomOut 0.5s ease-in', // Defining the zoomOut animation
        pop: 'pop 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
      },
      variants: {
        animation: ['hover', 'focus'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Adding the forms plugin
  ],
}