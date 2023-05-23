import React from 'react'
import { useState } from 'react';
export default function Cartcomponent(props) {

    const [quantity, setquantity] = useState(1);

    function incquantity(){
        setquantity(quantity+1);
    }
    
    
    function decquantity(){
        if(quantity>0)
        setquantity(quantity-1);
    }
    let netprice = props.price*quantity;
    return (
        <div>
            <div style={{"border":"2px solid black"}} className="card rounded-3 mb-4">
                <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img style={{"border":"2px solid black"}}
                                src={props.img}
                                className="img-fluid rounded-3" alt="Fruit" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="fs-3 lead fw-normal mb-2">{props.title}</p>
                            {/* <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p> */}
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2"
                                onClick={decquantity}>
                                <i className="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="0" name="quantity" value={quantity} type="number"
                                className="form-control form-control-sm" />

                            <button className="btn btn-link px-2"
                                onClick={incquantity}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 mr-32">
                            <h2 className="mb-0 fs-5"> Price :  <span className='fw-bold'>{netprice} Rs</span></h2>
                        </div>
                        {/* <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <input type="button" onClick={()=>deleteItem(item)} value='delete' className="text-danger" ><i className="fas fa-trash fa-lg"></i></input>
                        </div> */}

                        {/* <input type="button" className='col-md-1 col-lg-1 col-xl-1 text-end'/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
