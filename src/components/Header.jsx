import React, { useState, Fragment } from "react";

const Header = () => {
  const [isOpen, setIsOpend] = useState(false);
  const hideSidebar =
    " fixed transition-all duration-500 opacity-0 ease-in-out w-0 h-screen bg-white top-0 right-0 overflow-hidden";
  const showSidebar =
    " fixed transition-all duration-500 opacity-100 ease-in-out w-[70vw] h-screen bg-white top-0 right-0 ";
  const handleOpen = () => {
    setIsOpend((isOpen) => !isOpen);
  };
  return (
    <header className="px-[35px] py-[10px] sm:px-[60px] sm:py-[20px] fixed top-0 left-0 w-full bg-white z-10">
      <div className="flex items-center justify-between">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 rotate-[120deg] text-custom_black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
            />
          </svg>
        </a>
        <nav className="hidden sm:block">
          <ul>
            <li className="inline-block pr-2 mr-1 group">
              <a
                className=" tracking-[1px] group-hover:text-custom_hover_text trasition-all duration-300 ease-in-out"
                href="#carousel"
              >
                Trang Chủ
              </a>
            </li>
            <li className="inline-block px-2 mx-1 group">
              <a
                className=" tracking-[1px] group-hover:text-custom_hover_text trasition-all duration-300 ease-in-out"
                href="#story"
              >
                Câu Chuyện
              </a>
            </li>

            <li className="inline-block px-2 mx-1 group">
              <a
                className=" tracking-[1px] group-hover:text-custom_hover_text trasition-all duration-300 ease-in-out"
                href="#wedding"
              >
                Hôn Lễ
              </a>
            </li>
            <li className="inline-block px-2 mx-1 group">
              <a
                className=" tracking-[1px] group-hover:text-custom_hover_text trasition-all duration-300 ease-in-out"
                href="#thyWord"
              >
                Lời Chúa
              </a>
            </li>
            <li className="inline-block pl-2 ml-1 group">
              <a
                className=" tracking-[1px] group-hover:text-custom_hover_text trasition-all duration-300 ease-in-out"
                href="#thanks"
              >
                Cám Ơn
              </a>
            </li>
          </ul>
        </nav>

        <div
          className="relative flex flex-col items-center justify-between w-[20px] h-[20px] sm:hidden transition-all duration-500 ease-in-out z-20"
          onClick={handleOpen}
        >
          {isOpen ? (
            <Fragment>
              <span className="block absolute transition-all duration-200 ease-in-out top-[50%] w-[20px] h-[2px] bg-custom_black rotate-[135deg]"></span>
              <span className="block absolute transition-all duration-200 ease-in-out top-[10px] w-[20px] h-[2px] bg-custom_black -left-[20px] opacity-0"></span>
              <span className="block absolute transition-all duration-200 ease-in-out top-[50%] w-[20px] h-[2px] bg-custom_black -rotate-[135deg]"></span>
            </Fragment>
          ) : (
            <Fragment>
              <span className="block absolute transition-all duration-200 ease-in-out top-0 w-[20px] h-[2px] bg-custom_black"></span>
              <span className="block absolute transition-all duration-200 ease-in-out left-0 top-[10px] w-[20px] h-[2px] bg-custom_black"></span>
              <span className="block absolute transition-all duration-200 ease-in-out top-[20px] w-[20px] h-[2px] bg-custom_black"></span>
            </Fragment>
          )}
        </div>
        <div className={isOpen ? showSidebar : hideSidebar}>
          <ul className="mt-[80px] flex flex-col items-end justify-start px-[35px]">
            <li className="mb-4" onClick={handleOpen}>
              <a
                className="font-bold italic text-[18px] tracking-[1px]"
                href="#carousel"
              >
                Trang Chủ
              </a>
            </li>
            <li className="mb-4" onClick={handleOpen}>
              <a
                className="font-bold italic text-[18px] tracking-[1px]"
                href="#story"
              >
                Câu Chuyện
              </a>
            </li>

            <li className="mb-4" onClick={handleOpen}>
              <a
                className="font-bold italic text-[18px] tracking-[1px]"
                href="#wedding"
              >
                Hôn Lễ
              </a>
            </li>
            <li className="mb-4" onClick={handleOpen}>
              <a
                className="font-bold italic text-[18px] tracking-[1px]"
                href="#thyWord"
              >
                Lời Chúa
              </a>
            </li>
            <li className="mb-4" onClick={handleOpen}>
              <a
                className="font-bold italic text-[18px] tracking-[1px]"
                href="#thanks"
              >
                Cám Ơn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
