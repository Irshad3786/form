import { useState } from 'react'
import axios from 'axios'
import './App.css'
 import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [formData, setformData] = useState({
    name:"",email:"",number:"",address:"",pincode:"",gender:"",prefercontact:""
  })

  const dataChange =(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})
  }

  const submitData = (e)=>{
    e.preventDefault()
   console.log(formData);
   
    axios.post("http://localhost:3100/formData",formData)
    .then((res)=>{
      if(res.status == 200){
        toast.success("Data Added Succesfully")
      }
      
      
    })
    .catch((error)=>{
      if(error.status == 400){
        toast.warn("Email Or PhoneNo already Exists")
      }
      
    })
    
  }

  return (
    <>
      <div className='h-screen w-full bg-black text-white'>
        <ToastContainer/>
        <h1 className='flex justify-center items-center text-3xl pt-12 font-bold font-mono text-indigo-600'>Contact Form</h1>
        <form onSubmit={submitData} className='flex flex-col justify-center items-center gap-4 pt-28 font-Roboto'>
          
          <label for="name"> Enter Your Name 
          <input type="text" name="name" id=""  required onChange={dataChange} className='w-44 p-2 rounded-xl ml-2 text-black'/></label>
          <label for="name"> Enter Your Email <input type="email" name="email" id=""   required onChange={dataChange} className='w-44 p-2 rounded-xl ml-2 text-black'/></label>
          <label for="name"> Enter Your Number <input type="number" name="number" id=""  required onChange={dataChange} className='w-44 p-2 rounded-xl ml-2 text-black'/></label>
          <label for="name"> Enter Your Address<input type="text" name="address" id=""  required onChange={dataChange} className='w-44 p-2 rounded-xl ml-2 text-black'/></label>
          <label for="name"> Enter Your Pincode <input type="number" name="pincode" id=""  required onChange={dataChange} className='w-44 p-2 rounded-xl ml-2 text-black'/></label>
          <div className='flex space-x-2'>
          <label>
          <input type="radio" name="gender" value="male" checked={formData.gender == "male"} onChange={dataChange} /> Male
          </label>
          <label>
          <input type="radio" name="gender" value="female" checked={formData.gender == "female"} onChange={dataChange} />Female
          </label>
          </div>
          <label for="prefercontact"> Select Contact Type
          <select name="prefercontact" value={formData.prefercontact} onChange={dataChange} className='w-44 p-2 rounded-xl ml-2 text-black'>
            <option value="">Contact Through</option>
            <option value="whatsapp">Whatsapp</option>
            <option value="Email">Email</option>
            <option value="PhoneNo">PhoneNO</option>
          </select>
          </label>
          <button type='submit' className='bg-blue-600 px-3 py-2 rounded-md flex justify-center items-center gap-2'>Submit <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16"><path fill="currentColor" d="M12.49 7.14L3.44 2.27c-.76-.41-1.64.3-1.4 1.13l1.24 4.34q.075.27 0 .54l-1.24 4.34c-.24.83.64 1.54 1.4 1.13l9.05-4.87a.98.98 0 0 0 0-1.72Z"/></svg></button>
          
        </form>
      </div>
    </>
  )
}

export default App
