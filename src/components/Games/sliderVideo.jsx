import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MultipleVideo() { 

 const settings = {
        dashes: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
       
    };
    return(
      <div className=' rounded-xl mx-12'>
        
        <Slider {...settings}>
           
          <div >
            <div><img  src="https://i.ytimg.com/vi_webp/2mPBTTi3PDo/sddefault.webp" alt="img" /></div>
          </div>

          <div >
              <div ><img src="https://i.ytimg.com/vi_webp/RbsH6Yzdoqw/sddefault.webp" alt="img" /></div>
          </div>
          <div >
           <div ><img  src="https://i.ytimg.com/vi_webp/J4nMeH6DaOI/sddefault.webp" alt="img" /></div>
          </div>
          <div >
             <div > <img src="https://i.ytimg.com/vi_webp/88xOfZEKEag/sddefault.webp" alt="img"  /></div>
          </div>
          <div >
              <div ><img src="https://i.ytimg.com/vi_webp/cWJzdDnrH_M/sddefault.webp" alt="img"  /></div>
          </div>
          <div >
              <div ><img src="https://i.ytimg.com/vi_webp/SXvQ1nK4oxk/sddefault.webp" alt="img" /></div>
          </div>
          <div >
              <div ><img src="https://i.ytimg.com/vi_webp/g-WKpapqVU8/sddefault.webp" alt="img" /></div>
          </div>
         
        </Slider>
      </div >
    );
  
}