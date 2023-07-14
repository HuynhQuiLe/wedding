import React from "react";
import Slider from "infinite-react-carousel";

const ThyWord = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <section className="pt-[60px] sm:pt-[160px]" id="thyWord">
      <div className="flex-col flex sm:flex-row max-w-[1280px] pl-[35px] pr-[35px] sm:pl-[100px] sm:pr-[80px] justify-start items-center m-auto">
        <div className="w-[100%] pr-0 sm:w-[40%] sm:pr-[80px] text-left">
          <h2 className="text-[20px] sm:text-[30px] tracking-[0.3rem]">
            <span className="text-[50px] sm:text-[85px] ">L</span>ời chúa
          </h2>
          <Slider {...settings}>
            <div className="mt-1">
              <p className="mb-[15px] sm:mb-[35px] tracking-[0.1rem] text-[14px] sm:text-[16px] font-[200] leading-[1.5]">
                “Bởi thế, người đàn ông lìa cha mẹ mà gắn bó với vợ mình, và cả
                hai thành một xương một thịt.”
              </p>

              <p className="italic after:content-[''] tracking-[0.2rem] after:ml-3 after:block after:w-[70px] after:h-[2px] after:bg-custom_pink flex items-baseline ">
                Sáng Thế 2:24
              </p>
            </div>
            <div className="mt-1">
              <p className="mb-[15px] sm:mb-[35px] tracking-[0.1rem] text-[14px] sm:text-[16px] font-[200] leading-[1.5]">
                “Sự gì Thiên Chúa đã kết hợp, loài người không được phân ly”
              </p>

              <p className="italic after:content-[''] tracking-[0.2rem] after:ml-3 after:block after:w-[70px] after:h-[2px] after:bg-custom_pink flex items-baseline ">
                Mt 19,3-12
              </p>
            </div>
            <div className="mt-1">
              <p className="mb-[15px] sm:mb-[35px] tracking-[0.1rem] text-[14px] sm:text-[16px] font-[200] leading-[1.5]">
                “Tuy nhiên, mỗi người trong anh em phải yêu thương vợ như bản
                thân, còn vợ phải kính trọng chồng.”
              </p>

              <p className="italic after:content-[''] tracking-[0.2rem] after:ml-3 after:block after:w-[70px] after:h-[2px] after:bg-custom_pink flex items-baseline ">
                Êphêsô 5:33
              </p>
            </div>
          </Slider>
        </div>
        <div className="w-[100%] sm:w-[60%] pt-[50px] sm:pt-0">
          <div className=" h-[190px] w-[90%] sm:h-auto relative before:w-[100%] before:h-[100%] before:bg-custom_light_pink before:absolute before:top-[-30px] sm:before:top-[-80px] before:right-[-30px] sm:before:right-[-100px] before:z-[-1]">
            <img
              className="h-[190px] w-[100%] sm:h-[400px]  object-cover object-custom_10 carousel_img"
              src="/img/IMG_6328.JPG"
              alt="slider"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThyWord;
