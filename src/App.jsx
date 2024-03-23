import { useState } from "react"
import { Products } from "./components/Products"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/Header"

//Crear un custom hook, para separar la logica con la que se desarrolla los filtros
function useFilters(){
  const [ filters, setfilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' || 
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setfilters }
}

function App() {
  const [products] = useState(initialProducts)

  const { filterProducts, setfilters }= useFilters()

  const filteredProducts = filterProducts(products)

  return (
      <>
        <Header changeFilters={ setfilters }/>
        <Products products={ filteredProducts }/>
      </>
  )
}

export default App
