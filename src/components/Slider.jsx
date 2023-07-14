import React from "react";
import Slider from "infinite-react-carousel";

const SliderSection = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Slider {...settings}>
        <img
          className="h-[750px] max-h-[90vh] object-cover"
          src="/img/84770f_7e4a58f6909a4c558289e2df97119219~mv2.webp"
          alt="slider"
        />
        <img
          className="h-[750px] max-h-[90vh] object-cover"
          src="/img/84770f_2dbc1c095d1b4a10a2aa55a50d2389f1~mv2.webp"
          alt="slider"
        />
        <img
          className="h-[750px] max-h-[90vh] object-cover"
          src="/img/84770f_156c8b7d4aa04c1281bc4ec71580324d~mv2.webp"
          alt="slider"
        />
        <img
          className="h-[750px] max-h-[90vh] object-cover"
          src="/img/84770f_208bebb2900b4af9baa7a62568dc654c~mv2.webp"
          alt="slider"
        />
        <img
          className="h-[750px] max-h-[90vh] object-cover"
          src="/img/84770f_33094719e2114dbba50abb3685494fc8~mv2.webp"
          alt="slider"
        />
        <img
          className="h-[750px] max-h-[90vh] object-cover"
          src="/img/84770f_dc02575c464d496eb2fc00336db4fbc2~mv2.webp"
          alt="slider"
        />
      </Slider>
    </div>
  );
};

export default SliderSection;
