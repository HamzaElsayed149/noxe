import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Home() {
let [movies,setMovies]= useState([])
let [tv,setTv]= useState([])
let [isloading,setisLoading]= useState(true)

async  function gettrinding( type, dest) {
 let {data} =   await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=664ad047271160036661d41b18ad9034`) 
 dest(data.results)
 setisLoading(false)
   }
useEffect(() => {
  gettrinding("movie", setMovies)
  gettrinding("tv", setTv)

},)

  return (
 <>
 <div className="container py-5">
  {isloading && <Loading/>}
  {!isloading && <>
    <div className="row mb-4">
    <div className="col-md-4">
      <div className="content pt-5 mb-5">
        <h1 className='position-relative fs-3'> Trinding <br /> Movies <br /> To watch <span className='colored '> Now</span> </h1>
      </div>
    </div>
{movies?.slice(0,10).map(movie =><Item key={movie.id} data={movie}/> )}
  </div>
  <div className="row ">
    <div className="col-md-4">
      <div className="content pt-5 mb-5">
        <h1 className='position-relative fs-3'> Trinding <br /> TVshows <br /> To watch <span className='colored '> Now</span> </h1>
      </div>
    </div>
{tv?.slice(0,10).map(movie =><Item key={movie.id} data={movie}/> )}
  </div>
  
  
  </>}

 </div>

</>
  )
}
