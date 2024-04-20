'use client'
import * as Dialog from '@radix-ui/react-dialog';
import { X } from "@phosphor-icons/react"
import Image from 'next/image';
import Stripe from "stripe"
import {
  useShoppingCart
} from 'use-shopping-cart'

import { stripe } from "@/lib/stripe";


import { CartItem, CartList, CloseButton, Content } from './style';

export function ShoopingCartModal() {
  const { removeItem, cartCount, cartDetails, redirectToCheckout } = useShoppingCart()
  const cartPrice = cartDetails ? Object.values(cartDetails).reduce((total, item) => {
    const unitAmount = item.default_price?.unit_amount ?? 0;
    return total + unitAmount * item.quantity;
  }, 0) : 0
  const totalCartPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartPrice! / 100)


  const handleProceedCheckout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  
    try {
      if (cartDetails) {
        const lineItems = Object.values(cartDetails).map((item) => ({
          price: item.default_price.id,
          quantity: item.quantity,
        }));
  
        
        const successUrl = `${process.env.NEXT_PUBLIC_NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
        const cancelUrl = `${process.env.NEXT_PUBLIC_NEXT_URL}/`;
        
        const checkoutSession = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: lineItems,
          mode: 'payment',
          success_url: successUrl,
          cancel_url: cancelUrl,
        });
  
        console.log(JSON.stringify(checkoutSession, null, 2));
        const result = await redirectToCheckout(checkoutSession.id);
      }
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    <Dialog.Portal>
      <Content>
        <header>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <Dialog.Title>Sacola de compras</Dialog.Title>
        </header>

        <section>
          <CartList>
            {
              // <pre>{JSON.stringify(cartDetails, null, 2)}</pre>
            }
            {cartCount && cartCount > 0 ? Object.values(cartDetails ?? {}).map((product) => {
              const price = product.default_price as Stripe.Price
              const priceFormatted = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(price.unit_amount! / 100)
              const subTotalProduct = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format((price.unit_amount! * product.quantity) / 100)
              return (
                <CartItem key={product.id}>
                  <div>
                    <Image src={product.image as string} width={100} height={93} alt="" />
                  </div>
                  <div>
                    <span>{product.name}</span>
                    <div>
                      <strong>({product.quantity} un x</strong>
                      <strong>{priceFormatted})</strong>
                      <strong>{subTotalProduct}</strong>
                    </div>

                    <button onClick={() => removeItem(product.id)}>Remover</button>
                  </div>
                </CartItem>

              )
            }) : (
              <p>Seu carrinho está vazio!</p>
            )
            }

          </CartList>

          <footer>
            <div>
              <span>Quantidades</span>
              <span>{cartCount}</span>
            </div>
            <div>
              <strong>Valor Total</strong>
              <strong>{totalCartPrice}</strong>
            </div>

            <button disabled={!cartCount} onClick={handleProceedCheckout}>Finalizar compra</button>
          </footer>

        </section>

      </Content>
    </Dialog.Portal>
  )
}