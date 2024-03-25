import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {

    const { filters } = useFilters()
    
    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }

            {/* <h4><span>Elias Segura</span></h4>
            <h5>© The best</h5> */}
        </footer>
    )
}