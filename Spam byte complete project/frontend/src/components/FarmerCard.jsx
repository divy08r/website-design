import React from 'react'
import { Link } from 'react-router-dom'
export default function FarmerCard(props) {

    function handleclick(){
        console.log("i got clicked");

    }
    return (
        <div>
            <div className="card" style={{"width": "18rem","height":"6rem"}}>
                <img className="card-img-top h-32" style={{"objectFit":"cover"}} src={props.img} alt="Farmer image" />
                <div className="card-body">
                    <h5 className="card-title fs-4 fw-4">{props.title}</h5>
                    <p>{props.Location}</p>
                    <p>Major Product : {props.sold}</p>

                    <Link to="/farmerpage" className="btn btn-success mt-2">Get in Touch</Link>
                </div>
            </div>
        </div>
    )
}