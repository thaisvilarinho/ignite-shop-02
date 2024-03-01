import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import Image from 'next/image'
import { useRouter } from 'next/router'

import camisa1 from '.'

export default function Product(){
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint ipsam cum architecto voluptas, totam id veniam velit iure eligendi expedita illum ratione ipsa odit quaerat repellat exercitationem obcaecati nesciunt.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}