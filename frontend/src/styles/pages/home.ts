import { styled } from "..";
import zeroStar from '../../assets/no-stars.png'
import oneStar from '../../assets/one-star.png'
import twoStars from '../../assets/two-stars.png'
import threeStars from '../../assets/three-stars.png'
import fourStars from '../../assets/four-stars.png'
import fiveStars from '../../assets/five-stars.png'

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  width: '100%',
  overflowX: 'hidden',
  padding: '2rem 5rem',
  margin: '0 auto',
  fontFamily: 'Roboto, sans-serif',
})

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
  gap: '1.5rem',
})

export const Item = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: '1.5rem',
  border: '1px solid $gray300',
  borderRadius: '8px',
  backgroundColor: '$gray800',
  color: '$white',
  gap: '1rem',

  '#main-image': {
    height: '10rem',
    width: '100%',
    objectFit: 'cover',
  },

  h2: {
    display: 'flex',
    fontSize: '$2sm',
    height: '7rem',
    overflowY: 'auto',
  },

  footer: {
    display: 'flex',
    width: '100%',
    height: 'max-content',
    // border: '1px solid red',
    minHeight: '4rem',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    marginTop: '2rem',
    gap: '.5rem',

    p: {
      fontSize: '$sm',
      fontWeight: 'bold'
    },
  },

  '&:hover': {
    transition: 'all .5s',
    cursor: 'pointer',
    border: '1px solid $orange300',
    filter: 'brightness(110%)'
  }
})

export const Reviews = styled('div', {
  display: 'flex',
  position: 'absolute',
  width: 'auto',
  height: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  top: '-1rem',
  right: '-1rem',
  padding: '1rem',
  background: '$orange300',
  borderRadius: '1rem',

  strong: {
    display: 'flex',
  }
})

export const RateStars = styled('img', {
  display: 'flex',
  width: '100%',
  height: 'max-content',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 2rem',
  border: '0',
  outline: 'none',
  backgroundPosition: 'right top , right bottom',

  variants: {
    stars: {
      0: {
        backgroundImage: `url(${zeroStar})`,
        border: '0',
        outline: 'none',
      },
      1: {
        backgroundImage: `url(${oneStar})`
      },
      2: {
        backgroundImage: `url(${twoStars})`
      },
      3: {
        backgroundImage: `url(${threeStars})`
      },
      4: {
        backgroundImage: `url(${fourStars})`
      },
      5: {
        backgroundImage: `url(${fiveStars})`
      }
    }
  }
})