import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cartcompo from "./Cartcompo";
import style from "./style.css"
export default function Cart() {

    const [items, setItems] = useState([])
    const [toggle, setToggle] = useState(0)
    const navigate = useNavigate()

    async function callFunc() {
        const token = localStorage.getItem('authtoken')
        let data = await fetch(`${process.env.REACT_APP_BACKEND}/api/displayCart`, {
            method: 'post',
            body: JSON.stringify({ token }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        data = await data.json()
        setItems(data)
    }

    useEffect(() => { callFunc() }, [toggle])

    async function deleteItem(item_obj) {
        const token = localStorage.getItem('authtoken')
        let d = await fetch(`${process.env.REACT_APP_BACKEND}/api/deleteFromCart`, {
            method: 'post',
            body: JSON.stringify({ props: item_obj, token }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        d = await d.json()
        console.log(d)
        // alert(d.message)
        setToggle(!toggle)
    }

    return (
        // <div style={{display:'flex',flexDirection:'column'}}>
        //     {items.map(item=>(
        //         <div key={item}>
        //             <img src={item.img} style={{width:'200px',height:'200px'}}></img>
        //             <div>{item.title}</div>
        //             <div>{item.price}</div>
        //             <input type='button' onClick={()=>deleteItem(item)} value='delete'></input>
        //         </div>
        //     ))}
        //     <input type='button' onClick={()=>navigate('../')} value='return'></input>
        // </div>
        <section className="h-100" style={{ "backgroundColor": "#eee"}}>
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-bold fs-3  mb-0 text-black">Shopping Cart</h3>
                            
                        </div>

                        {
                            items.map((item) => {
                                return (
                                    <div key={item}>
                                        <Cartcompo img={item.img} title={item.title} price={item.price}
                                        />
                                        <input style={{ "position": "relative", "left": "920px", "bottom": "132px", "backgroundColor": "red", "color": "white" }} type='button' className='abs btn btn-danger' onClick={() => deleteItem(item)} value='Delete'></input>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Link to="../" className="btn btn-success mt-2 ml-24"> Return back</Link>
            </div>
            {/* <input type='button' onClick={()=>navigate('../')} value='return'></input> */}
        </section>
    )
}


