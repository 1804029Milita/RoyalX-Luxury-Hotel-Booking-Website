import React from "react";
import headerCSS from './../Header/Header.module.css'
import {Swiper , SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Autoplay, Parallax } from "swiper/modules";



function Header(){
    return(
        <div className={headerCSS.header_wrapper}>
            <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            className={headerCSS.swiper}
            autoplay={{
                delay:2500,
            }}
            parallax={true}
            speed={1000}
            modules={[Autoplay , Parallax]}
            >
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide1}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200">Luxury Hotel & Restaurant</small>
                            <h2 data-swiper-parallax="-250">Enjoy Your Dream Time with <br></br>
                            Luxury Experience</h2>
                            <p data-swiper-parallax="-300">Call Now <span>983034094</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide2}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200">Luxury Hotel & Restaurant</small>
                            <h2 data-swiper-parallax="-200">Enjoy Your Dream Time with <br></br>
                            Luxury Experience</h2>
                            <p data-swiper-parallax="-200">Call Now <span>983034094</span></p>
                        </div>
                    </div>
                </SwiperSlide>
            <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide3}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200">Luxury Hotel & Restaurant</small>
                            <h2 data-swiper-parallax="-200">Enjoy Your Dream Time with <br></br>
                            Luxury Experience</h2>
                            <p data-swiper-parallax="-200">Call Now <span>983034094</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
        </div>
    )

 }
 export default Header