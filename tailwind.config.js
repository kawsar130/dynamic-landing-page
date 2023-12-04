/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-title)'],
        paragraph: ['var(--font-paragraph)']
      },

      colors: {
        primary: {
          lighter: '#FFFFFF', // Avatar Info Color
          light: '#F0F0F0', // Hero Title Color
          DEFAULT: '#E4E4E7', // Title Text Color
          dark: '#E4E4E6', // Button Text Color
          darker: '#CACACE' // Paragraph Color
        },

        secondary: {
          light: '#343434', // Border Color
          DEFAULT: '#080808', // Card Background
          dark: '#000000' // Theme Background
        },
        accent: {
          DEFAULT: '#EB3A4A' // Button Background Color
        }
      },

      borderWidth: {
        1: '1px',
        12: '12px',
        16: '16px'
      },

      spacing: {
        45: '11.25rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
        148: '37rem',
        152: '38rem',
        156: '39rem',
        160: '40rem',
        164: '41rem',
        168: '42rem',
        172: '43rem',
        173: '43.25rem',
        176: '44rem',
        180: '45rem',
        182: '45.5rem',
        184: '46rem',
        188: '47rem',
        192: '48rem',
        196: '49rem',
        200: '50rem'
      },

      fontSize: {
        'title-primary': ['4rem', { lineHeight: '4rem' }]
      }
    }
  },
  plugins: []
};
