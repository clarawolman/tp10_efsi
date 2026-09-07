import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Home";
import Favorites from "./components/Favorites";
import FavoritesPage from "./FavoritesPage";


function App() {
    const [favoritos, setFavoritos] = useState(() => {
        const favoritosGuardados = localStorage.getItem("favoritos");

        return favoritosGuardados
            ? JSON.parse(favoritosGuardados)
            : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );
    }, [favoritos]);

    const agregarFavorito = (artista) => {
        const yaExiste = favoritos.some(
            (favorito) => favorito.idArtist === artista.idArtist
        );

        if (!yaExiste) {
            setFavoritos([...favoritos, artista]);
        }
    };

    const quitarFavorito = (idArtist) => {
        const nuevosFavoritos = favoritos.filter(
            (favorito) => favorito.idArtist !== idArtist
        );

        setFavoritos(nuevosFavoritos);
    };

    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            favoritos={favoritos}
                            agregarFavorito={agregarFavorito}
                            quitarFavorito={quitarFavorito}
                        />
                    }
                />

                <Route
                    path="/favoritos"
                    element={
                        <FavoritesPage
                            favoritos={favoritos}
                            quitarFavorito={quitarFavorito}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;