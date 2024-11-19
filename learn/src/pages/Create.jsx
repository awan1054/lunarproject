import { useState } from "react"
import Navbar from "../Components/Navbar"
import axios from "axios"


function Create(){
  const[title,settitle]=useState("")
  const[subtitle,setsubtitle]=useState("")
  const [description,setdescription]=useState("")
const createBlog=async(e)=>{
  e.preventDefault()
 const response=await axios.post("http://localhost:3000/blog",{
    title:title,
    subtitle,
    description
  })

if (response.status===200){
  alert("blog created successfully")
}
else{
  alert("something went wrong")
}
}
    return(
    <>
    <Navbar/>
    <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div className="mt-10 text-center font-bold">Create blog</div>
  <div className="mt-3 text-center text-4xl font-bold">You can create blog here</div>
  <div className="p-8">
    <form onSubmit={createBlog} >
    <div className="flex gap-4">
      <input type="text" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="enter title *" onChange={(e)=>settitle(e.target.value)} />
      
    </div>
    <div className="flex gap-4">
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="enter subtitle *" onChange={(e)=>setsubtitle(e.target.value)}/>
      
    </div>
   
    <div className="">
      <textarea name="textarea" id="text" cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" onChange={(e)=>setdescription(e.target.value)}>Description</textarea>
    </div>
    <div className="text-center">
      <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Create blog</button>
    </div>
    </form>
  </div>
</div>
    </>
    )
}
export default Create