import React from "react";
import roomCSS from './../Room/Room.module.css'

function Room(){
    return(
        <div className={`${roomCSS.Room_container} section`}>
            <small className="section_Heading">Luxury Suites</small>
            <h2 className="section_Titles">Our Best<span>Rooms</span></h2>

            <div className={roomCSS.cards}>
                <div className={roomCSS.card_container}>
                    <div className={roomCSS.card}>
                        <div className={`${roomCSS.Card_front} ${roomCSS.Card_front1}`}>
                            <button>Junior Suite</button>
                        </div>
                        <div className={roomCSS.Card_Back}>
                            <div className={roomCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomCSS.Card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Clening</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wife & Parking</p>
                            </div>
                            <div className={roomCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomCSS.card_container}>
                    <div className={roomCSS.card}>
                        <div className={`${roomCSS.Card_front} ${roomCSS.Card_front1}`}>
                            <button>Junior Suite</button>
                        </div>
                        <div className={roomCSS.Card_Back}>
                            <div className={roomCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomCSS.Card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Clening</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wife & Parking</p>
                            </div>
                            <div className={roomCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomCSS.card_container}>
                    <div className={roomCSS.card}>
                        <div className={`${roomCSS.Card_front} ${roomCSS.Card_front1}`}>
                            <button>Junior Suite</button>
                        </div>
                        <div className={roomCSS.Card_Back}>
                            <div className={roomCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomCSS.Card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Clening</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wife & Parking</p>
                            </div>
                            <div className={roomCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Room