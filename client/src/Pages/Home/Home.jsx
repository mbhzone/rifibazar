import {} from 'react';
import Product from '../../components/Home/Product';
import ClientReview from '../../components/Home/ClientReview';
import Sidler from '../../components/Home/Sidler';
import AboutAcher from '../../components/Home/AboutAcher';
import CheckOut from '../../components/Home/CheckOut';
import Banner from '../../components/Home/Banner';

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Banner></Banner>
      <Product></Product>
      <Sidler></Sidler>
      <AboutAcher></AboutAcher>
      <ClientReview></ClientReview>
      <CheckOut></CheckOut>
    </div>
  );
};

export default Home;
