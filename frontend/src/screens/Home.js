import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import FarmerCard from '../components/FarmerCard'
import axios from 'axios'
import style from "./style.css"
import Footer from '../components/Footer'

export default function Home() {


  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);
  const [farmer, setfarmer] = useState([]);

  const loadData = async () => {
    axios.post(`${process.env.REACT_APP_BACKEND}/api/fooddata`, {

    }).then((response) => {
      setfooditem(response.data[0]);
      setfoodcat(response.data[1]);
      setfarmer(response.data[2]);
    })

  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <div>
        <div style={{ "overflowX": "clip" }}>
          <Navbar />
          <Carousel />
          <div className='container'>
            <div>
              {
                foodcat.map((data) => {
                  return (<div className='row sub'>
                    <div key={data._id} className="fs-2 m-3">
                      {data.CategoryName}
                    </div>
                    {
                      fooditem.filter((item) => item.CategoryName === data.CategoryName).map(filteritems => {
                        return (
                          <div key = {filteritems._id} className='col-12 col-md-6 add col-lg-3'>
                            <Cards img={filteritems.img} title={filteritems.ProductName} quantity={filteritems.Quantity} price={filteritems.Price} />
                          </div>
                        )
                      })
                    }
                  </div>
                  )
                })
              }
            </div>
            <div className='container'>

              <div className='row'>
                <p className='fs-2 mb-3'>Connect to your Trustable Farmer</p>
                {
                  farmer.map((farmerdata) => {
                    return (
                      <div key = {farmerdata._id} className='col-12 col-md-6 add col-lg-3'>
                        <FarmerCard title={farmerdata.Name} img={farmerdata.img} Location={farmerdata.Location} sold={farmerdata.products[0].ProductName} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )

}
