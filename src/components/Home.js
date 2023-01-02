import React, { useState } from 'react'
import {faker} from "@faker-js/faker";
import SingleProduct from './SingleProduct';
import '../components/style.css';

faker.seed(100);

const Home = ({cart, setCart}) => {

  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),


  }));
   
  // console.log(productsArray);
  const [products, setProducts] = useState(productsArray);

 

  console.log(cart);

  return (
    <div className='productContainer'>
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>
      ))}
      
    </div>
  )
}

export default Home