import React from 'react'

export default function Footer() {
    return (
        <div style={{"position":"relative","bottom":"-200px"}}>

        <div className="container my-5 end-foot" id="footerbox">
                <footer className="bg-dark text-center text-white">
                    <div className="container p-4 pb-0">
                        <section className="mb-4">
                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.google,com" role="button"><i className="fab fa-facebook-f"></i></a>
                    
                            <a className="btn btn-outline-light btn-floating m-1" href="public/soon.html" role="button"><i className="fab fa-twitter"></i></a>
                    
                            <a className="btn btn-outline-light btn-floating m-1" href="public/soon.html" role="button"><i className="fab fa-google"></i></a>
                    
                            <a className="btn btn-outline-light btn-floating m-1" href="public/soon.html" role="button"><i className="fab fa-instagram"></i></a>
                    
                            <a className="btn btn-outline-light btn-floating m-1" href="public/soon.html" role="button"><i className="fab fa-linkedin-in"></i></a>
                    
                            <a className="btn btn-outline-light btn-floating m-1" href="public/soon.html" role="button"><i className="fab fa-github"></i></a>
                        </section>
                    </div>
            
                    <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}> © 2023 Copyright --
                        <a className="text-white" href="https://mdbootstrap.com/">Spam Bytes</a>
                    </div>
                </footer>
            </div>
               </div>
    )
}
