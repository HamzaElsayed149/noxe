import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Movies() {
  console.log();
let [people,setPeople]= useState([])
let [isloading,setisLoading]= useState(true)

async  function gettrinding(pageNumber) {
 let {data} =   await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=664ad047271160036661d41b18ad9034&page=${pageNumber}`) 
 setPeople(data.results)
 setisLoading(false)

   }
   useEffect(() => {
    gettrinding(1)
  
  },[])
let pagenumbers=new Array(10).fill("h").map((ele,i)=>i+1)

function pagesnum(pages) {
  gettrinding(pages)
  setisLoading(true)

}
  return (
 <>
 <div className="container py-5">
 {isloading && <Loading/>}
 {!isloading && <>
  <div className="row mb-4">
  {people?.map(person =>person.profile_path && <Item key={person.id} data={person}/> )}

  </div>
 
 </>}
 <nav aria-label="Page navigation example pt-5">
  <ul className="pagination justify-content-center">
    {pagenumbers.map((ele)=><li key={ele} className="page-item" onClick={()=>pagesnum(ele)}><a className="page-link" >{ele}</a></li>
)}


  </ul>
</nav>
 

 </div>
 <>


</>
</>
  )
}
