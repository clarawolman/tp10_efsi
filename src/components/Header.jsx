import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Explorador Musical</h1>

            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/favoritos">Favoritos</Link>
            </nav>
        </header>
    );
}

export default Header;