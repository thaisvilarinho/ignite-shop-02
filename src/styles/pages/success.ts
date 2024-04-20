import { styled } from "..";

export const SuccessContainer = styled('main', {

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  section: {
    display: 'flex',
    width: '100%',
    position: 'relative',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  }
});

export const ImageContainer = styled('div', {
  position: 'absolute',
  width: '100%',
  maxWidth: 130,
  height: '145px',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.8)",
  borderRadius: '99999px',
  padding: '0.25rem',
  marginTop: '4rem',
  bottom: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:nth-child(1)': {
    left: '20%',
    zIndex: 1
  },

  '&:nth-child(2)': {
    left: '35%',
    zIndex: 2
  },

  '&:nth-child(3)': {
    left: '50%',
    zIndex: 3
  },



  img: {
    objectFit: 'cover',
  }
});
