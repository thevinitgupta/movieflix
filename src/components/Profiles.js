import React from 'react';
import Profile from './Profile';
import "../css/Profiles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Switch } from 'react-router-dom';


function Profiles({profilesDetails,type}) {
    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
          adaptiveHeight: true,
          cssEase: "ease-in"
      };
    return (
        
        <div className="cast">
        <Slider {...settings}>
        {profilesDetails?.map((profileData,index)=>{
            return (
              <Switch key={index}>
              <div ><Profile  profileDetails={profileData} type={type} /></div>
              </Switch>
              )
        })}
        </Slider>
        </div>
        
    )
}

export default Profiles;
