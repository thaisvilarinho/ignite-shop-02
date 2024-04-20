'use client'
import { ReactNode } from 'react'
import { Layout } from '../components/layout/layout'
import { CartProvider } from 'use-shopping-cart'

interface ComponentWithLayout {
  getLayout?: (page: ReactNode) => JSX.Element
}

export const renderLayoutWithMenu = (Component: React.ComponentType<any>, page: ReactNode) => {
  const renderWithLayout = (Component as ComponentWithLayout).getLayout || ((page: ReactNode) => {
    return (
      <CartProvider
        shouldPersist
        cartMode="checkout-session"
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
        currency="BRL"
      >
        <Layout>{page}</Layout>
      </CartProvider>
    )
  })

  return renderWithLayout(page)
}
