import { LayoutWithoutMenu } from "@/components/layout";
import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Stripe from "stripe";

interface SuccessProps {
  costumerName: string;
  quantity: number
  productsImageUrl: string[]
}

export default function Success({ costumerName, quantity, productsImageUrl }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <section>
          {
            productsImageUrl.map((image) => (
              <ImageContainer key={image}>
                <Image src={image} width={120} height={110} alt="" />
              </ImageContainer>
            ))
          }

        </section>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua <strong>{quantity}</strong> camisetas já está a caminho da sua casa.
        </p>

        <Link href='/'>
          Voltar ao catálogo
        </Link>

      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details?.name;

  let totalQuantity = 0;
  const productsImageUrl: string[] = [];

  session.line_items?.data.forEach(item => {

    if (item.quantity !== null) {
      totalQuantity += item.quantity;
    }
    const product = item.price?.product as Stripe.Product;
    if (product.images && product.images.length > 0) {

      productsImageUrl.push(product.images[0]);
    }
  });

  return {
    props: {
      customerName,
      quantity: totalQuantity,
      productsImageUrl
    }
  };
};


Success.getLayout = function (page: ReactNode) {
  return <LayoutWithoutMenu>{page}</LayoutWithoutMenu>
}