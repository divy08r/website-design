import React from 'react'
import Home from './screens/Home'
import Signup from './screens/Signup'
import Loginpage from "./screens/Loginpage";
import style from "./App.css"
import Foodcategory from "./screens/Foodcategory";
import Fooditem from "./screens/Fooditem";
import Farmerdetails from "./screens/Farmerdetails"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Contact from './screens/Contact';
import Crop from "./screens/Crop";
import Farmerpage from './screens/Farmerpage';
import MyCart from './screens/MyCart';
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Loginpage/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/contactus' element={<Contact/>}/>
          
          <Route exact path="/Farmerpage" element = {<Farmerpage/>}/>
          <Route exact path="/Foodcategory" element={<Foodcategory/>}/>
          <Route exact path="/Fooditem" element={<Fooditem/>}/>
          <Route exact path = "/Farmerdetails" element={<Farmerdetails/>}/>
          <Route exact path='/MyCart' element={<MyCart></MyCart>}></Route>
          <Route exact path= "/Cropprediction" element={<Crop/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}
