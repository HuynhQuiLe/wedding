import React from "react";

const Footer = () => {
  return (
    <section className=" mb-[60px] py-[30px]">
      <div className=" max-w-[1500px] m-auto text-center">
        <div className="flex flex-col justify-center sm:flex-row">
          <a href="#" className="mr-0 mb-2 sm:mr-[25px]">
            Điều khoản và điều kiện
          </a>
          <a href="#" className="ml-0 sm:ml-[25px]">
            Chính sách quyền riêng tư
          </a>
        </div>
        <h3 className="my-[10px] font-bold text-[20px] sm:text-[25px]">
          #HuynhQuiyeuThuyTien
        </h3>
        <p>
          © 2023 bản quyền của{" "}
          <span className="block mb-3 sm:inline">
            Huỳnh Quí & Thuỷ Tiên. &nbsp;
          </span>
          <span className="block sm:inline">Được tạo ra với &nbsp;</span>
          <a
            href="https://lehuynhqui.vercel.app/"
            target="_blank"
            className="underline block sm:inline"
          >
            lehuynhqui.vercel.app
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
