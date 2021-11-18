// Import cart components that you'll use to build your cart. Import the `useCart` hook to access the cart object.
import {useCartDiscountCodesUpdateCallback, useCart, CartLines, CartLineAttributes, CartLineImage, CartLineProductTitle, CartLinePrice, CartLineQuantity, CartLineQuantityAdjustButton, CartEstimatedCost, CartCheckoutButton} from '@shopify/hydrogen/client';
// Import the `useState` hook from React to return a stateful value and a function to update it.
import {useState} from 'react';

// Define a `Cart` component that accepts discount codes. The discount codes have
// access to the cart object through the `useCart` hook. The
// `useCartDiscountCodesUpdateCallback` hook returns a callback that can be
// used to update the cart's discount codes.
export default function Cart() {
  const [discountCode, setDiscountCode] = useState();
  const {discountCodes} = useCart();
  const addDiscountCode = useCartDiscountCodesUpdateCallback();

  // Return JSX with the Tailwind classes that determine the styling of the layout of each cart component.
  return (
    <>
    <div class="md:px-8">
      <CartLines>
        <div className="flex mb-4 w-full">
          <CartLineImage className="rounded-lg mr-4" options={{width: 100, height: 100, crop: 'center'}}/>
          <div className="space-y-2 mr-4 flex-grow">
            <CartLineProductTitle className="font-semibold text-xl"/>
            <CartLineAttributes />
            <div className="inline-flex items-center border border-black space-x-2 p-2 flex-grow-0">
              <CartLineQuantityAdjustButton adjust="decrease">-</CartLineQuantityAdjustButton>
              <CartLineQuantity />
              <CartLineQuantityAdjustButton adjust="increase">+</CartLineQuantityAdjustButton>
            </div>
          </div>
          <div className="text-right">
            <CartLinePrice />
            <CartLineQuantityAdjustButton className="text-xs text-gray-400"adjust="remove">Remove</CartLineQuantityAdjustButton>
          </div>
        </div>
      </CartLines>
      <div className="flex">
        <input placeholder="Discount code?" type="text" className="border border-black mr-4 p-2 rounded-lg" onChange={(event) => setDiscountCode(event.target.value)}/>
        <button onClick={() => addDiscountCode([discountCode])} className="bg-black semibold rounded-lg text-white p-4">Apply</button>
      </div>
      <div className="space-y-2 md:py-5 mb-6">
        <div className="text-xl flex justify-between">
          <span className="font-semibold">Subtotal</span>
          <CartEstimatedCost as="span" amountType="subtotal"/>
        </div>
        {discountCodes && discountCodes.length > 0 ? <div className="text-xl flex justify-between">
          <span className="font-semibold">Discount</span>
          <span className="font-semibold uppercase text-sm">{discountCodes.map(({code}) => code).join(' ')}</span>
        </div> : null}
        <div className="text-xl flex justify-between">
          <span className="font-semibold">Total</span>
          <CartEstimatedCost as="span" amountType="total"/>
        </div>
        <CartCheckoutButton className="bg-black text-white font-semibold py-4 px-10 rounded-xl w-full">Checkout</CartCheckoutButton>
      </div>
    </div>
    </>
  )
}
