import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const { data } = props;
    const url = `/movie/${data.imdbID}`
    return (
        <div className="card my-2 mx-2" style={{ width: "18rem" }}>
            <img src={data.Poster} className="card-img-top" alt={data.Title} />
            <div className="card-body" >
                <h5 className="card-title">{data.Title}</h5>
                <p className="card-text">{data.Year}</p>
                <Link to={url} className="btn btn-primary">Find Out More!</Link>
            </div>
        </div>
    )
}

export default MovieCard