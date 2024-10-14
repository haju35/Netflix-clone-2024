import React, { useState, useEffect } from 'react';
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";
const Banner = () => {
  const[movie, setMovie] = useState({});
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };
  useEffect(() =>{
    (async()=>{
      try{
        const request = await axios.get(requests.fetchNetflixOriginals);

        console.log(request)
        setMovie(request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]);
      }catch (error){
        console.log("error" , error);
      }
    })()
  },[]);
  return (
    <div className='banner'
    style={{
      backgroundImage: movie?.backdrop_path ? 
        `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat"
    }}
    
    >
      <div className='banner_contents'>
          <h1 className='banner_title'>
            {movie?.title|| movie?.name || movie?.orginal_name}
          </h1>
          <div>
            <button className='banner_button play'>Play</button>
            <button className='banner_button'>My List</button>
          </div>
          <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
      </div>
      <div className='banner_fadeBottom'/>
    </div>
  )
}

export default Banner
