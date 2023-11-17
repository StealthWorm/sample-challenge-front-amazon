import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '&::-webkit-scrollbar': {
      width: '.25rem',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$orange300',
      borderRadius: '20px',
    },
    
    body: {
      backgroundColor: '$gray900',
      color: '$gray100',
      '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
    },

    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px $orange300',
    }
  },



})
