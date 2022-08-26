import React from "react";
import "./past.css";

// export default Glimpses

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    originalHeight: "auto",

    // thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    // thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    // thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Glimpses = () => {
  return (
    <div className="row container col-12 p-0 ">
      <div className="text-center col-12 mt-4 mb-3">
        <h1 className="text-design">PAST GLIMPSES</h1>
      </div>
      <div className="text-center col-12 mb-2">
        <ImageGallery
          items={images}
          infinite={true}
          showBullets={true}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          // showIndex={true}
          showNav={true}
          autoPlay={true}
          isRTL={false}
          // thumbnailPosition={false}

          useWindowKeyDown={true}
        />
      </div>
    </div>
  );
};
export default Glimpses;
