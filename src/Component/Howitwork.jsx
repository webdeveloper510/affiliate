import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from '../assets/arrow-slider.png';
import sliderarrow1 from '../assets/sliderarrow1.png';
import sliderarrow2 from '../assets/sliderarrow2.png';

const Howitwork = () => {
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 450 },
      items: 1,
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
        stepnumber:"01",
      
        heading: "PICK ONE OR MORE INFLUENCERS",
     
        link: '/', // Add the link property
       
        paragraph: 'Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.'
      },      {
        stepnumber:"02",
      
        heading: "PICK ONE OR MORE INFLUENCERS",
     
        link: '/', // Add the link property
       
        paragraph: 'Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.'
      },
      {
        stepnumber:"03",
      
        heading: "PICK ONE OR MORE INFLUENCERS",
     
        link: '/', // Add the link property
       
        paragraph: 'Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.'
      },
      {
        stepnumber:"04",
      
        heading: "PICK ONE OR MORE INFLUENCERS",
     
        link: '/', // Add the link property
       
        paragraph: 'Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.'
      },
      {
        stepnumber:"05",
      
        heading: "WATCH YOUR SALES GROW",
     
        link: '/', // Add the link property
       
        paragraph: 'Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy.'
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
               stepClass = "blue-step";
             } else if (index % 3 === 1) {
               // If index is a multiple of 3 + 1 (1, 4, 7, ...)
               stepClass = "green-step";
             } else {
               // If index is a multiple of 3 + 2 (2, 5, 8, ...)
               stepClass = "green-step";
             }
          return (
          
          <div className={`blogs ${stepClass}`} key={index}>
                <div class="image-container-text" draggable={false}>
				<div className="row">
                  <div className="col-md-12">
                   
                  
                  </div>
              
<div className="blogheading">
<div className="number">
{item.stepnumber}
 
         </div>
    <h3>{item.heading}</h3>

</div>
<div className="bloginfo">
    <p>{item.paragraph}</p>

</div>
<div className="Morelink">
<a href="/#">
Explore <span className="arrow-bg"><img src={arrow1}/> </span>

 
</a>
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

export default Howitwork;
