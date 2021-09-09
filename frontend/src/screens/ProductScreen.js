import './ProductScreen.css'

export default function ProductScreen({ id }) {
    return (
        <div className='productScreen'>
            <div className='productScreenLeft'>
                <div className='leftImage'>
                    <img alt='product image' src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'>

                    </img>
                </div>
                <div className='leftInfo'>
                    <p className='leftName'>Playstation 1</p>
                    <p >Price $4404</p>
                    <p > Lorem ipsum is placeholder text commonly used in the gr
                    aphic</p>
                </div>
            </div>
            <div className='productScreenRight'>
                <div className='rightInfo'>
                    <p>
                        Price: <span>$499.99</span>
                    </p>
                    <p>
                        Status: <span>In stock</span>
                    </p>
                    <p>
                        Quantity
                        <select>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                    </p>
                    <p>
                        <button typeof='button'>Add to Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
