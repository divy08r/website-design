import React from 'react'
import Home from './screens/Home'
import Signup from './screens/Signup'
import Loginpage from "./screens/Loginpage";
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
          
          <Route exact path="/Farmerpage" element = {<Farmerpage/>}/>
        </Routes>
      </div>
    </Router>
  )
}
