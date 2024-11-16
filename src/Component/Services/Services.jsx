import React from "react";
import ServicesCSS from './../Services/Services.module.css'

function Services(){
    return(
        <div className={`${ServicesCSS.Services_wrapper} section`}>
            <small className="section_Heading">Facilites</small>
            <h2 className="section_Title">Our Best <span>Services</span></h2>
            <div className={ServicesCSS.Services_cards}>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-hotel-line"> </i>
                    <h3>Basic Facilities</h3>
                    <p>- Reception /Front Desk</p>
                    <p>- Room Services</p>
                    <p>- House Keeping</p>
                    <p>- Wifi & Parking</p>
                </div>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-hotel-bed-line"> </i>
                    <h3>Room Aminities</h3>
                    <p>- Comfortable</p>
                    <p>- Bed Room and Pool</p>
                    <p>- Tv and AC</p>
                    <p>- Bar</p>
                </div>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-goblet-line"> </i>
                    <h3>Dinning Options</h3>
                    <p>- Resturant Cafe</p>
                    <p>- Bar & Lounge</p>
                    <p>- Cafe and Canteen</p>
                    <p>- Room Services</p>
                </div>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-restaurant-line"> </i>
                    <h3>Special Features</h3>
                    <p>- Custom Room</p>
                    <p>- Cricket Ground</p>
                    <p>- Gym</p>
                    <p>- Room Services</p>
                </div>
            </div>
        </div>
    )

}
export default Services