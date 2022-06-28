import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {

    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)

    return (
        <div className='container'>
            {movies.Response && (
                <div className="row">
                    {movies.Search.map((movie,index)=>{
                        return (
                            <MovieCard key={index} data={movie}/>
                        )
                    })}
                </div>
            )}
            {shows.Response && (
                <div className="row">
                    {shows.Search.map((show,index)=>{
                        return (
                            <MovieCard key={index} data={show}/>
                        )
                    })}
                </div>
            )}
            {!movies.Response && !shows.Response &&  (
                <div className="movies-error">
                    <h3>{movies.Error}</h3>
                </div>
            )}
        </div>
    )
}

export default MovieListing