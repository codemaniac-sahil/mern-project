import React, { useState } from "react";
 
const AddProduct=()=>{
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
   
    const addproduct=async ()=>{
        
        const userId=JSON.parse( localStorage.getItem('users'))._id
        console.log(userId)
        let result=await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "content-type":"application/json"
            }
        })
        result=await result.json()
        console.log(result)

    }
    return(
        <>
        <div className="addproduct-header">
            <div className="heading">

            <h1>Add Product</h1>
            </div>
            <div className="addproduct-form">

            <input type="text"placeholder="Enter Product Name" 
             value={name} onChange={(e)=>setName(e.target.value)}
            />
            <input type="text"placeholder="Enter Product Price"
            value={price} onChange={(e)=>setPrice(e.target.value)}
            />
            <input type="text"placeholder="Enter Product Category"
            value={category} onChange={(e)=>setCategory(e.target.value)}
            />
            <input type="text"placeholder="Enter Product Company"
            value={company} onChange={(e)=>setCompany(e.target.value)}
            />
            <button onClick={addproduct}>Add</button>
            </div>


        </div>
        </>
    )
}
export default AddProduct