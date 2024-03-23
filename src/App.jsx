import { useState } from "react"
import { Products } from "./components/Products"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT } from "../config"

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

  return { filters, filterProducts, setfilters }
}

function App() {
  const [products] = useState(initialProducts)

  const { filters, filterProducts, setfilters }= useFilters()

  const filteredProducts = filterProducts(products)

  return (
      <>
        <Header changeFilters={ setfilters }/>
        <Products products={ filteredProducts }/>
        { IS_DEVELOPMENT && <Footer filters={ filters }/> }
      </>
  )
}

export default App
