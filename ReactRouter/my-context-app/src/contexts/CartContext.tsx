import React, { createContext, useState, ReactNode } from 'react'

interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartContextType {
    products: Product[];
    addProduct: (product: Product) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = (product: Product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
    }
    return (
        <CartContext.Provider value={{products, addProduct}}>
            {children}
        </CartContext.Provider>
    );
};