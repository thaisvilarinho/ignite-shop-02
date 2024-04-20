import { styled } from "@/styles";

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  '&.center-menu': {
    justifyContent: 'center',
  },


  button: {
    cursor: 'pointer',
    color: '$gray700',
    borderRadius: '0.375rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    backgroundColor: "$gray800",
    padding: '0.75rem',
    position: 'relative',

    div: {
      position: 'absolute',
      right: '-0.5rem',
      top: '-0.5rem',
      width: '50%',
      height: '50%',
      borderRadius:'99999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '$green500',
      color: '$white',
      fontSize: '0.87rem',
      fontWeight: '700',
      lineHeight: '1.6',

    }

  }
})