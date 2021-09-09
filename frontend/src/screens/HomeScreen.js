import './HomeScreen.css'
import Product from '../components/Product'

export default function HomeScreen() {
    return (
        <div className='homeScreen'>
            <h2 className='homeScreenTitle'>Latest Products</h2>
            <div className='homeScreenProducts'>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    )
}
