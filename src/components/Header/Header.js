import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Header = () => {

    const [name,setName]=useState("Harry")

    const onChange=(e)=>{
        setName(e.target.value)
    }
    const dispatch=useDispatch();
    const handleClick=(e)=>{
        e.preventDefault()
        dispatch(fetchAsyncMovies(name))
        dispatch(fetchAsyncShows(name))
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    <form onSubmit={handleClick} className="d-flex">
                        <input onChange={onChange} className="form-control me-2" type="search" placeholder="Search Movies or Shows" aria-label="Search" />
                        <button  className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header