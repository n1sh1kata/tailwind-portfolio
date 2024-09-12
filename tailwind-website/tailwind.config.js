/** @type {import('tailwindcss').Config} */

const blueColor = '#f9f9f9';
const greyColor = '#fff';

module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xs': '375px',
        sm: '425px', // Small breakpoint
        md: '768px', // Medium breakpoint
        lg: '1024px', // Large breakpoint
        xl: '1440px', // Extra large breakpoint
        '2xl': '1536px', // 2x extra large breakpoint
      },
      flexGrow: {
        3: '3'
      },
      aspectRatio: {
        '10/2': '10 / 2',
      },
      colors: {
        primary: '#1da1f2', // Custom blue
        secondary: '#14171a', // Custom dark gray
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Keep Roboto as the default sans font
        raleway: ['Raleway', 'sans-serif'], // Add Raleway as a custom font
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
      scrollBehavior: {
        smooth: 'smooth',
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
      backgroundImage: {
        customPattern: [
          `conic-gradient(from -45deg at calc(100%/3) calc(100%/3), ${greyColor} 90deg, #0000 0)`,
          `conic-gradient(from -135deg at calc(100%/3) calc(2*100%/3), ${greyColor} 90deg, ${blueColor} 0 135deg, #0000 0)`,
          `conic-gradient(from 135deg at calc(2*100%/3) calc(2*100%/3), ${greyColor} 90deg, ${blueColor} 0 135deg, #0000 0)`,
          `conic-gradient(from 45deg at calc(2*100%/3) calc(100%/3), ${greyColor} 90deg, ${blueColor} 0 135deg, #0000 0, ${greyColor} 0 225deg, ${blueColor} 0)`,
        ],
      },
      backgroundSize: {
        customPattern: '100px 100px',
      },
      transitionDuration: {
        300: '300ms',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Adding the forms plugin
  ],
}