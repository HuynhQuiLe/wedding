import React from "react";

const TimeAndPlace = () => {
  return (
    // <section className="py-[100px]">
    //   <div className="max-w-[650px] m-auto text-center">
    //     <h2 className="uppercase text-[50px] font-bold mb-[80px] tracking-[0.3rem]">
    //       <p> LỄ</p>
    //       <p>THÀNH HÔN</p>
    //     </h2>
    //     <div className="flex justify-center items-start h-[100%]">
    //       <div className="w-[45%]">
    //         <p className="uppercase mb-[35px] text-custom_pink text-[18px] font-bold">
    //           Thời gian
    //         </p>
    //         <p>19:00, 18 thg 5, 2035</p>
    //       </div>
    //       <div className="w-[10%] h-[134px] flex items-center justify-center">
    //         <div className="h-[80px] w-[2px] bg-custom_black  mx-4" />
    //       </div>
    //       <div className="w-[45%]">
    //         <p className="uppercase mb-[35px] text-custom_pink text-[18px] font-bold">
    //           Địa điểm
    //         </p>
    //         <p>Happy Palace</p>
    //         <p> 99 Hai Bà Trưng, Cửa Nam, Hoàn Kiếm, Hà Nội, Việt Nam</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="pt-[60px] sm:pt-[160px]" id="wedding">
      <div className=" flex-col-reverse flex sm:flex-row max-w-[1280px] pl-[35px] pr-[35px] sm:pl-[100px] sm:pr-[80px] justify-start items-center m-auto">
        <div className="w-[100%] sm:w-[60%] pt-[50px] sm:pt-0">
          <div className="h-[190px] w-[90%] sm:h-auto relative before:w-[100%] before:h-[100%] before:bg-custom_light_pink before:absolute before:top-[-30px] sm:before:top-[-80px] before:right-[-30px] sm:before:right-[-100px] before:-z-10">
            <img
              className="h-[190px] w-[100%] sm:h-[400px]  object-cover object-custom_75 carousel_img"
              src="/img/IMG_6330.JPG"
              alt="slider"
            />
          </div>
        </div>
        <div className="w-[100%] sm:w-[40%] pl-0 sm:pl-[80px] text-left ">
          <h2 className="text-[20px] sm:text-[30px] tracking-[0.3rem]">
            <span className="text-[50px] sm:text-[85px] ">T</span>hời gian & địa
            điểm
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
          <a
            href="https://www.google.com/maps/dir//CAPELLA+GALLERY+HALL+24+%C4%90.+3+Th%C3%A1ng+2+Ph%C6%B0%E1%BB%9Dng+12+Qu%E1%BA%ADn+10,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+700000/@10.7774404,106.6806446,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31752f266c79200b:0x3e85de751c03de9c!2m2!1d106.6807235!2d10.7774034?entry=ttu"
            target="_blank"
            className="italic cursor-pointer hover:text-custom_hover_text trasition-all duration-300 ease-in-out after:content-[''] tracking-[0.2rem] after:ml-3 after:block after:w-[70px] after:h-[2px] after:bg-custom_pink flex items-baseline"
          >
            Xem chỉ đường
          </a>
        </div>
      </div>
    </section>
  );
};

export default TimeAndPlace;
