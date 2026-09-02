import axios from "axios";

const API_URL = "https://www.theaudiodb.com/api/v1/json/123";

export const buscarArtista = async (nombre) => {
    const response = await axios.get(
        `${API_URL}/search.php?s=${encodeURIComponent(nombre)}`
    );

    return response.data.artists || [];
};