import React from "react";
import Slider from "infinite-react-carousel";

const Story = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="pt-[60px] sm:pt-[160px]" id="story">
      <div className=" flex-col flex sm:flex-row max-w-[1280px] pl-[35px] pr-[35px] sm:pl-[100px] sm:pr-[80px] justify-start items-center m-auto">
        <div className="w-[100%] pr-0 sm:w-[40%] sm:pr-[80px] text-left ">
          <h2 className="text-[20px] sm:text-[30px] tracking-[0.3rem]">
            <span className="text-[50px] sm:text-[85px] ">C</span>âu chuyện
          </h2>
          <p className="uppercase mb-[10px] text-custom_hover_text text-[14px] sm:text-[18px] font-bold">
            CHÚNG TÔI SẮP KẾT HÔN
          </p>
          <p className="mb-[15px] sm:mb-[35px] tracking-[0.1rem] text-[14px] sm:text-[16px] font-[200] leading-[1.5]">
            Tôi là đoạn văn. Nhấp vào đây để thêm văn bản và chỉnh sửa. Dễ thôi.
            Chỉ cần nhấp vào “Chỉnh sửa văn bản” hoặc nhấp đúp để thêm nội dung
            và thay đổi phông chữ. Tôi là nơi tuyệt vời để bạn kể một câu chuyện
            và cho người dùng biết thêm về bạn.
          </p>
          <p className="italic after:content-[''] tracking-[0.2rem] after:ml-3 after:block after:w-[70px] after:h-[2px] after:bg-custom_pink flex items-baseline cursor-pointer hover:text-custom_hover_text trasition-all duration-300 ease-in-out">
            Xem thêm ảnh
          </p>
        </div>
        <div className="w-[100%] sm:w-[60%] pt-[50px] sm:pt-0">
          <div className=" h-[190px] w-[90%] sm:h-auto relative before:w-[100%] before:h-[100%] before:bg-custom_light_pink before:absolute before:top-[-30px] sm:before:top-[-80px] before:right-[-30px] sm:before:right-[-100px]">
            <Slider {...settings}>
              <img
                className="h-[190px] w-[250px] sm:h-[400px] sm:w-auto object-cover carousel_img"
                src="./img/IMG_6328.JPG"
                alt="slider"
              />
              <img
                className="h-[190px] w-[250px] sm:h-[400px] object-cover carousel_img"
                src="./img/IMG_6329.JPG"
                alt="slider"
              />
              <img
                className="h-[190px] w-[250px] sm:h-[400px] object-cover carousel_img"
                src="./img/IMG_6330.JPG"
                alt="slider"
              />
              <img
                className="h-[190px] w-[250px] sm:h-[400px] object-cover carousel_img"
                src="./img/IMG_6328.JPG"
                alt="slider"
              />
              <img
                className="h-[190px] w-[250px] sm:h-[400px] object-cover carousel_img"
                src="./img/IMG_6329.JPG"
                alt="slider"
              />
              <img
                className="h-[190px] w-[250px] sm:h-[400px] object-cover carousel_img"
                src="./img/IMG_6330.JPG"
                alt="slider"
              />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
