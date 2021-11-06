import React from 'react';
import BlogCard from '../blog-card/BlogCard';
import blogBanner1 from '../../assets/gallery1.jpg';
import blogBanner2 from '../../assets/gallery2.jpg';
import blogBanner3 from '../../assets/gallery3.jpg';
const Blogs = () => {
  const data = [
    {
      image: blogBanner1,
      title: 'The What and Why of Hydroponic Farming',
      content:
        'When we tell people that we grow our produce using hydroponics, we usually get something close to this response: “Sounds cool…sounds like it has something to do with health food maybe? What even is it?” For all the hydro-curious folks out there, we’ve put together a primer on the basics of hydroponic farming. We suggest you start here to learn the essentials of hydroponics, and if you’re inspired to try growing some hydroponic plants of your own, click over to this page to see what kind of system would work best for you!',
      link: 'https://www.verticalroots.com/the-what-and-why-of-hydroponic-farming/',
    },
    {
      image: blogBanner2,
      title: 'Hydroponics Business: Five Tips By An Expert!',
      content:
        'Hydroponics farming is especially gaining popularity and there are several people, wondering how to grow vegetables, herbs & plants in nutrient-rich water rather than soil. This method is not only environmentally friendly but also organic. However, getting into the hydroponics market isn’t as simple as starting a terrace garden. Hydroponics farming is especially gaining popularity and there are several people, wondering how to grow vegetables, herbs & plants in nutrient-rich water rather than soil. This method is not only environmentally friendly but also organic. However, getting into the hydroponics market isn’t as simple as starting a terrace garden.',
      link: 'https://krishijagran.com/agripedia/hydroponics-business-five-tips-by-an-expert/',
    },
    {
      image: blogBanner3,
      title: 'Hydroponics: Advantages and Disadvantages',
      content:
        'Hydroponics is a branch of hydroculture, in which plants are grown without soil by using water solvent which consists of minerals nutrient solution. Terrestrial plants may be grown with  their roots only, roots are  exposed to the nutritious liquid, or roots may be  supported physically by a medium like gravel. Plants are also grown through a process called photosynthesis, in which plants use sunlight and a chemical inside their leaves called chlorophyll to convert carbon dioxide and water into glucose and oxygen, as shown in reaction.',
      link: 'https://krishijagran.com/agripedia/hydroponics-in-india-know-the-advantages-and-disadvantages-of-hydroponics-farming/',
    },
  ];
  return (
    <section className='container-fluid'>
      <div className='container'>
        <h2 className='mb-5'>BLogs & Articles</h2>
        <div className='row'>
          {data.map((value, index) => (
            <div className='col-12 col-md-4' key={index}>
              <BlogCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
