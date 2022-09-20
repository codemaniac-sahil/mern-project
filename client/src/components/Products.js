import React, { useEffect ,useState} from 'react'

function Products() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getproducts();
    },[]);
    const getproducts=async()=>{
        let result=await fetch('http://localhost:5000/products')
        result=await result.json()
        setProducts(result)
    }
    console.log(products)
  return (
      <div className='product-list'>
        <h1>Product list</h1>
        <table border={2}>
            <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
            </tr>
        {
            products.map((item,index)=>
            
                    <tr>
                        <td>{index} </td>
                        <td>{item.name} </td>
                        <td>{item.price} </td>
                        <td>{item.category} </td>

                    </tr>


                
            )
        }
    </table>
    </div>
  )
}

export default Products