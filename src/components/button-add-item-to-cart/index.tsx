'use client'
import { Handbag } from "@phosphor-icons/react"
import {
  useShoppingCart
} from 'use-shopping-cart'

import { ButtonContainer } from "./styles"
import Stripe from "stripe"

interface ButtonAddItemToCartProps {
  product: {
    id: string
    name: string
    image: string
    price: string
    default_price: Stripe.Price
  }
}

export function ButtonAddItemToCart({ product }: ButtonAddItemToCartProps) {
  const { addItem } = useShoppingCart()

  function handleAddItemToCart() {
    const {id, price, ...rest} = product
    addItem({
      id,
      sku: product.id,
      currency: product.default_price.currency,
      price: Number(price),
      ...rest
    })
  }

  return (
    <ButtonContainer onClick={handleAddItemToCart}>
      <Handbag size={32} weight="bold" />
    </ButtonContainer>
  )
}