import Cart from './Cart.client';
import { useCart } from './CartProvider.client';

export default function CartSection() {
    const cartCtx = useCart();
    
    return ( 
        <div className="absolute top-10 bottom-0 right-20">
        <button onClick={cartCtx.toggleCart}>Cart</button>
        {cartCtx.isOpen && <Cart/>}
        </div>
        
    )
}