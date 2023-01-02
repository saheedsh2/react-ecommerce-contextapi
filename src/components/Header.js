import React from 'react'
import '../components/style.css';
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <span className='header'>Ecommerce | React Context API</span>
        <ul className='nav'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/cart'>Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header;