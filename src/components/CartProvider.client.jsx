import React, {useState, useContext} from 'react';
import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen/client';

const CartContext = React.createContext(null);

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({children}) {
  const [cartOpen, setCartOpen] = useState(false);

  function handleToggleCart() {
    setCartOpen((cartOpen) => {return !cartOpen});
  }

  const cartValue = {
    isOpen: cartOpen,
    toggleCart: handleToggleCart,
  };

  return (
    <CartContext.Provider value={cartValue}>
      <ShopifyCartProvider>{children}</ShopifyCartProvider>
    </CartContext.Provider>
  );
}
