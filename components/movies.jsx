import { useState } from "react";
import { movies } from "./data";
import "./movies.css"

export const Movies=()=>{
    const[movieslist,setmovie]=useState(movies)
    const filterMovie=(cat)=>{
        setmovie(movies.filter(data=>data.category===cat))
    }
    return(
        <>
        <nav className="bg-gray-800 p-4 shadow-md  top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">MovieZone</div>
          <div className="flex space-x-4 ">
            <button className="text-white hover:text-yellow-300 cursor-pointer" onClick={()=>setmovie(movies)}>All</button>
            <button className="text-white hover:text-yellow-300 cursor-pointer" onClick={()=>filterMovie("Action")}>Action</button>
            <button className="text-white hover:text-yellow-300 cursor-pointer" onClick={()=>filterMovie("Thriller")}>Thriller</button>
            <button className="text-white hover:text-yellow-300 cursor-pointer" onClick={()=>filterMovie("Animation")}>Animation</button>
            <button className="text-white hover:text-yellow-300 cursor-pointer" onClick={()=>filterMovie("Horror")}>Horror</button>
            <button className="text-white hover:text-yellow-300 cursor-pointer" onClick={()=>filterMovie("Drama")}>Drama</button>
            <button className="text-white hover:text-yellow-300 cursor-pointer" onClick={()=>filterMovie("Sci-Fi")}>Sci-fi</button>
            <button className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500">Login</button>
          </div>
        </div>
      </nav>

    <div className="flex flex-wrap justify-center items-center min-h-screen gap-6  bg-blue-500 p-4">
        {movieslist.map((data)=>{
            return(
            <div key={data.id}    className="bg-white rounded-lg shadow-md border-4 border-solid border-amber-300 p-4 text-center w-60 hover:scale-105 transition-transform duration-300">
                
                <img src={data.poster_path} alt="photo_path" className=" w-full h-72 object-cover rounded-md mb-3 cursor-pointer" />
                <h1  className="text-lg font-semibold">{data.title}</h1>
                <h3 className="text-gray-600">{data.release_date}</h3>
            </div>
            
         )})}
        </div>
        </>
    )
}