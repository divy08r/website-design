import React from 'react'
import { Link } from "react-router-dom";

async function addToCart(props){
    const token=localStorage.getItem('authtoken')
    console.log(token)
    let message=await fetch(`${process.env.REACT_APP_BACKEND}/api/addToCart`,{
        method:'post',
        body:JSON.stringify({props,token}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    message=await message.json()
    alert(message.message);
}

export default function Cards(props) {
    return (
        <div>
            <div className="card" style={{ "width": "18rem", "height": "6rem" }}>
                <img className="card-img-top h-32" style={{ "objectFit": "cover", "borderTop": "2px solid black", "borderLeft": "2px solid black", "borderRight": "2px solid black" }} src={props.img} alt="Card image cap" />
                <div className="card-body" style={{ "borderBottom": "2px solid black", "borderRight": "2px solid black", "borderLeft": "2px solid black" }}>
                    <h5 className="card-title fs-4 fw-4">{props.title}</h5>
                    <p>Price : ₹{props.price} /Kg</p>
                    {/*<Link to="k" className='btn btn-success mt-2 mr-8'>Add to cart</Link>*/}
                    <input className='btn btn-success mt-2 mr-8' style={{backgroundColor:"#198754"}} type='button' onClick={()=>addToCart(props)} value='Add to cart'></input>
                    <Link to="https://www.betterhealth.vic.gov.au/health/healthyliving/fruit-and-vegetables" className="btn btn-success mt-2">Read More</Link>
                </div>
            </div>
        </div>
    )
}
