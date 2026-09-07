import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ItemList from "./components/ItemList";
import { buscarArtista } from "./api";

function Home({ favoritos, agregarFavorito, quitarFavorito }) {
    const [artistas, setArtistas] = useState([]);
    const [texto, setTexto] = useState("");
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState("");

    const obtenerArtistas = async (nombre) => {
        setCargando(true);
        setError("");

        try {
            const resultados = await buscarArtista(nombre);

            const resultadosFiltrados = resultados.filter((artista) =>
                artista.strArtist
                    ?.toLowerCase()
                    .includes(nombre.toLowerCase())
            );

            setArtistas(resultadosFiltrados);
        } catch (error) {
            setError("No fue posible obtener la información.");
            setArtistas([]);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        obtenerArtistas("Taylor Swift");
    }, []);

    const buscar = () => {
        if (texto.trim() === "") {
            return;
        }

        obtenerArtistas(texto);
    };

    return (
        <main>
            <h2>Explorar música</h2>

            <SearchBar
                texto={texto}
                setTexto={setTexto}
                onBuscar={buscar}
            />

            {cargando && <p>Cargando información...</p>}

            {error && <p>{error}</p>}

            {!cargando && !error && (
                <ItemList
                    artistas={artistas}
                    favoritos={favoritos}
                    agregarFavorito={agregarFavorito}
                    quitarFavorito={quitarFavorito}
                />
            )}
        </main>
    );
}

export default Home;