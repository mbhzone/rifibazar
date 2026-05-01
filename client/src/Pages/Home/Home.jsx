import {} from 'react';
import Product from '../../components/Home/Product';
import ClientReview from '../../components/Home/ClientReview';
import Sidler from '../../components/Home/Sidler';
import AboutAcher from '../../components/Home/AboutAcher';
import CheckOut from '../../components/Home/CheckOut';
import Banner from '../../components/Home/Banner';
import Influencer from '../../components/Home/Influencer';
import Giveaway from '../../components/Home/Giveaway';
import AboutRajshahi from '../../components/Home/AboutRajshahi';
import FinalCta from '../../components/Home/FinalCta';

const Home = () => {
  return (
    <div className="min-h-screen ">
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

export default Home;
