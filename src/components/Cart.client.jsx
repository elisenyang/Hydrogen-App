import {
  CartLines,
  CartLineImage,
  CartLineProductTitle,
  CartLinePrice,
  CartLineQuantity,
  CartLineQuantityAdjustButton,
  CartEstimatedCost,
  useCartLinesTotalQuantity,
  useCart
} from '@shopify/hydrogen/client';

function CartLineItems() {

  return (
    <CartLines>
      <CartLineImage options={{width: 150, height: 150, crop: 'center'}} />
      <CartLineProductTitle />
      <CartLinePrice />
      <CartLineQuantityAdjustButton adjust="decrease">
        Remove
      </CartLineQuantityAdjustButton>
      <CartLineQuantity />
      <CartLineQuantityAdjustButton adjust="increase">
        Add
      </CartLineQuantityAdjustButton>
    </CartLines>
  );
}

export default function Cart(props) {
  const cart = useCart();

  const totalItems = useCartLinesTotalQuantity();

  return (
    <div className="bg-gray-50 p-5">
      {totalItems ? <CartLineItems /> : <p>Your cart is empty</p>}
      <div>
        Total: <CartEstimatedCost />
      </div>
    </div>
  );
}
