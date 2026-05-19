export const pushToDataLayer = (eventName, ecommerceData = {}) => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: eventName,
    ecommerce: ecommerceData,
  });

  console.log('DataLayer Event:', eventName, ecommerceData);
};
