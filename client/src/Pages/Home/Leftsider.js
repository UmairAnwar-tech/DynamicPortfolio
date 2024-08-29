import React from "react";

function Leftsider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static sm:pb-10 ">
      <div className="flex flex-col items-center justify-center sm:flex-row ">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-5 ">
          <i class="ri-facebook-line  text-gray-400"></i>
          <i class="ri-mail-line  text-gray-400"></i>
          <a href="https://www.linkedin.com/in/umairanwar12/">
            <i class="ri-linkedin-line  text-gray-400"></i>
          </a>
          <i class="ri-github-line  text-gray-400"></i>
          <i class="ri-whatsapp-line  text-gray-400"></i>
        </div>
        <div className="w-[1px] h-32 bg-gray-700 sm:hidden"></div>
      </div>
    </div>
  );
}

export default Leftsider;
