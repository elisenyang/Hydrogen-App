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

export default function Cart(props) {
  return (
    <div className="bg-gray-50 p-5">
      <CartLines>
        <CartLineImage options={{width: 150, height: 150, crop: 'center'}} />
        <CartLineProductTitle />
        <CartLinePrice />
        <CartLineQuantityAdjustButton adjust="decrease">
          Decrease
        </CartLineQuantityAdjustButton>
        <CartLineQuantity />
        <CartLineQuantityAdjustButton adjust="increase">
          Increase
        </CartLineQuantityAdjustButton>
      </CartLines>
      <span>Total:</span>
      <CartEstimatedCost />
      <CartCheckoutButton>Check Out</CartCheckoutButton>
      <CartShopPayButton></CartShopPayButton>
    </div>
  );
}
