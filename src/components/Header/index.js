import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = props => {
  const {cartQuantity, restaurantName} = props
  return (
    <nav className="nav-container">
      {restaurantName !== '' && <h1 className="logoName">{restaurantName}</h1>}

      <div className="cart-container">
        <p>My Orders</p>
        <button type="button" className="btn-hide cart-btn">
          <AiOutlineShoppingCart />
          <p className="quantity-number">{cartQuantity}</p>
        </button>
      </div>
    </nav>
  )
}

export default Header
