import {
  CartLines,
  CartLineImage,
  CartLineProductTitle,
  CartLinePrice,
  CartLineQuantity,
  CartLineQuantityAdjustButton,
  CartEstimatedCost,
  CartCheckoutButton,
  CartShopPayButton,
} from '@shopify/hydrogen/client';

import Button from './Button.client';

export default function Cart(props) {

  return (
    <div className="bg-gray-50 p-5">
      <CartLines>
        <CartLineImage options={{width: 150, height: 150, crop: 'center'}} />
        <CartLineProductTitle />
        <CartLinePrice />
        <CartLineQuantityAdjustButton adjust="decrease">
          Add
        </CartLineQuantityAdjustButton>
        <CartLineQuantity />
        <CartLineQuantityAdjustButton adjust="increase">
          Remove
        </CartLineQuantityAdjustButton>
      </CartLines>
        <div>
          <p>Total:</p>
          <CartEstimatedCost />
          <CartCheckoutButton>Check Out</CartCheckoutButton>
          <CartShopPayButton />
        </div>
    </div>
  );
}
