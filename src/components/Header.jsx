import { Filters } from "./Filters"

export function Header ( { changeFilters }) {
    return (
        <header>
            <h1>Tienda online</h1>
            <Filters onChange={ changeFilters } />
        </header>
    )
}