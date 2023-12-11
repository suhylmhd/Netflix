import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'

function Row({title , fetchUrl,isPresent}) {
  const [allMovies , setAllMovies] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";
  /* console.log(fetchUrl); */
  const fetchData = async()=>{
    const {data} = await instance.get(fetchUrl)
    /* console.log(data.results); */
    setAllMovies(data.results)
  }
   console.log(allMovies);


  useEffect(()=>{
    fetchData()
  },[])

    return (
      <div className="row">
        <div>{title}</div>
        <div className="movie-row">
          {
            allMovies?.map(item =>(
              <img className={`movie ${isPresent && 'movie-poster'}`} src={`${base_url}${isPresent?item?.poster_path:item?.backdrop_path}`} alt="No Image" />
            ))
          }
        </div>
      </div>
      
    )
  }

export default Row

/*  */