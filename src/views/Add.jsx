import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
function Add() {
    const[student,setStudent]=useState({
        id:"",
        name:"",
        city:""
    })
    async function submitstudent(e){
          e.preventDefault();
        const response=await axios.post(`${import.meta.env.VITE_API_URL}/students`,student);
        if(response.data.success){
            toast.success("Student added successfully");
            setStudent({
                id:"",
                name:"",
                city:"",
            })
        }
        else{
            toast.error("Student not added");
        }
      
    }
 
    function handlechange(e){
        const name=e.target.name;
        const value=e.target.value;

        setStudent(values=>({...values,[name]:value}))
    }

  return (
    <div className="flex  flex-col justify-center items-center  bg-blue-100 p-2">
    <h3 className="font-serif text-xl font-bold">Add student</h3>

        <label>
            <input type="text"  name="id" value={student.id} placeholder="Enter Your Id" className="border border-black rounded-md p-1" onChange={handlechange}/>
        </label>
        <br/>
        <br/>
        <label>
            <input type="text" name="name" value={student.name} placeholder='Enter Your name' className="border border-black roundeds-md p-1" onChange={handlechange}/>
        </label>
         <br/>
         <br/>
        <label>
            <input type="text" name="city" value={student.city}placeholder='Enter Your city' className='border border-black rounded-md p-1' onChange={handlechange}/>
        </label>
        <button className="p-1 rounded-md bg-blue-500 mt-10 font-serif text-white text-xl" onClick={(e)=>submitstudent(e)}>Add student</button>
        <Toaster/>
    </div>
  )
}

export default Add