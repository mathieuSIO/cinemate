import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

    useEffect(() => {
        async function getMovies() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        getMovies()
    }, [url])

    return { data }
}

//https://api.themoviedb.org/3/movie/now_playing?api_key=ebdf19d8f899bda652f96f85dc1f76a6
