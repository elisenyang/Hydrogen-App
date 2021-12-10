import {CartCheckoutButton} from '@shopify/hydrogen';

import Layout from '../components/Layout.server';
import Cart from '../components/Cart.client';


export default function cartPage() {
    

  return (
    <Layout>
      <h1>Your Cart</h1>
      <Cart />
      <CartCheckoutButton className='block m-0 w-full items-center justify-center uppercase font-medium text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700'> Check Out</CartCheckoutButton>
    </Layout>
  );
}
