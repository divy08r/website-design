import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar"
import Farmerpagecontent from './Farmerpagecontent'
import Footer from "../components/Footer";
import axios from 'axios'
export default function Farmerpage() {


    const [farmer, setfarmer] = useState([]);

    const loadData = async () => {
        await axios.post(`${process.env.REACT_APP_BACKEND}/api/fooddata`, {

        }).then((response) => {
            setfarmer(response.data[2]);
        })
    }
    useEffect(() => {
        loadData()
    }, [])



    return (
        <div>
            <Navbar />
            {
                farmer.map((farmerdata) => {
                    return (
                        <Farmerpagecontent graph = {farmerdata.graph} img={farmerdata.img}
                        IncometoDate= {farmerdata.incometodate} lastmonthincome={farmerdata.lastmonthincome} key={farmerdata.name} Name={farmerdata.name}  location = {farmerdata.location} phone={farmerdata.phone}  email = {farmerdata.email} farmimage1={farmerdata.farm1img} farmimage2 = {farmerdata.farm2img}
                        profit = {farmerdata.profit} expenses={farmerdata.expenses}
                        averagemonthlyincome = {farmerdata.averagemonthlyincome}
                        topproduct1img = {farmerdata.topproduct1img} topproduct2img = {farmerdata.topproduct2img}
                        topproduct3img={farmerdata.topproduct3img} topproduct4img={farmerdata.topproduct4img}
                        />
                )
            })}
            <Footer/>
        </div >
    )
}
