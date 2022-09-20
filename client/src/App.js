
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login'
import AddProduct from './components/AddProduct';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
      
      <Navbar/>
     <Routes>
    <Route element={<PrivateComponent/>}>
      <Route path='/' element={<Products/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/update' element={<h1>Update Product components</h1>}/>
      <Route path='/logout' element={<h1> Logout components</h1>}/>
      <Route path='/profile' element={<h1> Profile components</h1>}/>
     
    </Route>
    <Route path='/signup' element={<Signup/>}/>  
    <Route path='/login' element={<Login/>}/>  

      </Routes>
      </BrowserRouter>
     
      </>
    </div>
  );
}

export default App;
