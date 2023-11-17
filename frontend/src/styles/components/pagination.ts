import { styled } from "@stitches/react";

export const PaginationContainer = styled("div", {
  display: 'flex',
  padding: '0.5rem 0',
  width: ' 100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  button: {
    background: 'transparent',
    border: 0,
    color: '$gray300',
    cursor: 'pointer',

    ' &:disabled': {
      opacity: '0.4',
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      color: '$orange300',
      transition: 'color 0.2s',
    }
  }
})