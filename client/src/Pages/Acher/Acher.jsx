import React from 'react';
import Banner from '../../components/Acher/Banner';
import Influencer from '../../components/Acher/Influencer';
import Giveaway from '../../components/Acher/Giveaway';
import Product from '../../components/Acher/Product';
import Sidler from '../../components/Acher/Sidler';
import AboutAcher from '../../components/Acher/AboutAcher';
import ClientReview from '../../components/Acher/ClientReview';
import CheckOut from '../../components/Acher/CheckOut';
import FinalCta from '../../components/Acher/FinalCta';

const Acher = () => {
  return (
    <div>
      {' '}
      <Banner></Banner>
      <Influencer></Influencer>
      <Giveaway></Giveaway>
      {/* <AboutRajshahi></AboutRajshahi> */}
      <Product></Product>
      <Sidler></Sidler>
      <AboutAcher></AboutAcher>
      <ClientReview></ClientReview>
      <CheckOut></CheckOut>
      <FinalCta></FinalCta>
    </div>
  );
};

export default Acher;
