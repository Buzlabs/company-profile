import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const Navbar = () => {
  return (
    <nav className="flex-row px-5 justify-center items-center">
      <div className="flex flex-row items-center">
        <div className="basis-1/5 p-5 ">
          <Image src={logo.src} width={131} height={9.29} alt="logo" />
        </div>

        {/* fullsize */}
        <div className="max-sm:hidden md:block lg:block basis-4/5 px-5 py-3">
          <div className="flex flex-row items-center">
            <div className="basis-4/5 p-5">
              <div className="container text-center">
                <a href="#" className="mx-7 my-3">
                  Service
                </a>
                <a href="#" className="mx-7 my-3">
                  MVP
                </a>
                <a href="#" className="mx-7 my-3">
                  Pricing
                </a>
                <a href="#" className="mx-7 my-3">
                  Our Team
                </a>
              </div>
            </div>
            <div className="basis-1/5 px-5 py-3 text-right">
              <button className="rounded-none px-4 py-4 drop-shadow-3xl bg-custom-blue text-custom-blue font-medium hover:bg-blue-500 hover:drop-shadow-4xl">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
