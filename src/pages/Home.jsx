import React from 'react';
import Blogs from '../components/blogs/Blogs';
import Features from '../components/features/Features';
import Footer from '../components/footer/Footer';
import HomeCarousel from '../components/home-carousel/HomeCarousel';
import ShopBanner from '../components/shop-banner/ShopBanner';
import WhatIsHydroponics from '../components/what-is-hydroponics/WhatIsHydroponics';

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <WhatIsHydroponics />
      <Features />
      <ShopBanner />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
