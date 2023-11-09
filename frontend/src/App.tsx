import { globalStyles } from "./styles/global"

import { Container } from "./styles/pages/app"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { ProductsContextProvider } from "./contexts/ProductsContext"

// assuring that my global styles will be applied before the first rendering
globalStyles()

export function App() {
  return (
    <Container>
      <BrowserRouter>
        <ProductsContextProvider>
          <Router />
        </ProductsContextProvider>
      </BrowserRouter>
    </Container>
  )
}
