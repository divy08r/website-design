import React from 'react'
import style from './Cont.css'
export default function Contactcontent() {
    
        function handleclick(){
            alert("We Will Contact you Shortly");
        }
  return (
    <div className="start">
    <div className="container1">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">NIT JAMSHEDPUR</div>
          <div className="text-two">ADITYAPUR,8403014</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+91-9031743720</div>
          <div className="text-two">+91-7903303976</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">spambytes@gmail.com</div>
          <div className="text-two">info.spambytes@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any Queries,related to the product.Reach out to us.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
          
        </div>
        <div className="button1">
          <input type="button" onClick={handleclick} value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
  )
}