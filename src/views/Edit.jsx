import React , {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import toast,{Toaster} from 'react-hot-toast'
function Edit() {
    const[student,setStudent]=useState({
        id:"",
        name:"",
        city:""
    })
    const{id}=useParams();
     async function loadstudent(){
        const response=await axios.get(`${import.meta.env.VITE_API_URL}/students/${id}`);
        setStudent(response.data.data)
    }
    useEffect(()=>{
        if(id){
            loadstudent()
        }
    },[id])
    async function updatestudent(e){
          e.preventDefault();
        const response=await axios.put(`${import.meta.env.VITE_API_URL}/students/${id}`,{
            name:student.name,
            city:student.city
        });
       if(response.data.success){
        toast.success("Student updated succesfully");
        setStudent({
            id:"",
            name:"",
            city:""
        })
        
       }
       else{
        toast.error("student is not found");
       }
    }
    function handlechange(e){
        const name=e.target.name;
        const value=e.target.value;

        setStudent(values=>({...values,[name]:value}))
    }

  return (
    <div className="flex  flex-col justify-center items-center  bg-blue-100 p-2">
    <h3 className="font-serif text-xl font-bold">Edit student {id}</h3>
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
        <button className="p-1 rounded-md bg-blue-500 mt-10 font-serif text-white text-xl" onClick={(e)=>updatestudent(e)}>Update student</button>
        <Toaster/>
    </div>
  )
}

export default Edit