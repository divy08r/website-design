import React from 'react'
import Home from './screens/Home'
import Signup from './screens/Signup'
import Loginpage from "./screens/Loginpage";
import Foodcategory from "./screens/Foodcategory";
import Fooditem from "./screens/Fooditem";
import Farmerdetails from "./screens/Farmerdetails";
import style from "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Contact from './screens/Contact';

import Farmerpage from './screens/Farmerpage';
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Loginpage/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/contactus' element={<Contact/>}/>
          <Route exact path="/Foodcategory" element={<Foodcategory/>}/>
          <Route exact path="/Fooditem" element={<Fooditem/>}/>
          <Route exact path = "/Farmerdetails" element={<Farmerdetails/>}/>
          
          <Route exact path="/Farmerpage" element = {<Farmerpage/>}/>
        </Routes>
      </div>
    </Router>
  )
}
