import {createContext, useContext, useState, useMemo, useCallback} from 'react';

const CartContext = createContext(null);

export function useCartUI() {
  return useContext(CartContext);
}

export default function CartUIProvider({children}) {
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = useCallback(() => {
    setCartOpen(true);
  }, [setCartOpen]);

  const closeCart = useCallback(() => {
    setCartOpen(false);
  }, [setCartOpen]);

  const toggleCart = useCallback(() => {
    setCartOpen(!cartOpen);
  }, [setCartOpen, cartOpen]);

  const contextValue = useMemo(() => {
    return {
      isOpen: cartOpen,
      openCart,
      closeCart,
      toggleCart,
    };
  }, [cartOpen, openCart, closeCart, toggleCart]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
