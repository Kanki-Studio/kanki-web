import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black-100 text-white px-10 py-4 w-full">
      <div class="flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* <!-- Logo and links container --> */}
        <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div class="mx-auto my-6 text-white text-center md:hidden">
            CopyRights &copy; 2023 All rights resevered.
          </div>
          {/* <!-- Logo --> */}
          <div>
            <Image
              src="/images/logo.png"
              alt="logo-white"
              width={200}
              height={200}
            />
          </div>
          {/* <!-- Link container --> */}
          <div class="flex flex-row justify-center space-x-8 text-sm">
            {/* <!-- Link1 --> */}
            <a href="#">
              <Image
                src="/images/icon-facebook.svg"
                alt="facebook link"
                width={25}
                height={25}
              />
            </a>
            {/* <!-- Link2 --> */}
            <a href="#">
              <Image
                src="/images/icon-instagram.svg"
                alt="instagram link"
                width={25}
                height={25}
              />
            </a>
            {/* <!-- Link3 --> */}
            <a href="#">
              <Image
                src="/images/icon-pinterest.svg"
                alt="pinterest"
                width={25}
                height={25}
              />
            </a>
            <a href="#">
              <Image
                src="/images/icon-twitter.svg"
                alt="twitter link"
                width={25}
                height={25}
              />
            </a>
            <a href="#">
              <Image
                src="/images/icon-youtube.svg"
                alt="youtube link"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
        {/* <!-- List container --> */}
        <div class="flex flex-col justify-center space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-blue-800 text-eggShell">
              Home
            </a>
            <a href="#" class="hover:text-blue-800 text-eggShell">
              Pricing
            </a>
            <a href="#" class="hover:text-blue-800 text-eggShell">
              Products
            </a>
            <a href="#" class="hover:text-blue-800 text-eggShell">
              About
            </a>
          </div>
        </div>
        <div class="flex flex-col justify-center space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-blue-800 text-eggShell">
              Careers
            </a>
            <a href="#" class="hover:text-blue-800 text-eggShell">
              Community
            </a>
            <a href="#" class="hover:text-blue-800 text-eggShell">
              Privacy policy
            </a>
          </div>
        </div>
        {/* <!-- Input container --> */}
        <div class="flex flex-col justify-center space-y-12">
          <form>
            <div class="flex  space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Enter your email address"
              />
              <button class="px-6 py-2 block rounded-full text-black-100 bg-white hover:text-white hover:border-2 hover:border-white hover:bg-black-100">
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-sm text-white md:block">
            CopyRights&copy; All rights reserverd 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
