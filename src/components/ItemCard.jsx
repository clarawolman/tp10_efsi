function ItemCard({ artista, agregarFavorito, esFavorito, quitarFavorito }) {
    const {
        idArtist,
        strArtist,
        strArtistThumb,
        strGenre,
        strCountry
    } = artista;

    return (
        <article>
            <img
                src={strArtistThumb}
                alt={strArtist}
            />

            <h2>{strArtist}</h2>

            <p>Género: {strGenre || "No disponible"}</p>

            <p>País: {strCountry || "No disponible"}</p>

            {esFavorito ? (
                <button onClick={() => quitarFavorito(idArtist)}>
                    Quitar de favoritos
                </button>
            ) : (
                <button onClick={() => agregarFavorito(artista)}>
                    Agregar a favoritos
                </button>
            )}
        </article>
    );
}

export default ItemCard;