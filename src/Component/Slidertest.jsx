import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from '../assets/arrow-slider.png';
import sliderarrow1 from '../assets/sliderarrow1.png';
import sliderarrow2 from '../assets/blackarrow.png';
import test1 from '../assets/imgtest.png';
import test2 from '../assets/social (1).png';
import test3 from '../assets/social (2).png';
import star from '../assets/star.png';
import qoute from '../assets/qoute.png';


const SliderTestimonial = () => {
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 450 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 1,
    },
  };

  const CustomSlider = ({ carouselState }) => {
    // ... your CustomSlider component content
  };

 const items = [
      {
        imageautthor:test1,
        Nametest:"Rolando Hintz",
      
        destination: "District Division Orchestrator",
     
        star: '../assets/star.png', // Add the link property
       
        paragraph: 'Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. '
      },     {
        imageautthor:test2,
        Nametest:"Rolando Hintz",
      
        destination: "District Division Orchestrator",
     
        star: '../assets/star.png', // Add the link property
       
        paragraph: 'Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. '
      },
      {
        imageautthor:test3,
        Nametest:"Rolando Hintz",
      
        destination: "District Division Orchestrator",
     
        star: '../assets/star.png', // Add the link property
       
        paragraph: 'Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. '
      },
      {
        imageautthor:test3,
        Nametest:"Rolando Hintz",
      
        destination: "District Division Orchestrator",
     
        star: '../assets/star.png', // Add the link property
       
        paragraph: 'Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. '
      },
    ];

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <div>
      <Carousel
        ssr={false}
        ref={carouselRef}
        partialVisible={false}
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-0}
        // customButtonGroup={<CustomSlider />}
        beforeChange={(nextSlide) => {
          // ... your beforeChange logic
        }}
      >
        {items?.map((item,index) => {
             let stepClass = ""; // Initialize an empty string for the class

             // Add conditions based on the index to determine the class
             if (index % 3 === 0) {
               // If index is a multiple of 3 (0, 3, 6, ...)
               stepClass = "orange-bg";
             } else if (index % 3 === 1) {
               // If index is a multiple of 3 + 1 (1, 4, 7, ...)
               stepClass = "yellow-bg";
             } else {
               // If index is a multiple of 3 + 2 (2, 5, 8, ...)
               stepClass = "sky-bg";
             }
          return (
          
          <div className={`testimonial ${stepClass}`} key={index}>
                <div class="image-container-text" draggable={false}>
				<div className="row">
                
              
<div className="col-md-12">
    <div className="cam-outer ">
<div className="imgae-autoer">

<img src={item.imageautthor} alt="quote-up" className="" />
         </div>
         <div className="infor-test">
<div className="name-des">
    <h3>{item.Nametest}</h3>
<span>{item.destination}</span>
</div>
<div className="bloginfo">
    <p>{item.paragraph}</p>
    <div className="start-img">
<img src={star}></img>
</div>
</div>
</div>
<div class="quoter">
<img src={qoute}></img>
</div>


</div>
</div>
                  
				  </div>
                  {/* <img src="assets/img/home/quote-up.svg" alt="quote-up" className="quotup_icons" /> */}
                  
                  {/* <img src="assets/img/home/quote-down.svg" alt="quote-up" className="quotdown_icons" /> */}

                </div>

              </div>
          );
        })}
      </Carousel>

      <div className="custom-button-group">
        <button onClick={handlePrev} class="pre-sli" aria-label="Previous Slide"><img src={sliderarrow1} alt="logo"  /></button>
        <button onClick={handleNext} class="next-sli" aria-label="next Slide"><img src={sliderarrow2} alt="logo"/></button>
      </div>
    </div>
  );
};

export default SliderTestimonial;
