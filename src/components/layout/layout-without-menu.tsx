import { ReactNode } from "react"
import { Header } from "../header";


interface LayoutProps {
  children: ReactNode;
}

export function LayoutWithoutMenu({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}