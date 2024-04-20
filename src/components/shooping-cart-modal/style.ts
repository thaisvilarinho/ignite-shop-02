import { styled } from "@/styles";
import { Backpack } from "@phosphor-icons/react";
import * as Dialog from '@radix-ui/react-dialog';

export const Content = styled(Dialog.Content, {
  background: '$gray800',
  boxShadow: "0px -4px 30px rgba(0, 0, 0, 0.8)",
  position: 'fixed', 
  width: '30rem',
  top: '0px',
  right: '0px',
  left: 'auto',
  bottom: '0px',
  padding: '3rem 3rem 3rem 4.5rem',

  h2: {
    color: '$gray100',
    fontSize: '1.25rem',
    lineHeight: '1.6',
    fontWeight: 'bold',
  },

  section: {
    margin: '2rem 0 3rem 0',
    display: 'flex',
    height: 'calc(100vh - 117px)',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  footer: {
    marginTop: '0.4rem',
    width: '100%',
    div: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '$gray100',
      lineHeight: '1.6',
      fontWeight: '400',

      '> span:nth-of-type(1)': {
        fontSize: '1rem',
      },
      '> span:nth-of-type(2)': {
        color: '$gray300',
        fontSize: '1.125rem',
      },

      '> strong:nth-of-type(1)': {
        fontSize: '1.125rem',
        fontWeight: '700',
      },
      '> strong:nth-of-type(2)': {
        lineHeight: '1.4',
        fontSize: '1.5rem',
        fontWeight: '700',
      },

    },

    button: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding:'1.25rem 2rem',
      width: '100%',
      background: '$green500',
      border: 'none',
      borderRadius:'0.5rem',
      margin: '1rem 0 1rem 0',

      color: '$white',
      fontSize: '1.125rem',
      lineHeight: '1.6',
      fontWeight: '700',

      '&:disabled' : {
        background: '$gray700',
        color: '$white',
        cursor: 'not-allowed'
      },

      '&:not(:disabled):hover': {
        background: '$green300',
        transition: 'all 0.2s',
      }
    }
  }
})


export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 'none',
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: '0', 
  cursor: 'pointer',
  color: '$gray700',
})

export const CartList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap:'1.5rem',
})

export const CartItem = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  maxHeight: '5.8rem',

  '> div:first-of-type': {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    overflow: 'hidden',
  
    maxWidth: '6.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    objectFit: 'cover',
  },

  '> div:nth-of-type(2)': {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize:'1.125rem',
    lineHeight: '1.6',

    span: {
      color: '$gray300',
      fontWeight: '400',
    },


    button: {
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      fontSize:'1rem',
      lineHeight: '1.6',
      fontWeight: '700',
      color: '$green500',

      '&:hover': {
        color: '$green300',
        transition: 'all 0.2s',
      }
    },

    div: {
      display: 'flex',
      width: '100%',
      alignItems: 'flex-start',
      gap: '0.5rem',
      fontSize:'1.125rem',
      lineHeight: '1.6',
  
      strong: {
        fontWeight: '700',
        color: '$gray100',
      },

      '> strong:nth-of-type(3)': {
        flex: 1,
        textAlign: 'right',
      }
    },
  },


});
