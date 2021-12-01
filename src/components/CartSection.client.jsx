import Cart from './Cart.client';
import {useCart} from './CartProvider.client';
import Button from './Button.client';
import {Link, useCartLinesTotalQuantity} from '@shopify/hydrogen/client';

export default function CartSection() {
  const cartCtx = useCart();
  const totalItems = useCartLinesTotalQuantity();

  return (
    <div className="absolute top-10 bottom-0 right-20">
      <button onClick={cartCtx.toggleCart}>Cart ({totalItems})</button>
      {cartCtx.isOpen && (
        <div className="bg-gray-50">
          <Cart />
          <Link to="/cart">
            <button onClick={cartCtx.toggleCart}>View Cart</button>
          </Link>
        </div>
      )}
    </div>
  );
}
