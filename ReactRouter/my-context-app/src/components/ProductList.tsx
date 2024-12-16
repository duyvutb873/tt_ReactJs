import React, { memo, useContext } from 'react'
import { CartContext } from '../contexts/CartContext.tsx'

interface Product {
  id: number
  name: string
  price: number
}

interface CartContextType {
  products: Product[]
}

const ProductList: React.FC<CartContextType> = function ({ product_arr }) {
  const cartContext = useContext(CartContext)
  const { products, addProduct } = cartContext

  const handleAddProduct = function(product) {
    console.log(product);
    addProduct(product);
  }

  console.log(product_arr);
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {product_arr.map((product) => (
          <li key={product.id}>
            <span>
              {product.name} - ${product.price}
            </span>
            <button onClick={()=>handleAddProduct(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(ProductList)
