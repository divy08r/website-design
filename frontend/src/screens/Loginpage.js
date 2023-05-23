import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function Signup() {
    let navigate = useNavigate();

    const [info,setinfo] = useState({
        email:"",
        password:""
    })
    const handlechange = (e)=>{
        setinfo({...info,[e.target.name]:e.target.value});
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
       await axios.post(`${process.env.REACT_APP_BACKEND}/api/login`,{
            info
          }).then((response)=>{
            if(response.data.success === "true")
            {
                  localStorage.setItem("authtoken",response.data.authtoken);
                 navigate("/");
            }
            else{
              alert("incorrect email or password");
            }
          })
    }
    return (
        <>
            <section className="vh-100 bg-image"
                
                style={{ 'backgroundImage': `url('https://img3.stockfresh.com/files/m/massonforstock/m/73/948756_stock-photo-farmer-hand-keep-green-wheat-spikelet.jpg')`,
                "backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ 'borderRadius': '15px',"opacity":"0.9"}}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-3">Login</h2>

                                        <form>
                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                                <input type="email" autoComplete='off' id="form3Example3cg" className="form-control form-control-lg" onChange={handlechange} name="email" value={info.email}/>
                                            </div>

                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" name="password" value={info.password} onChange={handlechange}/>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" onClick={handleSubmit}
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                            </div>

                                            <p className="text-center text-muted mt-3 mb-0">New User? <Link to="/signup"
                                                className="fw-bold text-body"><u>Sign in here</u></Link></p>
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
