import { styled } from "..";

export const HeaderContainer = styled('div', {
  display: 'flex',
  height: '4rem',
  width: '100vw',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'flex-start',
  gap: '4rem',
  padding: '3rem 2rem',

  background: '$gray800',
  borderBottom: '1px solid $gray300',

  img: {
    width: '6rem',
    height: '100%',
  },
})

export const FormContainer = styled('form', {
  display: 'flex',

  '& input:first-child': {
    display: 'flex',
    fontSize: '$2sm',
    outline: 'none',
    padding: '.6rem',
    borderRadius: '.5rem 0 0 .5rem',
    color: '$gray500',
    border: '0'
  },
})

export const ErrorMessage = styled('span', {
  display: 'flex',
  color: '$orange300',
  position: 'absolute',
  fontSize: '$sm',
  bottom: '-1.3rem',
})

export const SearchButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: '.5rem .8rem',
  border: 0,
  color: '$orange300',
  borderRadius: '0 .5rem .5rem 0',
  background: '$orange300',
  transition: 'all 0.5s',

  '&:hover': {
    filter: 'brightness(0.7)',
  },

  input: {
    all: 'unset',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  svg: {
    color: '$orange500',
    left: 0
  }
})

export const InputContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  gap: '0.5rem'
})