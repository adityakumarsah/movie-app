import MovieCard from "../Components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getpopularMovies } from "../sevices/api";
import "../css/Home.css"
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getpopularMovies();
                setMovies(popularMovies);

            }
            catch (err) {
                console.log(err);
                setError("Failed to load movies")
            }
            finally { setLoading(false) }
        }
        loadPopularMovies();
    }, [])
    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim())
            return;
        setLoading(true);
        if(loading) return;
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to get movies...")
        }finally{
            setLoading(false)
        }
       
    }
    return (

        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="Search movies"
                    className=""
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}>

                </input>
                <button type="submit" className="search-button">Search</button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {loading ? (<div className="loading">Loading...</div>) : (<div className="movies-grid">{movies?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>)}

        </div>
    )
}

export default Home