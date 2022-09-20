import React from "react";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()
useEffect(()=>{
        const auth=localStorage.getItem('users')
         if (auth){
             
             navigate("/")
}
},[])
    const handleLogin=async ()=>{

        let result=await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'content-type':"application/json"
            }
        })
        result=await result.json()
        console.log(result)
        if(result.name){
            localStorage.setItem('users',JSON.stringify(result))
            navigate('/')
        }else{
            alert("please enter the correct details")
        }
    }
    return(
        <>
       <div className="login">
        <h1>Login</h1>
        <div className="login-form">
            <input type='text' placeholder="Enter Email" value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder="Enter Password" value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>

        </div>
        </div> 
        </>
    )
}
export default Login