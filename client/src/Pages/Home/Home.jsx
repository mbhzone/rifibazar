import { useState, useEffect } from 'react';
import Heading from '../../components/Heading';
import Video from '../../components/Video';

import ContactIcon from '../../components/ContactIcon';
import Footer from '../../components/Footer';
import Products from '../../components/Products';
import HeroCardSection from '../../components/HeroCardSection';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/get-products`)
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-gray-900 mb-3  lg:mb-5">
          আমাদের পণ্যসমূহ
        </h2>
      </div>

      <section className="w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-4 px-2 ">
          {Array.isArray(products) &&
            products.map(product => (
              <Products key={product._id} product={product} />
            ))}
        </div>
      </section>

      <ContactIcon></ContactIcon>
      <Footer></Footer>
    </div>
  );
};

export default Home;
