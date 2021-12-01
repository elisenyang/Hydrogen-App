import {
  CartLines,
  CartLineImage,
  CartLineProductTitle,
  CartLinePrice,
  CartLineQuantity,
  CartLineQuantityAdjustButton,
  CartEstimatedCost,
  useCart,
  useCartLinesTotalQuantity
} from '@shopify/hydrogen/client';

export default function Cart(props) {
  const cart = useCart()
  const totalItems = useCartLinesTotalQuantity();

  return (
    <div className="bg-gray-50 p-5">
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
      { totalItems ? <div>Total: <CartEstimatedCost/></div> : <p>Cart is empty</p>}
    </div>
  );
}
