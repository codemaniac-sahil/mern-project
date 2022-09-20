import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()
    useEffect(()=>{
        const auth=localStorage.getItem("users")
        if (auth){
            navigate('/')
        }
    },[])




    const collectData=async()=>{
        let result=await fetch("http://localhost:5000/register",{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result=await result.json()
        console.log(result)
        localStorage.setItem("users",JSON.stringify(result))
        navigate('/')
    }


  return (
    <>
    <div className='signup-header'>
        <h1>Register</h1>
        <div className='signup-form'>
            <input type='text' placeholder='Enter Your Name'
            value={name} onChange={(e)=>setName(e.target.value)}
            />
            <input type='text' placeholder='Enter Your Email'
            value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <input type='password' placeholder='Enter Password'
            value={password} onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={collectData}>Signup</button>
        </div>
    </div>
    </>
  )
}
