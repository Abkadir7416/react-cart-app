import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'
import '../styles/Header.css'
import { useSelector } from 'react-redux'
import logo from '../assets/Cart-PNG-Clipart.png'

const Header = () => {
  const {cartItems} = useSelector(state=>state.cart)
  return (
    <nav>
        <Link to={'/'}><img id='img' src={logo} alt="" /></Link>

        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>
              <FiShoppingBag />
              <p>{cartItems.length}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header