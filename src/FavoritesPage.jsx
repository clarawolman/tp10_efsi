import Favorites from "./components/Favorites";

function FavoritesPage({ favoritos, quitarFavorito }) {
    return (
        <main>
            <h2>Mis favoritos</h2>

            <Favorites
                favoritos={favoritos}
                quitarFavorito={quitarFavorito}
            />
        </main>
    );
}

export default FavoritesPage;