import { Link } from 'react-router-dom'
import './SideDrawer.css'

export default function SideDrawer({ show, click }) {
    const sideDrawerClass = ['sideDrawer']
    if (show) {
        sideDrawerClass.push('show')
    }
    return (
        <div className={sideDrawerClass.join(' ')}>
            <u className='sideDrawerLinks' onClick={click}>
                <li>
                    <Link to='/cart'>
                        <i className='fas fa-shopping-cart'></i>
                        <span className='sideDrawerCartBadge'>Cart</span>
                    </Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
            </u>
        </div>
    )
}
