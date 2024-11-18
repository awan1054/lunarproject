import { useEffect } from "react"
import Card from "../Components/Card"
import Navbar from "../Components/Navbar"
import axios from "axios"

function Home(){
const fetchblogs= async()=>{
const response=await axios.get("http://localhost:3000/blog")
console.log(response.data.data)
}
const deletes= async()=>{
    const response=await axios.delete("http://localhost:3000/blog/6736e2d53ac6e80fe94acd13")
    alert("deleted successfully")

}
useEffect(()=>{
    fetchblogs()
},[])
    return(

   
        <>

<Navbar/>
<div className="flex flex-wrap">

<Card/>
<Card/>
<Card/>
<Card/>
<button onclick={deletes}>delete</button>
</div>
        </>
    )
}
export default Home