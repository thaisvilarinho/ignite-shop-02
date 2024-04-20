import { GetStaticProps } from "next"
import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"
import Link from "next/link"
import { useKeenSlider } from 'keen-slider/react'
import Head from 'next/head'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"

// import { GetServerSideProps, GetStaticProps } from "next"
import { ButtonAddItemToCart } from "@/components/button-add-item-to-cart"

interface HomeProps {
  products: {
    id: string
    name: string
    image: string
    price: string
    default_price: Stripe.Price
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <>
      <Head>
        <title>Home | Ignite Shop 2</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {
          products.map(product => (
            <Product 
              key={product.id}
              className="keen-slider__slide"
              >
                <Link 

                  href={`/product/${product.id}`}
                  prefetch={false}
                  >
              <Image src={product.image} width={520} height={480} alt=""/>
            </Link>
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <ButtonAddItemToCart product={product} />
                
              </footer>
            </Product>
          ))
        }

      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map(product => {
    const price = product.default_price! as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      image: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      default_price: price
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2hrs
  }
}
