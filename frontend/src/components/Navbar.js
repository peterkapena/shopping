import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({ click }) {
    return (
        <mav className='navbar'>
            <div className='navbar_logo'>
                <h2>Shopping Cart</h2>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className='cart_link'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>Cart</span>
                        <span className='cartLogo_badge'>0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
            <div className='hamburger_menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </mav>
    )
}

export default Navbar
