import { tara } from "./datat";
import React, { useState } from "react";
import "./Carte.css"
const Vale=()=>{
const[datar,setsa]=useState(tara);
return(
    <>
    <div className="flex flex-wrap gap-4 justify-center items-center">
    {
        datar.map((data)=>{
            return(
                <div key={data.id} className="bg-white rounded-lg shadow-md p-4 text-center w-60 hover:scale-105 transition-transform duration-300">
                <img src={data.thumbnail} alt="phool" className="w-[250px]"/>
                <h1>{data.id}</h1> <br />
                <h2>{data.title}</h2>
                </div>
            )
        })
    }
    </div>
    </>
)
}
export default Vale;