import { useId, useState } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {

    const { setFilters } = useFilters()

    const [minPrice, setMinPrice] = useState(0)

    //generar dos ids
    const minPriceFilterId = useId()
    const CategoryFilterId = useId()

    const handleChangePrice = (event) => {
        setMinPrice(event.target.value)

        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filtros'>
            <div>
                <label htmlFor={minPriceFilterId}></label>
                <input 
                    type="range" 
                    id={minPriceFilterId} 
                    min="0" 
                    max="1000"
                    onChange={handleChangePrice}/>
                <span>${ minPrice }</span>
            </div>

            <div>
                <label htmlFor={CategoryFilterId}>Categorias</label>
                <select name="category" id={CategoryFilterId} onChange={ handleChangeCategory }>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}