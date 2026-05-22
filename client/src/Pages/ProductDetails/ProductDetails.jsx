import { useParams, useNavigate } from 'react-router';
import { landingPages } from '../../data/landingPageConfig';
import HeroSection from '../../components/am/HeroSection';
import WhyChooseUs from '../../components/am/WhyChooseUs';
import Faq from '../../components/am/Faq';
import Products from '../../components/am/Products';
import Checkout from '../../components/am/Checkout';
import { useEffect } from 'react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = landingPages.find(item => item.id === id);

  //  View Item DataLayer
  useEffect(() => {
    if (!product) return;

    const viewedKey = `viewed_${id}`;

    // Prevent duplicate firing
    if (sessionStorage.getItem(viewedKey)) return;

    sessionStorage.setItem(viewedKey, 'true');

    window.dataLayer = window.dataLayer || [];

    const ecommerceData = {
      currency: 'BDT',
      value: product.checkout.packages[0].price,

      items: [
        {
          item_id: product.id,
          item_name: product.card.title,
          item_brand: 'Rifi Bazar',
          item_category: 'Mango',
          item_variant: product.checkout.packages[0].label,
          price: product.checkout.packages[0].price,
          quantity: 1,
        },
      ],
    };

    // view_item event
    window.dataLayer.push({
      event: 'view_item',
      ecommerce: ecommerceData,
    });

    // add_to_cart event
    window.dataLayer.push({
      event: 'add_to_cart',
      ecommerce: ecommerceData,
    });

    // begin_checkout
    window.dataLayer.push({
      event: 'begin_checkout',
      ecommerce: ecommerceData,
    });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <div className="">
        {/* Hero Section */}
        <HeroSection hero={product.hero}></HeroSection>

        {/* Why Choose Us Section */}
        <WhyChooseUs whyChooseUs={product.whyChooseUs}></WhyChooseUs>
        {/* products */}
        <Products product={product.products}></Products>
        {/* FAQ Section */}
        <Faq faq={product.faq}></Faq>
        {/* Checkout From */}
        <Checkout selectedProduct={product}></Checkout>
      </div>
    </div>
  );
}
