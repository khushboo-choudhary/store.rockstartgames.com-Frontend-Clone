import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MultipleItems() { 

 const settings = {
        dashes: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
       
    };
    return(
      <div className=' rounded-xl mx-12 '>
        
        <Slider {...settings}>
            {/* <div className='flex rounded-xl pb-8 mx-2'>  */}
          <div >
            <div><img  src="https://images.ctfassets.net/wn7ipiv9ue5v/48OfyE2WJhW9OrYcbCfyFj/ce28574b00c46c592fd9eb4609936d79/RDR2_Screenshot_040.jpg?w=768&h=&fm=webp&q=" alt="img" /></div>
          </div>

          <div >
              <div ><img className=' rounded-xl pb-8 mx-2' src="https://images.ctfassets.net/wn7ipiv9ue5v/5vJeylj6xYSXhdIvxY0Ue8/087df749db2c1529e7f5a89e9e857f86/RDR2_Screenshot_026.jpg?w=768&h=&fm=webp&q=" alt="img" /></div>
          </div>
          <div >
           <div ><img  src="https://images.ctfassets.net/wn7ipiv9ue5v/3OpIdGs1Y444igoLVABiRx/9bbdf796020fd50a4d79da55f2d4657e/RDR2_Screenshot_025.jpg?w=768&h=&fm=webp&q=" alt="img" /></div>
          </div>
          <div >
             <div > <img src="https://images.ctfassets.net/wn7ipiv9ue5v/4aMKMYMwXLw68HIppk76op/abf96356278e4aea6c78cfda87dd5240/RDR2_Screenshot_024.jpg?w=768&h=&fm=webp&q=" alt="img"  /></div>
          </div>
          <div >
              <div ><img src="https://images.ctfassets.net/wn7ipiv9ue5v/2Q3ExfoHDJLMJWYMWo1rkf/71837c03320c73fb38b466077ec7ab2c/RDR2_Screenshot_023.jpg?w=768&h=&fm=webp&q=" alt="img"  /></div>
          </div>
          <div >
              <div ><img src="https://images.ctfassets.net/wn7ipiv9ue5v/4c41lXEzQ57OGnrzbOZjVb/5a0d3bf9594f8f31db4da0793a60e5ea/RDR2_Screenshot_022.jpg?w=768&h=&fm=webp&q=" alt="img" /></div>
          </div>
          <div >
              <div ><img src="https://images.ctfassets.net/wn7ipiv9ue5v/2FN7tMQaexwVDoJtutqVf0/a3f930632a080d318ae94027a605f272/RDR2_Screenshot_021.jpg?w=768&h=&fm=webp&q=" alt="img" /></div>
          </div>
          <div >
              <div ><img src="https://images.ctfassets.net/wn7ipiv9ue5v/6AQizrQEMNHhvcby5fO9ot/fcb4ff473e30d214625c7050df2fb9c2/RDR2_Screenshot_020.jpg?w=768&h=&fm=webp&q=" alt="img" /></div>
          </div>
          <div >
              <div ><img src="https://images.ctfassets.net/wn7ipiv9ue5v/2fxddLRutcu6OEk448yy4P/8390baf10d1dc8ff41e96cac8a8c774e/RDR2_Screenshot_019.jpg?w=768&h=&fm=webp&q=" alt="img" /></div>
          </div>
          <div >
              <div ><img src="https://images.ctfassets.net/wn7ipiv9ue5v/6esN8JyH1KwUtWs7Kddi4Y/2aebe1fe2d42b30765c60b3b12e6e294/RDR2_Screenshot_018.jpg?w=768&h=&fm=webp&q=" alt="img" /></div>
          </div>
          <div >
              <div ><img src="https://images.ctfassets.net/wn7ipiv9ue5v/UFLfRgCkh616KAGF2tmSU/c0558d43d20cf7d1ee5042f900a5a124/RDR2_Screenshot_017.jpg?w=768&h=&fm=webp&q=" alt="img" /></div>
          </div>
          {/* </div> */}
        </Slider>
      </div >
    );
  
}