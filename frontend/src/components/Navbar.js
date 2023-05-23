import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("authtoken");
    navigate("/login");
  }
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {/* <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> */}
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="block h-8 w-auto lg:hidden rounded-full h-10" src="https://i.pinimg.com/736x/8f/0e/88/8f0e8808d45745a3e0e7fefc21b452dd.jpg" alt="Your Company" />
                <img className="hidden h-8 w-auto lg:block rounded-full h-10" src="https://i.pinimg.com/736x/8f/0e/88/8f0e8808d45745a3e0e7fefc21b452dd.jpg" alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

                  <Link to="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>

                  <Link to="https://divy08r.github.io/greendel/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Editorial</Link>

                  <Link to="/Cropprediction" className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Crop Prediction</Link>
                  <Link to="/contactus" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact us</Link>

                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button> */}


              {(!localStorage.getItem("authtoken")) ?
                <div className="relative ml-3">
                  <div >
                    <Link to="/login">
                      <button type="button" className="btn btn-success mx-3 bg-white text-black">Login</button>
                    </Link>
                  </div>
                </div>
                :
                <>
                  <div className="relative ml-3">
                    <div >
                      <button type="button" className="btn btn-success mx-3 bg-white text-black" onClick={() => navigate('/MyCart')}>My Cart
                        </button>
                    </div>
                  </div>
                  <div className="relative ml-3">
                    <div >
                      <button onClick={handlelogout} type="button" className="btn btn-success mx-3 bg-white text-black">Logout</button>
                    </div>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
        {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHyMme-eNnP-VhO9CdlqctC6bMTcKIFMoBg&usqp=CAU */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>

            <Link to="https://divy08r.github.io/greendel/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Editorial</Link>
            <Link to="." className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Crop Prediction</Link>
            <Link to="/contactus" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact Us</Link>
          </div>
        </div>
      </nav>




      {/* <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <a className="navbar-brand  text-white" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active  text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white " href="#">About us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle  text-white " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#"></a></li>
            <li><a className="dropdown-item" href="#">Vegetables</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
          </ul>
        </li>
      </ul>
      <button type="button" className="btn btn-outline-success bg-white mx-2 rbutton" data-mdb-ripple-color="dark">Sign Up</button>     
      <button type="button" className="btn btn-outline-success bg-white" data-mdb-ripple-color="dark">Login</button>
    </div>
  </div>
</nav> */}
    </div>
  )
}
