import { useId, useState } from 'react'
import './Filters.css'

export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)

    //generar dos ids
    const minPriceFilterId = useId()
    const CategoryFilterId = useId()

    const handleChangePrice = (event) => {
        setMinPrice(event.target.value)

        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
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