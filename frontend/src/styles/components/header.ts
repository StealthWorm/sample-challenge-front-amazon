import { styled } from "..";

export const HeaderContainer = styled('div', {
  display: 'flex',
  height: '4rem',
  minWidth: '100vw',
  alignItems: 'flex-end',
  alignContent: 'center',
  justifyContent: 'flex-start',
  gap: '4rem',
  padding: '4rem 2rem',

  background: '$gray800',
  borderBottom: '1px solid $gray300',

  img: {
    width: '6rem',
    height: '100%',
  },
})

export const FormContainer = styled('form', {
  display: 'flex',
})

export const ErrorMessage = styled('span', {
  display: 'flex',
  color: '$orange300',
  position: 'absolute',
  fontSize: '$sm',
  bottom: '-2rem',
  left: 0,
})

export const SearchButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: '1rem',
  border: 0,
  color: '$orange300',
  borderRadius: '0 .5rem .5rem 0',
  background: '$orange300',
  transition: 'all 0.5s',

  input: {
    all: 'unset',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  '&:hover': {
    filter: 'brightness(0.7)',
  },

  svg: {
    color: '$orange500',
  }
})

export const InputContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  gap: '0.5rem',

  backgroundColor: '$gray900',
  padding: '0.5rem 1rem',
  borderRadius: '8px 0 0 8px',
  boxSizing: 'border-box',
  border: '2px solid $gray400',
  alignItems: 'center',

  input: {
    display: 'flex',
    fontFamily: 'roboto, sans-serif',
    fontSize: '$2sm',
    outline: 'none',
    padding: '.6rem',
    borderRadius: '.5rem 0 0 .5rem',
    color: '$white',
    border: '0',
    background: 'transparent',
  },

  '& input:first-child': {
    borderRight: '1px solid $gray800',
  },

  '&:has(input:focus)': {
    borderColor: '$orange300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})