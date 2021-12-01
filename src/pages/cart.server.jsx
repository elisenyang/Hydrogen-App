import {CartCheckoutButton} from '@shopify/hydrogen';

import Layout from '../components/Layout.server';
import Cart from '../components/Cart.client';

export default function cartPage() {
  return (
    <Layout>
      <Cart />
      <CartCheckoutButton>Check Out</CartCheckoutButton>
    </Layout>
  );
}
