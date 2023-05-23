import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup() {
    let navigate = useNavigate();

    const [Credentials, setcredentials] = useState({
        name: "",

    })
    const update = (e) => {
        setcredentials({ ...Credentials, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post(`${process.env.REACT_APP_BACKEND}/api/foodcategory`, {
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
                style={{
                    'backgroundImage': `url('https://cdn.shopify.com/s/files/1/0552/7250/5525/articles/Simone-Thomas-Organic-Farm-Field.jpg?v=1624437722')`,
                    "backgroundRepeat": "no-repeat", "backgroundSize": "cover"
                }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ 'borderRadius': '15px', "opacity": "0.9" }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-3">Create an account</h2>

                                        <form action="POST">

                                            <div className="form-outline mb-2">
                                                <input type="text" name="name" id="form3Example1cg" className="form-control form-control-lg" autoComplete='off' value={Credentials.name} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example1cg">foodcategory</label>
                                            </div>                                            <div className="d-flex justify-content-center">
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
