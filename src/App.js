import {Component} from 'react'
import Home from './components/Home'
import FoodContext from './context/FoodContext'

import './App.css'

// write your code here
class App extends Component {
  state = {productData: []}

  onProductData = (dishId, quantity) => {
    this.setState(prevState => {
      // Check if the dishId exists in the productData
      const dishExists = prevState.productData.some(
        each => each.dishId === dishId,
      )

      if (dishExists) {
        // Update the quantity if dishId exists
        return {
          productData: prevState.productData.map(each => {
            if (each.dishId === dishId) {
              console.log(`Updating dishId ${dishId} with quantity ${quantity}`)
              return {...each, quantity}
            }
            return each
          }),
        }
      }
      // Add a new entry if dishId does not exist
      console.log(`Adding new dishId ${dishId} with quantity ${quantity}`)
      return {
        productData: [...prevState.productData, {dishId, quantity}],
      }
    })
  }

  /*

  this.setState(prevState => ({
      productData: [...prevState.productData, {dishId, quantity}],
    }))

    */

  render() {
    const {productData} = this.state
    return (
      <FoodContext.Provider
        value={{productData, onProductData: this.onProductData}}
      >
        <Home />
      </FoodContext.Provider>
    )
  }
}

export default App
