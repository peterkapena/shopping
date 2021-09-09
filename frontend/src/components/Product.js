import './Product.css'
import { Link } from 'react-router-dom'

export default function Product() {
    return (
        <div className='product'>
            <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                alt='product'></img>
            <div className='productInfo'>
                <p className='infoName'>Product 1</p>
                <p className='infoDescription'>
                    Lorem ipsum is placeholder text commonly used in the gr
                    aphic, print, and publishing industries for previewing
                </p>
                <p className='infoPrice'>$499.99</p>
                <Link className='infoButton' to={`/product/${111}`}>View</Link>
            </div>
        </div>
    )
}
