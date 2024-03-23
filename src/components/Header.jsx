import { Filters } from "./Filters"

export function Header ( { changeFilters }) {
    return (
        <header>
            <h1>The best Tienda online</h1>
            <Filters onChange={ changeFilters } />
        </header>
    )
}