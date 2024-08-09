import React from 'react'

const FoodContext = React.createContext({
  productData: [],
  onProductData: () => {},
})

export default FoodContext
