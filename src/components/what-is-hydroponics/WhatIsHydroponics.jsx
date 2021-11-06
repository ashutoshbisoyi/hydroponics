import React from 'react';
import './WhatIsHydroponics.scss';
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';
import gallery5 from '../../assets/gallery5.jpg';
import gallery6 from '../../assets/gallery6.jpg';
const WhatIsHydroponics = () => {
  const [currentImage, setCurrentImage] = React.useState(gallery1);
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];
  return (
    <section className='container what-is-hydroponics' id='what-is-hydroponics'>
      <div className='row'>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-between'>
          <div className='content'>
            <h2>What is Hydroponics Farming?</h2>
            <p>
              The basic concept of a hydroponic farm is that water is
              substituted for soil. Solutions are then added to the water to
              provide easily accessed nutrients for a healthy yield. The
              nutrients added to the water may include phosphorus, nitrogen,
              calcium, potassium, and many more, depending on the plants being
              grown
            </p>
            <p>
              Hydroponics requires far less space than plants grown in soil,
              growing plants in water actually use less water than growing the
              same plants in soil, and fresher is unmistakably better.
            </p>
          </div>
          <ul className='row g-4 gallery'>
            {galleryImages.map((value, index) => (
              <div
                className='col-4 col-md-3'
                key={index}
                onClick={() => setCurrentImage(value)}
                onMouseEnter={() => setCurrentImage(value)}
              >
                <div
                  className={value === currentImage ? 'image active' : 'image'}
                  style={{ backgroundImage: `url(${value})` }}
                ></div>
              </div>
            ))}
          </ul>
        </div>
        <div className='col-12 col-md-6'>
          <div
            className='display-image'
            style={{ backgroundImage: `url(${currentImage})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHydroponics;
