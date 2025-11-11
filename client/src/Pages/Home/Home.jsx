import { useState, useEffect } from 'react';
import Heading from '../../components/Heading';
import Video from '../../components/Video';

import ContactIcon from '../../components/ContactIcon';
import Footer from '../../components/Footer';
import Products from '../../components/Products';
import HeroCardSection from '../../components/HeroCardSection';

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch('https://rifibazar-7vuv.vercel.app/get-products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-indigo-100">
      {/* Heading */}
      <Heading />
      {/* card */}
      <HeroCardSection></HeroCardSection>
      {/* Faq */}
      <Video />

      {/* Show all products */}
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          আমাদের পণ্যসমূহ
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {Array.isArray(products) &&
          products.map(product => (
            <Products key={product._id} product={product} />
          ))}
      </div>

      <ContactIcon></ContactIcon>
      <Footer></Footer>
    </div>
  );
};

export default Home;
