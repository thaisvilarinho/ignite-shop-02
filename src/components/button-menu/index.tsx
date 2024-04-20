'use client'
import { Handbag } from "@phosphor-icons/react"
import * as Dialog from '@radix-ui/react-dialog';
import {
  useShoppingCart
} from 'use-shopping-cart'
import { ShoopingCartModal } from "../shooping-cart-modal";

export function ButtonMenu() {
  const { cartCount } = useShoppingCart()
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <Handbag size={32} weight="bold" />
          {
            !!cartCount && cartCount > 0 && (

              <div><span>{cartCount}</span></div>
            )
          }
        </button>
      </Dialog.Trigger>

      <ShoopingCartModal />
    </Dialog.Root>
  )
}