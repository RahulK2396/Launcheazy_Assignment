import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import singleImage from '../assets/images/single-image.svg';
import carouselImage1 from '../assets/images/img1.svg';
import carouselImage2 from '../assets/images/img2.svg';
import carouselImage3 from '../assets/images/img3.svg';
import "../assets/SCSS/Carsoual.scss"

function ImageSection() {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('image-section');
      if (section) {
        const bounding = section.getBoundingClientRect();
        console.log("bounding",bounding.top >= 0 && bounding.bottom <= window.innerHeight);
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setShowCarousel(false);
        } else {
          setShowCarousel(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove:true,
    autoplay:true,
    autoplaySpeed: 3000
  };

  return (
    <div id="image-section">
      {showCarousel ? (
        <div>
         
          <Slider {...settings}>
            <div>
              <img className='carsoual-image' src={carouselImage1} alt="Carousel Image 1" />
            </div>
            <div>
              <img className='carsoual-image' src={carouselImage2} alt="Carousel Image 2" />
            </div>
            <div>
              <img className='carsoual-image' src={carouselImage3} alt="Carousel Image 3" />
            </div>
          </Slider>
          
        </div>
      ) : (
        <img className='carsoual-image' src={singleImage} alt="Single Image" />
      )}
    </div>
  );
}


export default ImageSection;
