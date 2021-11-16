import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget'
export const NavBar = () => {

    
    return (
    
    <header className="header">
        <h1 className="logo">Logo</h1>
        <nav>
            <ul className = "nav">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
    )
}