import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup() {
    let navigate = useNavigate();
    let selected = "";
    const handleselect = ()=>{
        selected = document.querySelector('input[name="usertype"]:checked');
    }
    const [Credentials, setcredentials] = useState({
        name: "",
        password: "",
        email: "",
        usertype: selected.value==="Coustomer"?"Coustomer":"Merchant"
    })
    const update = (e) => {
        setcredentials({ ...Credentials, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post(`${process.env.REACT_APP_BACKEND}/api/createuser`, {
                Credentials
            })
            navigate("/login");
        }
        catch (err) {
            console.log(err)
        }
    }
    return (

        <>
            <section className="vh-100 bg-image"
                style={{ 'backgroundImage': `url('https://cdn.shopify.com/s/files/1/0552/7250/5525/articles/Simone-Thomas-Organic-Farm-Field.jpg?v=1624437722')`,
                "backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ 'borderRadius': '15px',"opacity":"0.9" }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-3">Create an account</h2>

                                        <form action="POST">

                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                                <input type="text" name="name" id="form3Example1cg" className="form-control form-control-lg" autoComplete='off' value={Credentials.name} onChange={update} />
                                            </div>

                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                                <input type="email" name="email" id="form3Example3cg" className="form-control form-control-lg" autoComplete='off' value={Credentials.email}   onChange={update} />
                                            </div>

                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="password" value={Credentials.password} onChange={update} />
                                            </div>

                                            <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input className="form-check-input" type="radio" name="usertype" id="Coustomer" 
                                                        value="Coustomer" onClick={handleselect}/>
                                                    <label className="form-check-label" htmlFor="coustomer">Customer

                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input className="form-check-input" type="radio" name="usertype" id="merchant"
                                                        value="Merchant" onClick={handleselect} />
                                                    <label className="form-check-label" htmlFor="merchant">Merchant</label>
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-3">
                                                <input className="form-check-input me-2" type="checkbox" autoComplete='off'   value="" id="form2Example3cg" />
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button onClick={handleSubmit}
                                            
                                                type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body " >Register</button>
                                            </div>

                                            <p className="text-center text-muted mt-3 mb-0">Have already an account? <Link to="/login"
                                                className="fw-bold text-body"><u>Login here</u></Link></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
