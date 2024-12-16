import React, { useContext, useMemo } from "react";
import { CartContext } from "../contexts/CartContext.tsx";

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Cart must be used within a CartProvider");
  }

  const { products, addProduct } = cartContext;

  const total = useMemo(() => {
    console.log("Calculating total...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  return (
    <div>
      <h2>Cart</h2>
      <p>Total: ${total}</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
