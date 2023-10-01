import cart from '../img/cart.png';
import  './CartWidget.css';
const CartWidget = () => {
return (
<div>
    <img className='imgCart' src={cart} alt="cart" />
    <strong> 4 </strong>


</div>
    )
}

export default CartWidget