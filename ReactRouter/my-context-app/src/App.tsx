import React, { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext.tsx'
import { CartContext, CartProvider } from "./contexts/CartContext.tsx";
import ProductList from "./components/ProductList.tsx";
import Cart from "./components/Cart.tsx";
import Home from './components/Home.tsx'
import Settings from './components/Settings.tsx'
import './App.css'

const App: React.FC = () => {
  const themeContext = useContext(ThemeContext)
  

  const { theme, setTheme } = themeContext
  

  const productsList = [
    { id: 1, name: 'Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', price: 20.0 },
    { id: 3, name: 'Product 3', price: 30.0 }
  ]

  return (
    <div className={theme}>
      <Home />
      <Settings />
      <CartProvider>
        <div>
          <ProductList
            product_arr={productsList}
          />
          <Cart />
        </div>
      </CartProvider>
    </div>
  )
}

export default App
