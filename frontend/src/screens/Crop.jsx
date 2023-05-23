import React from 'react'
import Navbar from '../components/Navbar'
export default function Crop() {
  return (
    <div style={{"height":"100vh"}}>
      <Navbar/>
      <iframe src="https://crop-predictor-x7ki.onrender.com/" height="100%" width="100%"></iframe>
    </div>
  )
}
