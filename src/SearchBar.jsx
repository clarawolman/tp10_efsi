function SearchBar({ texto, setTexto, onBuscar }) {
    const manejarSubmit = (event) => {
        event.preventDefault();
        onBuscar();
    };

    return (
        <form onSubmit={manejarSubmit}>
            <input
                type="text"
                placeholder="Buscar artista..."
                value={texto}
                onChange={(event) => setTexto(event.target.value)}
            />

            <button type="submit">
                Buscar
            </button>
        </form>
    );
}

export default SearchBar;