import React from "react";
import footerCSS from './../footer/Footer.module.css'

function Footer(){
    return(
        <footer className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                    <h2>RoyalX</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, molestiae.</p>

                </div>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Quick Links</h3>
                <p>About</p>
                <p>Contact Us</p>
                <p>Rooms</p>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>City Branches</h3>
                <p>Dhaka</p>
                <p>Rangpur</p>
                <p>Chittagong</p>
                <p>Gazipur</p>
                <p>Comilla</p>
            </div>
            <div className={footerCSS.FooterLinks}>
            <h3>Contact</h3>
                <p>Address : <span>360 Street-Mirpur,Dhaka, Bangladesh</span></p>
                <p>Email : <span>XYZ@gmail.com</span></p>
                <p>Phone : <span>+0239023893</span></p>
               
            </div>
        </footer>
    )
}
export default Footer