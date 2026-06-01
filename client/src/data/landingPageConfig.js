import Amropali from '../assets/am/amropali.webp';
// import nakfojli from '../assets/am/নাকফজলি আম.webp';
import himsagor from '../assets/am/am2.jpg';
// import langra from '../assets/am/ল্যাংড়া আম.jpg';

// banner
import AmropaliBanner from '../assets/am/web banner.png';
import NakFojliBanner from '../assets/am/web banner.png';
import HimsagorBanner from '../assets/am/heroimgb.jpg';
import LangraBanner from '../assets/am/web banner.png';

// why we slider

//himsagor
import himsagorslider1 from '../assets/am/shihab.jpg';
import himsagorslider2 from '../assets/am/shihab2.jpg';

// Amropali
import AmropaliSilder1 from '../assets/am/WhatsApp Image 2026-05-13 at 2.23.26 AM.jpeg';
import AmropaliSilder2 from '../assets/am/WhatsApp Image 2026-05-13 at 2.23.26 AM.jpeg';

// Nak Fojli
import NakFojliSilder1 from '../assets/am/HimsagorBanner.jpg';
import NakFojliSilder2 from '../assets/am/LangraBanner.webp';

// product slider

//himsagor
import himsagorProductliSilder1 from '../assets/am/am2.jpg';
import himsagorProductliSilder2 from '../assets/am/am.jpg';
import himsagorProductliSilder3 from '../assets/am/am3.jpg';
import himsagorProductliSilder4 from '../assets/am/am4.jpg';

// Amropali
import AmropaProductliSilder1 from '../assets/am/WhatsApp Image 2026-05-13 at 2.23.26 AM.jpeg';
import AmropaProductliSilder2 from '../assets/am/WhatsApp Image 2026-05-13 at 2.23.26 AM.jpeg';

// Nak Fojli
import NakFojliProductSilder1 from '../assets/am/WhatsApp Image 2026-05-13 at 2.23.26 AM.jpeg';
import NakFojliProductSilder2 from '../assets/am/WhatsApp Image 2026-05-13 at 2.23.26 AM.jpeg';

export const landingPages = [
  // 🔵 1. হিমসাগর (Himsagor)
  {
    id: 'himsagor',

    card: {
      title: 'হিমসাগর আম',
      shortDescription: 'মিষ্টি স্বাদের বিখ্যাত হিমসাগর আম',
      image: himsagor,
    },

    hero: {
      sesionTime: '⏳ সিজন শেষ হতে আর মাত্র ৮ দিন বাকি! সরাসরি বাগান থেকে ডেলিভারি চলছে 🏃‍♂️',
      heading: 'আমের রাজা হিমসাগর',
      subHeading:
        'রাজশাহীর এই হিমসাগর একবার খেলে সিজন শেষে আবার খুঁজবেন গ্যারান্টি দিয়ে বললাম',
      description:
        'হিমসাগর আম তার অসাধারণ মিষ্টতা এবং নরম টেক্সচারের জন্য বিখ্যাত।',
      images: HimsagorBanner,
    },

    whyChooseUs: {
      heading: 'কেন আমাদের হিমসাগর আম কিনবেন?',
      subheading1:
        'আমাদের বাগান থেকেই সরাসরি সংগ্রহ করা হয় একদম পরিপক্ক , সুস্বাদু ও তাজা আম—যা হাতে বাছাই করে সর্বোচ্চ সতেজতা নিশ্চিত করা হয়',
      subheading2:
        'আম পাকাতে আমরা  কোনো বিষাক্ত কার্বাইড বা ফরমালিন ব্যবহার করি না। একদম প্রাকৃতিকভাবে পরিপক্ক আম আমরা সরবরাহ করি।',
      images: [himsagorslider1, himsagorslider2],
      points: [
        'কড়া মিষ্টি স্বাদ',
        'কেমিক্যালমুক্ত গ্যারান্টি',
        'ফ্রেশ বাগান থেকে সংগ্রহ',
        'নিরাপদ প্যাকেজিং',
      ],
    },

    products: [
      himsagorProductliSilder1,
      himsagorProductliSilder2,
      himsagorProductliSilder3,
      himsagorProductliSilder4,
    ],

    faq: [
      {
        question: 'আম কি ১০০% অর্গানিক হবে?',
        answer:
          'হ্যাঁ, আমরা আম পাকাতে কোনো বিষাক্ত কার্বাইড বা ফরমালিন ব্যবহার করি না। একদম প্রাকৃতিকভাবে পরিপক্ক আম আমরা সরবরাহ করি।',
      },
      {
        question: 'অগ্রিম টাকা দিতে হবে?',
        answer:
          'না, আপনি ডেলিভারি পাওয়ার পর ক্যাশ অন ডেলিভারি (COD) পেমেন্ট করতে পারবেন।',
      },
      {
        question: 'ডেলিভারিতে কতদিন লাগে?',
        answer:
          'সাধারণত ২-৩ কার্যদিবসের মধ্যে আপনার নির্ধারিত ঠিকানায় ডেলিভারি করা হয়।',
      },
      {
        question: 'আম নষ্ট হলে কি হবে?',
        answer:
          'ডেলিভারির সময় যদি কোনো আম নষ্ট বা সমস্যা থাকে, তাহলে আমরা রিপ্লেসমেন্ট বা রিফান্ড গ্যারান্টি দেই।',
      },
    ],

    checkout: {
      heading: 'হিমসাগর অর্ডার করুন',
      formFields: ['name', 'phone', 'address', 'quantity'],
      note: 'দ্রুত ডেলিভারি নিশ্চিত করা হয়',
      packages: [
        {
          label: '১১ কেজি প্যাকেজ',
          value: 11,
          price: 1420,
          popular: false,
        },
        {
          label: '২২ কেজি প্যাকেজ',
          value: 22,
          price: 2750,
          popular: true,
        },
      ],
    },
  },
  // 🟡 2. নাকফজলি (Nak Fojli)
  // {
  //   id: 'nakfojli',

  //   card: {
  //     title: 'নাকফজলি আম',
  //     shortDescription: 'বড় আকৃতির ও রসালো নাকফজলি আম',
  //     image: nakfojli,
  //   },

  //   hero: {
  //     sesionTime: 'মাত্র ২০ দিনের সিজন কোন সময়',
  //     heading: 'রসালো নাকফজলি আম',
  //     subHeading: 'বড় আকার, বেশি রস এবং অসাধারণ স্বাদ',
  //     description:
  //       'নাকফজলি আম তার বড় আকার এবং অতিরিক্ত রসের জন্য বিখ্যাত। আমরা সরাসরি বাগান থেকে সংগ্রহ করি।',
  //     images: NakFojliBanner,
  //   },

  //   whyChooseUs: {
  //     heading: 'কেন নাকফজলি আম আমাদের থেকে?',
  //     subheading1:
  //       'আমাদের বাগান থেকেই সরাসরি সংগ্রহ করা হয় একদম পাকা, সুস্বাদু ও তাজা আম—যা হাতে বাছাই করে সর্বোচ্চ সতেজতা নিশ্চিত করা হয়',
  //     subheading2:
  //       'কোনো ধরনের কেমিক্যাল কৃত্রিম রিপেনিং বা প্রিজারভেটিভ ছাড়াই সম্পূর্ণ প্রাকৃতিকভাবে উৎপাদিত স্বাস্থ্যকর ও নিরাপদ আম।',

  //     images: [NakFojliSilder1, NakFojliSilder2],
  //     points: [
  //       'প্রিমিয়াম কোয়ালিটি আম',
  //       'সরাসরি বাগান থেকে সংগ্রহ',
  //       'দ্রুত ডেলিভারি',
  //       'ফ্রেশ গ্যারান্টি',
  //     ],
  //   },
  //   products: [
  //     NakFojliProductSilder1,
  //     NakFojliProductSilder2,
  //     NakFojliProductSilder1,
  //     NakFojliProductSilder2,
  //   ],

  //   faq: [
  //     {
  //       question: 'আম কি ১০০% অর্গানিক হবে?',
  //       answer:
  //         'হ্যাঁ, আমাদের আম সম্পূর্ণ প্রাকৃতিকভাবে উৎপাদিত এবং কোনো ধরনের কেমিক্যাল বা কৃত্রিম রিপেনিং ব্যবহার করা হয় না।',
  //     },
  //     {
  //       question: 'অগ্রিম টাকা দিতে হবে?',
  //       answer:
  //         'না, আপনি ডেলিভারি পাওয়ার পর ক্যাশ অন ডেলিভারি (COD) পেমেন্ট করতে পারবেন।',
  //     },
  //     {
  //       question: 'ডেলিভারিতে কতদিন লাগে?',
  //       answer:
  //         'সাধারণত ২-৩ কার্যদিবসের মধ্যে আপনার নির্ধারিত ঠিকানায় ডেলিভারি করা হয়।',
  //     },
  //     {
  //       question: 'আম নষ্ট হলে কি হবে?',
  //       answer:
  //         'ডেলিভারির সময় যদি কোনো আম নষ্ট বা সমস্যা থাকে, তাহলে আমরা রিপ্লেসমেন্ট বা রিফান্ড গ্যারান্টি দেই।',
  //     },
  //   ],

  //   checkout: {
  //     heading: 'নাকফজলি অর্ডার করুন',
  //     formFields: ['name', 'phone', 'address', 'quantity'],
  //     note: 'অর্ডার কনফার্ম করার পর কল করা হবে',
  //     packages: [
  //       {
  //         label: '১২ কেজি প্যাকেজ',
  //         value: 12,
  //         price: 3000,
  //         popular: false,
  //       },
  //       {
  //         label: '২৪ কেজি প্যাকেজ',
  //         value: 24,
  //         price: 5000,
  //         popular: true,
  //       },
  //     ],
  //   },
  // },
  // 🟣 3. ল্যাংড়া (Langra)
  // {
  //   id: 'langra',

  //   card: {
  //     title: 'ল্যাংড়া আম',
  //     shortDescription: 'স্বাদে ভরপুর বিখ্যাত ল্যাংড়া আম',
  //     image: langra,
  //   },

  //   hero: {
  //     sesionTime: 'মাত্র ২০ দিনের সিজন কোন সময়',
  //     heading: 'ল্যাংড়া আমের অসাধারণ স্বাদ',
  //     subHeading: 'টক-মিষ্টি স্বাদের এক অনন্য আম',
  //     description:
  //       'ল্যাংড়া আম তার অনন্য টক-মিষ্টি স্বাদের জন্য সবার কাছে জনপ্রিয়।',
  //     images: LangraBanner,
  //   },

  //   whyChooseUs: {
  //     heading: 'কেন ল্যাংড়া আম আমাদের থেকে?',
  //     subheading1:
  //       'আমাদের বাগান থেকেই সরাসরি সংগ্রহ করা হয় একদম পাকা, সুস্বাদু ও তাজা আম—যা হাতে বাছাই করে সর্বোচ্চ সতেজতা নিশ্চিত করা হয়',
  //     subheading2:
  //       'কোনো ধরনের কেমিক্যাল কৃত্রিম রিপেনিং বা প্রিজারভেটিভ ছাড়াই সম্পূর্ণ প্রাকৃতিকভাবে উৎপাদিত স্বাস্থ্যকর ও নিরাপদ আম।',
  //     images: [AmropaliSilder1, AmropaliSilder2],
  //     points: [
  //       'অনন্য স্বাদ',
  //       'তাজা আম সংগ্রহ',
  //       'দ্রুত ডেলিভারি',
  //       'ভালো মানের গ্যারান্টি',
  //     ],
  //   },

  //   faq: [
  //     {
  //       question: 'আম কি ১০০% অর্গানিক হবে?',
  //       answer:
  //         'হ্যাঁ, আমাদের আম সম্পূর্ণ প্রাকৃতিকভাবে উৎপাদিত এবং কোনো ধরনের কেমিক্যাল বা কৃত্রিম রিপেনিং ব্যবহার করা হয় না।',
  //     },
  //     {
  //       question: 'অগ্রিম টাকা দিতে হবে?',
  //       answer:
  //         'না, আপনি ডেলিভারি পাওয়ার পর ক্যাশ অন ডেলিভারি (COD) পেমেন্ট করতে পারবেন।',
  //     },
  //     {
  //       question: 'ডেলিভারিতে কতদিন লাগে?',
  //       answer:
  //         'সাধারণত ২-৩ কার্যদিবসের মধ্যে আপনার নির্ধারিত ঠিকানায় ডেলিভারি করা হয়।',
  //     },
  //     {
  //       question: 'আম নষ্ট হলে কি হবে?',
  //       answer:
  //         'ডেলিভারির সময় যদি কোনো আম নষ্ট বা সমস্যা থাকে, তাহলে আমরা রিপ্লেসমেন্ট বা রিফান্ড গ্যারান্টি দেই।',
  //     },
  //   ],
  //   products: [
  //     NakFojliProductSilder1,
  //     NakFojliProductSilder2,
  //     NakFojliProductSilder1,
  //     NakFojliProductSilder2,
  //   ],

  //   checkout: {
  //     heading: 'ল্যাংড়া অর্ডার করুন',
  //     formFields: ['name', 'phone', 'address', 'quantity'],
  //     note: 'অর্ডার করার পর কনফার্ম করা হবে',
  //     packages: [
  //       {
  //         label: '১২ কেজি প্যাকেজ',
  //         value: 12,
  //         price: 3000,
  //         popular: false,
  //       },
  //       {
  //         label: '২৪ কেজি প্যাকেজ',
  //         value: 24,
  //         price: 5000,
  //         popular: true,
  //       },
  //     ],
  //   },
  // },
  // 🟢 4. হারিভাঙ্গা (harivanga)
  // {
  //   id: 'harivanga',

  //   card: {
  //     title: 'হারিভাঙ্গা ',
  //     shortDescription: 'মিষ্টি ও সুস্বাদু হারিভাঙ্গা  সরাসরি বাগান থেকে',
  //     image: Amropali,
  //   },

  //   hero: {
  //     sesionTime: 'মাত্র ২০ দিনের সিজন কোন সময়',
  //     heading: 'সেরা মানের হারিভাঙ্গা ',
  //     subHeading: 'তাজা, মিষ্টি এবং প্রাকৃতিকভাবে পাকা আম',
  //     description:
  //       'আমাদের হারিভাঙ্গা  সম্পূর্ণ প্রাকৃতিকভাবে বাগান থেকে সংগ্রহ করা হয়। কোনো কেমিক্যাল ব্যবহার করা হয় না।',
  //     images: AmropaliBanner,
  //   },

  //   whyChooseUs: {
  //     images: [AmropaliSilder1, AmropaliSilder2],

  //     heading: 'কেন এই আম কিনবেন ?',

  //     subheading1:
  //       'আমাদের বাগান থেকেই সরাসরি সংগ্রহ করা হয় একদম পাকা, সুস্বাদু ও তাজা আম—যা হাতে বাছাই করে সর্বোচ্চ সতেজতা নিশ্চিত করা হয়',
  //     subheading2:
  //       'কোনো ধরনের কেমিক্যাল কৃত্রিম রিপেনিং বা প্রিজারভেটিভ ছাড়াই সম্পূর্ণ প্রাকৃতিকভাবে উৎপাদিত স্বাস্থ্যকর ও নিরাপদ আম।',

  //     points: [
  //       'একদম তাজা বাগান থেকে সংগ্রহ',
  //       'কোনো কেমিক্যাল ব্যবহার করা হয় না',
  //       'দ্রুত হোম ডেলিভারি',
  //       'সেরা দামে গ্যারান্টি',
  //     ],
  //   },
  //   products: [
  //     AmropaProductliSilder1,
  //     AmropaProductliSilder2,
  //     AmropaProductliSilder1,
  //     AmropaProductliSilder2,
  //     AmropaProductliSilder2,
  //     AmropaProductliSilder1,
  //   ],

  //   faq: [
  //     {
  //       question: 'আম কি ১০০% অর্গানিক হবে?',
  //       answer:
  //         'হ্যাঁ, আমাদের আম সম্পূর্ণ প্রাকৃতিকভাবে উৎপাদিত এবং কোনো ধরনের কেমিক্যাল বা কৃত্রিম রিপেনিং ব্যবহার করা হয় না।',
  //     },
  //     {
  //       question: 'অগ্রিম টাকা দিতে হবে?',
  //       answer:
  //         'না, আপনি ডেলিভারি পাওয়ার পর ক্যাশ অন ডেলিভারি (COD) পেমেন্ট করতে পারবেন।',
  //     },
  //     {
  //       question: 'ডেলিভারিতে কতদিন লাগে?',
  //       answer:
  //         'সাধারণত ২-৩ কার্যদিবসের মধ্যে আপনার নির্ধারিত ঠিকানায় ডেলিভারি করা হয়।',
  //     },
  //     {
  //       question: 'আম নষ্ট হলে কি হবে?',
  //       answer:
  //         'ডেলিভারির সময় যদি কোনো আম নষ্ট বা সমস্যা থাকে, তাহলে আমরা রিপ্লেসমেন্ট বা রিফান্ড গ্যারান্টি দেই।',
  //     },
  //   ],

  //   checkout: {
  //     heading: 'আম্রপালি অর্ডার করুন',
  //     formFields: ['name', 'phone', 'address', 'quantity'],
  //     note: 'অর্ডার করার পর আমরা দ্রুত আপনার সাথে যোগাযোগ করবো',
  //     packages: [
  //       {
  //         label: '১২ কেজি প্যাকেজ',
  //         value: 12,
  //         price: 3000,
  //         popular: false,
  //       },
  //       {
  //         label: '২৪ কেজি প্যাকেজ',
  //         value: 24,
  //         price: 5000,
  //         popular: true,
  //       },
  //     ],
  //   },
  // },
];
