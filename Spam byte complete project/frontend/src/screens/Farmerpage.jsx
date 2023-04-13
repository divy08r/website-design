import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar"
import Farmerpagecontent from './Farmerpagecontent'
import Footer from "../components/Footer";
import axios from 'axios'
export default function Farmerpage() {


    const [farmer, setfarmer] = useState([]);

    const loadData = async () => {
        axios.post("http://localhost:5001/api/fooddata", {

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
                        IncometoDate= {farmerdata.IncometoDate} lastmonthincome={farmerdata.Lastmonthincome} key={farmerdata.Name} name={farmerdata.Name}  location = {farmerdata.Location} phone={farmerdata.phone}  Email = {farmerdata.Email} farmimage1={farmerdata.farmimage1} farmimage2 = {farmerdata.farmimage2}
                        profit = {farmerdata.Profit} expenses={farmerdata.Expenses}
                        averagemonthlyincome = {farmerdata.AveragemonthlyIncome}
                        product1 = {farmerdata.products[0].img} product2 = {farmerdata.products[1].img}/>
                )
            })}
            <Footer/>
        </div >
    )
}
