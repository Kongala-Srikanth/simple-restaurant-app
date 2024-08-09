import {useState, useContext, useEffect} from 'react'
import FoodContext from '../../context/FoodContext'

import './index.css'

const Items = props => {
  const [quantity, setQuantity] = useState(0)

  const {itemsData, onIncrease, onDecrease} = props
  const {
    dishAvailability,
    dishCalories,
    dishCurrency,
    dishDescription,
    dishId,
    dishImage,
    dishName,
    dishPrice,
    dishType,
    nexturl,
    addonCat,
  } = itemsData
  // console.log(dishAvailability, dishCalories,dishCurrency, dishDescription, dishId,dishPice,dishImage,dishType,nexturl)
  const onIncreaseQuantity = () => {
    setQuantity(quantity + 1)
    user.onProductData(dishId, quantity + 1)
    onIncrease()
  }

  const onDecreasQuantity = () => {
    quantity <= 1 ? setQuantity(0) : setQuantity(quantity - 1)
    if (quantity !== 0) {
      user.onProductData(dishId, quantity - 1)
      onDecrease()
    }
  }

  const available = dishType === 1 && 'available'
  const availableBorder = dishType === 1 && 'available-border'

  const user = useContext(FoodContext)

  let currentFoodQuantity = 0
  user.productData.filter(each => {
    if (each.dishId === dishId) {
      currentFoodQuantity = each.quantity
    }
  })

  useEffect(() => {
    setQuantity(currentFoodQuantity)
  }, [])

  return (
    <li className="each-dish">
      <div className="row-container">
        <div className={`square ${availableBorder}`}>
          <div className={`circle ${available}`} />
        </div>
        <div>
          <h1 className="dish-name">{dishName}</h1>
          <p className="dish-price">{`${dishCurrency} ${dishPrice}`}</p>
          <p className="dish-description">{dishDescription}</p>
          {dishAvailability && (
            <div className="quantity-container">
              <button
                type="button"
                className="btn-hide quantity quantity-btn"
                onClick={onDecreasQuantity}
              >
                -
              </button>
              <p className="quantity">{currentFoodQuantity}</p>
              <button
                type="button"
                className="btn-hide quantity quantity-btn"
                onClick={onIncreaseQuantity}
              >
                +
              </button>
            </div>
          )}

          {addonCat.length !== 0 && (
            <p className="customization-option">Customizations available</p>
          )}
          {!dishAvailability && (
            <p className="customization-option not-available">Not available</p>
          )}
        </div>
      </div>

      <div className="calories-container">
        <p className="calories">{dishCalories} calories</p>
      </div>
      <div>
        <img src={dishImage} alt={dishName} className="dish-image" />
      </div>
    </li>
  )
}

export default Items
