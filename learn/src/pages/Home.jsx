import { useEffect, useState } from "react"
import Card from "../Components/Card"
import Navbar from "../Components/Navbar"
import axios from "axios"

function Home(){
    const [blog,setblog]=useState([])
const fetchblogs= async()=>{
const response=await axios.get("http://localhost:3000/blog")
if(response.status==200){
    setblog(response.data.data)

}
else{
    alert("something wrong")
}
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

{blog.map((haha)=>{
    return(
        <Card blog={haha}/>
    )
})
}
<button onclick={deletes}>delete</button>
</div>
        </>
    )
}
export default Home