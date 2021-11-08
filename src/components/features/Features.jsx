import React from 'react';
import './Features.scss';
import quality from '../../assets/quality.png';
import water from '../../assets/water.png';
import space from '../../assets/space.png';
import growth from '../../assets/growth.png';
const Features = () => {
  const featuresData = [
    {
      image: space,
      heading: 'Maximizes Space',
      description:
        'Hydroponics requires far less space than plants grown in soil. Depending on the system, when hydroponics are combined with vertical farming techniques, they can use up to 99 percent fewer lands than typical farming techniques. ',
    },
    {
      image: water,
      heading: 'Conserves Water',
      description:
        'It may seem counterintuitive, but growing plants in water actually use less water than growing the same plants in soil. In fact, hydroponic plants can grow with up to 98 percent less water than traditional growing methods. ',
    },
    {
      image: quality,
      heading: 'Higher Quality ',
      description:
        'When it comes to fruits and vegetables, fresher is unmistakably better. Few people happen to live in an area where they can get fresh produce year-round due to climate and soil conditions.',
    },
    {
      image: growth,
      heading: 'Faster Growth',
      description:
        'Most fruits and vegetables take several months to reach maturity using traditional methods. Plants must take their nutrients from the soil, which can be a slow process. Hydroponics process helps the plant grow faster. ',
    },
  ];
  return (
    <section className='container features'>
      <div className='row'>
        {featuresData.map(({ image, heading, description }, index) => (
          <div className='col-12 col-md-3' key={index} id='features'>
            <div className='feature-card'>
              <img src={image} alt={heading} className='img-fluid' />
              <h4>{heading}</h4>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
