module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
  },
  theme: {
    extend: {
      colors: {
        black: {
          default: '#333',
        },
        white: {
          100: '#EBF4EC',
          default: '#fff',
        },
        gray: {
          100: '#A5A5A5',
          200: '#707070',
          300: '#606060',
          default: '#989898',
          500: '#DEDEDE',
        },
        'duck-green': {
          default: '#099F82',
          900: '#035746',
        },
        yellow: {
          100: '#FFD972',
          200: '#FFF7C4',
          300: '#FFD800',
          default: '#FFBA00',
        },
        green: {
          200: '#DEF4EC',
          300: '#20AF81',
          default: '#0DD496',
        },
        blue: {
          200: '#EDF6FF',
          300: '#00C3D8',
        },
        orange: {
          200: '#FFEFE4',
          300: '#FF4109',
        },
        red: {
          200: '#FFE1E1',
          300: '#F90136',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
