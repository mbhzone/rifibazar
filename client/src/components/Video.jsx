import React from 'react';

const Video = () => {
  const videos = [
    {
      id: 'T42yvwokgLw',
      title: 'Traditional Date Molasses Making',
      description:
        'Watch the authentic process of creating date molasses using traditional methods.',
    },
    {
      id: 'FfOLSvWVRMI',
      title: 'Date Syrup Production',
      description:
        'Learn how date syrup is commercially produced while maintaining quality and flavor.',
    },
    {
      id: 'LGc35X2h_c4',
      title: 'Homemade Date Molasses',
      description:
        'Simple steps to make your own date molasses at home with minimal equipment.',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="text-center  py-9">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-gray-900 mb-3  lg:mb-5">
          জানুন কেন রিফি বাজারের খেজুর গুড় সেরা?
        </h2>

        <p className="text-gray-600 text-lg">
          বিস্তারিত দেখুন ও জানুন রিফি বাজারের খেজুর গুড়ের গুণগতমান সম্পর্কে
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={video.id} className="flex flex-col">
            {/* Video Container */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
