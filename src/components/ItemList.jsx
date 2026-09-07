import ItemCard from "./ItemCard";

function ItemList({
    artistas,
    agregarFavorito,
    favoritos,
    quitarFavorito
}) {
    if (artistas.length === 0) {
        return <p>No encontramos resultados.</p>;
    }

    return (
        <section>
            {artistas.map((artista) => (
                <ItemCard
                    key={artista.idArtist}
                    artista={artista}
                    agregarFavorito={agregarFavorito}
                    quitarFavorito={quitarFavorito}
                    esFavorito={favoritos.some(
                        (favorito) => favorito.idArtist === artista.idArtist
                    )}
                />
            ))}
        </section>
    );
}

export default ItemList;