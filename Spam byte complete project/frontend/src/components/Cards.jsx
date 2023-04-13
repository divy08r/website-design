import React from 'react'
import {Link} from "react-router-dom";
export default function Cards(props) {
    return (
        <div>
            <div className="card" style={{"width": "18rem","height":"6rem"}}>
                <img className="card-img-top h-32" style={{"objectFit":"cover"}} src={props.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title fs-4 fw-4">{props.title}</h5>
                
                    <p>Price : ₹{props.price} /Kg</p>
                    <img className="h-7 d-inline mr-10" src="https://th.bing.com/th/id/OIP.jBeTu8aaK9oAt_aA7wlpYAHaGq?pid=ImgDet&rs=1"></img>

                    <Link to="https://www.betterhealth.vic.gov.au/health/healthyliving/fruit-and-vegetables" className="btn btn-success mt-2">Read More</Link>
                </div>
            </div>
        </div>
    )
}
