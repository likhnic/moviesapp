import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice'

const MovieDetail = () => {
    const { imdbID } = useParams()
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow);
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
        return ()=>{
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, imdbID])
    return (
        <div>
            {Object.keys(data).length && 
            <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-sm-9">
                        <h2 className='my-3'>{data.Title}</h2>
                        <div className="my-3">
                            <span className='mr-3'>IMDb Rating : {data.imdbRating}</span>
                            <span className='mx-3'>IMDb Votes : {data.imdbVotes}</span>
                            <span className='mx-3'>Runtime : {data.imdbVotes}</span>
                            <span className='mx-3'>Year : {data.imdbVotes}</span>
                        </div>

                        <div className='my-3'>{data.Plot}</div>
                        <div className='row my-3'>
                            <div className="col-sm-2">
                                Director
                            </div>
                            <div className="col-sm-10">
                                {data.Director}
                            </div>
                            <div className="col-sm-2">
                                Stars
                            </div>
                            <div className="col-sm-10">
                                {data.Actors}
                            </div>
                            <div className="col-sm-2">
                                Genres
                            </div>
                            <div className="col-sm-10">
                                {data.Genre}
                            </div>
                            <div className="col-sm-2">
                                Languages
                            </div>
                            <div className="col-sm-10">
                                {data.Language}
                            </div>
                            <div className="col-sm-2">
                                Awards
                            </div>
                            <div className="col-sm-10">
                                {data.Awards}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                        <img src={data.Poster} alt={data.Title} />
                    </div>
                </div>
            </div>
            </>}
        </div>
    )
}

export default MovieDetail