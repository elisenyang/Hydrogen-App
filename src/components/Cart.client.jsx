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
      <div className="flex flex-row justify-items-start m-2">
        <CartLineImage options={{ width: 120, height: 120, crop: 'center' }} />
        <div className="grid grid-rows-3 justify-items-start ml-2">
          <CartLineProductTitle className="font-semibold"/>
          <CartLinePrice />
          <div>
            <CartLineQuantityAdjustButton adjust="decrease" className="mr-1">
              -
            </CartLineQuantityAdjustButton>
            <CartLineQuantity />
            <CartLineQuantityAdjustButton adjust="increase" className="ml-1">
              +
            </CartLineQuantityAdjustButton>
          </div>
        </div>
      </div>
    </CartLines>
  );
}

export default function Cart(props) {
  const cart = useCart();

  const totalItems = useCartLinesTotalQuantity();

  return (
    <div className="bg-gray-50 p-3">
      {totalItems ? <CartLineItems /> : <div><p>Your cart is empty</p><div>Total: 0.00</div></div>}
      <div>
        Total: <CartEstimatedCost />
      </div>
    </div>
  );
}
