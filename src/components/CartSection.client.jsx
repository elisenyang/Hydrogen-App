import Cart from './Cart.client';
import {useCartUI} from './CartUIProvider.client';
import {Link, useCartLinesTotalQuantity} from '@shopify/hydrogen/client';

export default function CartSection() {
  const cartUI = useCartUI();
  const totalItems = useCartLinesTotalQuantity();

  return (
    <div className="absolute top-10 bottom-0 right-20">
      <button onClick={cartUI.toggleCart}>Cart ({totalItems})</button>
      {cartUI.isOpen && (
        <div className="bg-gray-50">
          <Cart />
          <Link to="/cart">
            <button onClick={cartUI.toggleCart}>View Cart</button>
          </Link>
        </div>
      )}
    </div>
  );
}
