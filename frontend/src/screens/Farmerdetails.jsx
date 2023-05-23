import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup() {
    let navigate = useNavigate();
    const [Credentials, setcredentials] = useState({
        name: "",
        location: "",
        phone:"",
        email:"",
        img: "",
        farm1img:"",
        farm2img:"",
        graph:"",
        incomeandrevenue:"",
        lastmonthrevenue:"",
        averagemonthlyrevenue:"",
        profit:"",
        expenses:"",
        incometodate:"",
        topproduct1:"",
        topproduct2:"",
        topproduct3:"",
        topproduct4:"",
        topproduct1img:"",
        topproduct2img:"",
        topproduct3img:"",
        topproduct4img:""
    })
    const update = (e) => {
        setcredentials({ ...Credentials, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post(`${process.env.REACT_APP_BACKEND}/api/farmerdetails`, {
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
                                                <input type="text" name="name" id="form3Example1cg" className="form-control form-control-lg" autoComplete='off' value={Credentials.name} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example1cg">Name</label>
                                            </div>

                                            <div className="form-outline mb-2">
                                                <input type="text" name="email" id="form3Example3cg" className="form-control form-control-lg" autoComplete='off' value={Credentials.email}   onChange={update} />
                                                <label className="form-label" htmlFor="form3Example3cg">email</label>
                                            </div>

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="location" value={Credentials.location} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">location</label>
                                            </div>
                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="img" value={Credentials.img} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">img</label>
                                            </div>          

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="phone" value={Credentials.phone} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">phone</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="farm1img" value={Credentials.farm1img} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">farm1img</label>
                                            </div> 


                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="farm2img" value={Credentials.farm2img} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">farm2img</label>
                                            </div> 
                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="graph" value={Credentials.graph} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">graph</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="incomeandrevenue" value={Credentials.incomeandrevenue} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">incomeandrevenue</label>
                                            </div> 
                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="lastmonthrevenue" value={Credentials.lastmonthrevenue} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">lastmonthrevenue</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="profit" value={Credentials.profit} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">profit</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="expenses" value={Credentials.expenses} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">expenses</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="incometodate" value={Credentials.incometodate} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">incometodate</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="lastmonthincome" value={Credentials.lastmonthincome} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">lastmonthincome</label>
                                            </div> 


                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="topproduct1" value={Credentials.topproduct1} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">topproduct1</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="topproduct2" value={Credentials.topproduct2} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">topproduct2</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="topproduct3" value={Credentials.topproduct3} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">topproduct3</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="topproduct4" value={Credentials.topproduct4} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">topproduct4</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="topproduct1img" value={Credentials.topproduct1img} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">topproduct1img</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="topproduct2img" value={Credentials.topproduct2img} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">topproduct2img</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="topproduct3img" value={Credentials.topproduct3img} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">topproduct3img</label>
                                            </div> 

                                            <div className="form-outline mb-2">
                                                <input type="text" id="form3Example4cg" className="form-control form-control-lg" autoComplete='off' name="topproduct4img" value={Credentials.topproduct4img} onChange={update} />
                                                <label className="form-label" htmlFor="form3Example4cg">topproduct4img</label>
                                            </div> 

                                            <div className="d-flex justify-content-center">
                                                <button onClick={handleSubmit}
                                            
                                                type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body " >Register</button>
                                            </div>

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

                                           