import { styled } from "@/styles";

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  fontSize: 20,
  color: 'white',
  padding: '4px 8px',
  cursor: 'pointer',

  span: {
    fontWeight: 'bold',
  },
  '&:hover': {
    filter: 'brightness(0.8)',
  }
})

export default function Home() {
  return (
    <Button>
      <span>Teste</span>{' '}
        Enviar
    </Button>
  );
}
