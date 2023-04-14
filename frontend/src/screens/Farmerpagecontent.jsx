import React from 'react'
import style from "./far.css";
export default function Farmerpagecontent(props) {
    return (
        <div>
            <header className='headerclass'>
                <div>
                    <div>
                        <img src="https://farmer.gov.in/imagedefault/title.png" className="portal2" alt="" />
                    </div>
                    <div className="imgg">
                        <img src={props.img} className="img" width="150px" height="200px" />
                        <div>
                            <img src="https://farmer.gov.in/imagedefault/title.png" className="portal" alt="" />
                            <button type="button" className="btn btnn btn-primary" >Get connected</button>

                        </div>
                    </div>
                    <div>
                        <p className='name'><em>{props.name}</em></p>
                    </div>
                </div>
                <div className="con">
                    <div className="loc"><strong>{props.location}</strong></div>
                    <div className="phone"><strong>{props.phone}</strong></div>
                    <div className="Email"><strong>{props.Email}</strong></div>
                </div>
            </header>
            <hr className="line2" />
            <div className="about">
                <div>
                    <h1 className="abouthead texth1" >About</h1>
                    <p className='line1 textp'>We are a group of farmers dedicated to providing high-quality and sustainable products to our community.</p>
                </div>
                <div className="card1" style={{ "width": "15rem", "height": "12.3rem" }}>
                    <img src={props.graph} className="card-img-top1 card-img-top" alt="..." />
                </div>
                <div className="card1 card2" style={{ "width": "15rem", "height": "12.3rem" }}>
                    <img src={props.farmimage1} className="card-img-top1 card-img-top" alt="..." />
                </div>
                <div className="card1" style={{ "width": "15rem", "height": "12.3rem" }}>
                    <img src={props.farmimage2} className="card-img-top1 card-img-top " alt="..." />
                </div>
            </div>
            <div className="farmer-section">
                <h2 className='texth2'>Revenue and Income</h2>
                <div className="section-content">
                    <div className="section-item">
                        <h3>Last Month's Revenue</h3>
                        <p className='textp' >{props.lastmonthincome}</p>
                    </div>
                    <div className="section-item">
                        <h3>Income to Date</h3>
                        <p className='textp'>{props.IncometoDate}</p>
                    </div>
                    <div className="section-item">
                        <h3>Average Monthly Income</h3>
                        <p className='textp'>{props.averagemonthlyincome}</p>
                    </div>
                    <div className="section-item">
                        <h3>Expenses</h3>
                        <p className='textp'>{props.expenses}</p>
                    </div>
                    <div className="section-item">
                        <h3>Profit</h3>
                        <p className='textp'>{props.profit}</p>
                    </div>
                </div>
            </div>
            <hr className="line2" />
            <h1 className='texth1'>Top Products</h1>
            <div className="container2">
                <div className="card9" style={{ "width": "22rem", "height": "12rem" }}>
                    <img src={props.product1} className="card-img-top1 card-img-top" alt="..." />
                </div>
                <div className="card9" style={{ "width": "22rem", "height": "12rem" }}>
                    <img src={props.product2} className="card-img-top1 card-img-top" alt="..." />
                </div>
                <div className="card9" style={{ "width": "22rem", "height": "12rem" }}>
                    <img style={{ 'height': "11rem" }} src="https://cdn.shopify.com/s/files/1/0562/4205/products/BentleySeed-CucumberPoinsett_Bulk_grande.jpg?v=1658428831" className="card-img-top1 card-img-top" alt="..." />
                </div>
                <div className="card9" style={{ "width": "22rem", "height": "12rem" }}>
                    <img style={{ 'height': "11rem" }} src="https://cdn.shopify.com/s/files/1/2174/6775/products/20-pomegranate-fruit-tree-seeds-2_1024x1024.jpg?v=1666765017" className="card-img-top1 card-img-top" alt="..." />

                </div>
                {/* <div className="card" style={{ "width": "22rem", "height": "12rem" }}>
                    <img src="https://groentebroer.nl/product/pisang-mas-907.jpg" className="card-img-top1 card-img-top" alt="..." />
                </div> */}
            </div>
            <hr className='line2'/>
        </div>
    )
}