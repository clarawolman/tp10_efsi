import ItemCard from "./ItemCard";

function Favorites({
    favoritos,
    quitarFavorito
}) {
    if (favoritos.length === 0) {
        return <p>No tenés artistas favoritos.</p>;
    }

    return (
        <section>
            {favoritos.map((artista) => (
                <ItemCard
                    key={artista.idArtist}
                    artista={artista}
                    esFavorito={true}
                    quitarFavorito={quitarFavorito}
                />
            ))}
        </section>
    );
}

export default Favorites;