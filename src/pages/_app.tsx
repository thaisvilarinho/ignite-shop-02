import { globalStyles } from "@/styles/global"
import type { AppProps } from "next/app"

import { Container } from "../styles/pages/app"
import { renderLayoutWithMenu } from "@/utils/renderLayoutWithMenu"

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return renderLayoutWithMenu(Component, (

    <Container>
      <Component {...pageProps} />
    </Container>

  ))
}
