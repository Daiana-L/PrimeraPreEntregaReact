import './NavBar.css' ;
import CartWidget from '../CartWidget/CartWidget';
const Navbar = () => {
return (
    <header>
        <h1>LittleCostume</h1>
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