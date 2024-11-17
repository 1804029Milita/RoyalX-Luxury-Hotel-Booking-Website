import React from "react";
import aboutCSS from './../About/About.module.css';
import aboutImg from './../../assets/reciption.avif'

function About(){
    return(
        <div className={`${aboutCSS.about_wrapper} section`}>
            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="about-img"/>

            </div>
            <div className={aboutCSS.about_content}>
                <small className="section_Heading">The Royal Hotel</small>
                <h2 className="section_Title">Where Elegance Meets</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis esse iure sunt odi</p>
                <div className={aboutCSS.Cards}>
                    <p>260+ <span>Awards Wins</span></p>
                    <p>250k+ <span>Visitors Visit</span></p>
                    <p>50k+ <span>Events</span></p>
                    
                </div>
            </div>
        </div>
    )
}
export default About