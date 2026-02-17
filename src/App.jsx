import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Delete from './assets/delete.png'
import Add from './assets/add.png'
import {Link} from 'react-router-dom'
import Edit from './assets/edit.png'
function App() {
  const [student,setStudent]=useState([{
    
  }])

 const loadstudent=async()=>{
    const response=await axios.get("http://localhost:5002/students");
     setStudent(response.data.data)
 }
 useEffect(()=>{
  loadstudent();
 })

 
 
 
   async function DeleteStudent(id){
    const response=await axios.delete(`http://localhost:5002/students/${id}`)
  }


  return (
    <>
      <div>
       {student.map((stud,i)=>{
        const{id,name,city}=stud;
        return<div key={i} className="bg-white border border-black m-2 rounded-md p-2 relative">
          <h1>{id}- {name}</h1>
          <h3>{city}</h3>
            <img src={Delete} alt="Delete image" className="w-4 h-4 absolute right-5 top-1 " onClick={()=>DeleteStudent(id)}/>

             <Link to={`/Edit/${id}`}>
      <img src={Edit} alt="Add image"className="w-4 h-4 absolute right-5 bottom-1 " />
      
      </Link>
        </div>
        
       })}
      
      </div>
      <Link to="/add">
      <img src={Add} alt="Add image" className="w-10 h-10 fixed right-5 bottom-5 cursor-pointer"/>
      </Link>

     
      
    </>
  )
}

export default App
