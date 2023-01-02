import React from 'react'
import SingleProduct from './SingleProduct'

const Cart = ({cart, setCart, prod}) => {
  return (
    <div>
      <span style={{ fontSize: 30}}>My Cart</span>
      <br></br>
      <span style={{ fontSize: 30}}>Total: ₦ 1000.0</span>
      <div className='productContainer'>
        {
          cart.map(prod => (
            <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>
          ))
        }

      </div>
    </div>
  )
}

export default Cart