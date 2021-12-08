import {createContext, useState, useMemo, useContext, useCallback} from 'react';
import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen/client';

import CartUIProvider, {useCartUI} from './CartUIProvider.client';

export default function CartProvider({children, cart}) {
  return (
    <CartUIProvider>
      <Provider cart={cart}>{children}</Provider>
    </CartUIProvider>
  );
}

function Provider({children, cart}) {
  const {openCart} = useCartUI();

  const open = useCallback(() => {
    openCart();
  }, [openCart]);

  return (
    <ShopifyCartProvider cart={cart} onLineAdd={open} onCreate={open}>
      {children}
    </ShopifyCartProvider>
  );
}
