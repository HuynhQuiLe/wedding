import React from "react";

const Carousel = () => {
  return (
    <section
      className="px-[35px] sm:px-[60px] pt-[48px] sm:pt-[68px] relative"
      id="carousel"
    >
      <img
        src="/img/IMG_6328.JPG"
        alt="carousel"
        className="w-[100%] h-[60vh] sm:h-[700px] object-cover object-custom_10 max-h-[90vh]"
      />
      <div className=" max-w-[1500px] w-full text-white m-auto text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <h1 className=" text-[45px] leading-[35px] sm:leading-normal sm:text-[90px]">
          Huỳnh Quí <span className=" block sm:inline">&</span> Thuỷ Tiên{" "}
        </h1>
        <div className="flex items-center justify-center mt-4 sm:mt-0">
          <p className="text-[14px] sm:text-[18px] font-bold ">
            19:00, 18 thg 5, 2035
          </p>{" "}
          <div className="mx-3 w-[1px] h-[15px] bg-white " />
          <p className="text-[14px] sm:text-[18px] font-bold">Happy Palace</p>
        </div>
        <button className="text-[15px] transition-all duration-200 ease-in-out hover:scale-95 sm:text-[21px] font-bold border-solid border-[2px] border-white px-6 py-1 sm:px-10 sm:py-2 mt-3 sm:mt-7">
          Chỉ đường
        </button>
      </div>
    </section>
  );
};

export default Carousel;
