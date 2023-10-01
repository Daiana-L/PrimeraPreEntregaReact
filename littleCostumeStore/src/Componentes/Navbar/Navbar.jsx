import './NavBar.css' ;
import logo from '../img/logo.jpg';
import CartWidget from '../CartWidget/CartWidget';
const Navbar = () => {
return (
    <header>
        <img className='imgLogo' src={logo} alt="logo" />
        <nav>
            <ul>
                <li>Stock</li>
                <li>Cosplays</li>
                <li>Pelucas</li>
                <li>Zapatos</li>
                <li>Impresiones 3D</li>
            </ul>
        </nav>
<CartWidget/>

    </header>
)
}

export default Navbar