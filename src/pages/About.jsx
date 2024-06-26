import React from "react";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { PiCopyrightLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { FillAnimX } from "../anim";
import { useState, useEffect } from "react";

const links = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Our Mission",
    href: "#mission",
  },
  {
    title: "Product Features",
    href: "#product",
  },
  {
    title: "Our Clients",
    href: "#clients",
  },
  {
    title: "Find Us",
    href: "#location",
  },
  {
    title: "About Us",
    href: "#about",
  },
];

const About = () => {
  const currentYear = new Date().getFullYear();

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth >= 990 ? (
        <div
          className="min-h-[50vh] bg-[#f4f0ea] px-12 py-12 flex flex-col gap-4 justify-center items-center cursor-pointer"
          id="about"
        >
          <div className="w-full flex flex-row flex-wrap justify-between items-start">
            <div className="my-8 w-1/4 flex flex-col gap-4 md:items-start sm:items-center">
              <p className="font-roboto font-bold text-xl text-[#204365]">
                Ready to elevate your space with our exquisite steel Almirahs ?
              </p>
              <a
                href="tel://+919489612345"
                className="no-underline bg-[#e84574] p-2 font-roboto transition duration-150 ease-out text-[#f4f0ea] hover:font-bold hover:text-[#e84574] hover:bg-[#204365] text-center"
              >
                Contact Us
              </a>
              <a
                className="no-underline bg-[#e84574] p-2 font-roboto transition duration-150 ease-out text-[#f4f0ea] hover:font-bold hover:text-[#e84574] hover:bg-[#204365] text-center"
                href="/Brochure.pdf"
                download
              >
                Download Brochure
              </a>
            </div>

            <div className="my-8 flex flex-col items-end">
              {links.map((eachLink, index) => (
                <a
                  key={index}
                  href={eachLink.href}
                  className="no-underline font-roboto font-medium text-xl text-[#e84574] transition duration-150 ease-out hover:text-[#204365]"
                >
                  {eachLink.title}
                </a>
              ))}
            </div>
          </div>

          <motion.hr
            variants={FillAnimX}
            initial="initial"
            animate="open"
            className="mb-12 w-full origin-center border border-[#e84574]"
          />

          <div className="w-full flex flex-row flex-wrap justify-between items-start">
            <div className="md:w-1/3 my-8">
              <h3 className="font-roboto font-bold text-2xl text-[#204365]">
                Our <span className="font-pinyon text-[#e84574]">Address</span>
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="#location"
                  className="no-underline w-[80%] font-roboto font-light text-xl text-[#204365]"
                >
                  <span className="font-normal">Head Office:</span> 1/1B, Simco
                  Road, &, Sathanur Main Rd, Indian Bank Colony,
                  Tiruchirappalli, Tamil Nadu 620021
                </a>
                <a
                  href="#location"
                  className="no-underline w-[80%] font-roboto font-light text-xl text-[#204365]"
                >
                  <span className="font-normal">Unit 1:</span> No 9 Pudhu Theru,
                  Puthukottai Road, Trichy - 07
                </a>
                <a
                  href="#location"
                  className="no-underline w-[80%] font-roboto font-light text-xl text-[#204365]"
                >
                  <span className="font-normal">Unit 2:</span> 183,
                  Kumaragiripettai, Ammapettai, Salem - 03
                </a>
              </div>
            </div>

            <div className="md:w-1/3 self-start flex flex-col gap-2 items-center my-8">
              <h3 className="font-roboto font-bold text-2xl text-[#204365]">
                Contact <span className="font-pinyon text-[#e84574]">Us</span>
              </h3>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aishwaryasteelcorporation@gmail.com"
                target="_blank"
                className="no-underline font-roboto font-light text-xl text-[#204365] transition duration-150 ease-out hover:text-[#e84574]"
              >
                aishwaryasteelcorporation@gmail.com
              </a>
              <a
                href="tel://+919489612345"
                className="no-underline font-roboto font-light text-xl text-[#204365] transition duration-150 ease-out hover:text-[#e84574]"
              >
                +91 94896 12345
              </a>
            </div>

            <div className="md:w-1/3 flex flex-col gap-2 items-end my-8">
              <h3 className="font-roboto font-bold text-2xl text-[#204365]">
                Get In <span className="font-pinyon text-[#e84574]">Touch</span>
              </h3>
              <a
                href="https://www.instagram.com/aishwaryasteelcorporation?igsh=MzRlODBiNWFlZA=="
                target="_blank"
                className="no-underline font-roboto font-light text-xl text-[#204365] flex flex-row gap-2 items-center transition duration-150 ease-out hover:text-[#e84574]"
              >
                <BsInstagram /> Instagram
              </a>
              <a
                href="whatsapp://send?phone=+919489612345"
                className="no-underline font-roboto font-light text-xl text-[#204365] flex flex-row gap-2 items-center transition duration-150 ease-out hover:text-[#e84574]"
              >
                <SiWhatsapp /> Whatsapp
              </a>
            </div>
          </div>

          <motion.hr
            variants={FillAnimX}
            initial="initial"
            animate="open"
            className="mb-12 w-full origin-center border border-[#e84574]"
          />

          <div className="w-full flex flex-row items-center justify-center">
            <p className="font-roboto font-medium text-l text-[#e84574] flex flex-row items-center gap-1">
              ©️ {currentYear} Aishwarya Steel Corporation. All rights reserved.
            </p>
          </div>
        </div>
      ) : (
        <div
          className="min-h-[50vh] bg-[#f4f0ea] flex flex-col justify-center items-center px-12 py-12"
          id="about"
        >
          <div className="w-full flex flex-col gap-12 my-8">
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="font-roboto font-bold text-xl text-[#204365] text-center">
                Ready to elevate your space with our exquisite steel Almirahs ?
              </p>
              <a
                href="tel://+919489612345"
                className="no-underline bg-[#e84574] p-2 font-roboto transition duration-150 ease-out text-[#f4f0ea] hover:font-bold hover:text-[#e84574] hover:bg-[#204365] text-center"
              >
                Contact Us
              </a>
              <a
                className="no-underline bg-[#e84574] p-2 font-roboto transition duration-150 ease-out text-[#f4f0ea] hover:font-bold hover:text-[#e84574] hover:bg-[#204365] text-center"
                href="/Brochure.pdf"
                download
              >
                Download Brochure
              </a>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="font-roboto font-bold text-2xl text-[#204365] text-center mb-2">
                Quick Links
              </h1>
              {links.map((eachLink, index) => (
                <a
                  key={index}
                  href={eachLink.href}
                  className="no-underline font-roboto font-medium text-xl text-[#e84574] transition duration-150 ease-out hover:text-[#204365]"
                >
                  {eachLink.title}
                </a>
              ))}
            </div>
          </div>

          <motion.hr
            variants={FillAnimX}
            initial="initial"
            animate="open"
            className="mb-12 w-full origin-center border border-[#e84574]"
          />

          <div className="w-full flex flex-col gap-12 mb-12">
            <div className="w-full flex flex-col items-center">
              <h3 className="font-roboto font-bold text-2xl text-[#204365]">
                Our <span className="font-pinyon text-[#e84574]">Address</span>
              </h3>
              <div className="flex flex-col gap-5 items-center text-center">
                <a
                  href="#location"
                  className="no-underline w-[80%] font-roboto font-light text-xl text-[#204365]"
                >
                  <span className="font-normal">Head Office:</span> 1/1B, Simco
                  Road, &, Sathanur Main Rd, Indian Bank Colony,
                  Tiruchirappalli, Tamil Nadu 620021
                </a>
                <a
                  href="#location"
                  className="no-underline w-[80%] font-roboto font-light text-xl text-[#204365]"
                >
                  <span className="font-normal">Unit 1:</span> No 9 Pudhu Theru,
                  Puthukottai Road, Trichy - 07
                </a>
                <a
                  href="#location"
                  className="no-underline w-[80%] font-roboto font-light text-xl text-[#204365]"
                >
                  <span className="font-normal">Unit 2:</span> 183,
                  Kumaragiripettai, Ammapettai, Salem - 03
                </a>
              </div>
            </div>

            <div className="w-full flex flex-col items-center">
              <a className="font-roboto font-bold text-2xl text-[#204365]">
                Contact <span className="font-pinyon text-[#e84574]">Us</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aishwaryasteelcorporation@gmail.com"
                target="_blank"
                className="no-underline font-roboto font-light text-xl text-[#204365] transition duration-150 ease-out hover:text-[#e84574]"
              >
                aishwaryasteelcorporation@gmail.com
              </a>
              <a
                href="tel://+919489612345"
                className="no-underline font-roboto font-light text-xl text-[#204365] transition duration-150 ease-out hover:text-[#e84574]"
              >
                +91 94896 12345
              </a>
            </div>

            <div className="w-full flex flex-col items-center">
              <h3 className="font-roboto font-bold text-2xl text-[#204365] text-center">
                Get In <span className="font-pinyon text-[#e84574]">Touch</span>
              </h3>
              <a
                href="https://www.instagram.com/aishwaryasteelcorporation?igsh=MzRlODBiNWFlZA=="
                target="_blank"
                className="no-underline font-roboto font-light text-xl text-[#204365] flex flex-row gap-2 items-center transition duration-150 ease-out hover:text-[#e84574]"
              >
                <BsInstagram /> Instagram
              </a>
              <a
                href="whatsapp://send?phone=+919489612345"
                className="no-underline font-roboto font-light text-xl text-[#204365] flex flex-row gap-2 items-center transition duration-150 ease-out hover:text-[#e84574]"
              >
                <SiWhatsapp /> Whatsapp
              </a>
            </div>
          </div>

          <motion.hr
            variants={FillAnimX}
            initial="initial"
            animate="open"
            className="mb-12 w-full origin-center border border-[#e84574]"
          />

          <div className="w-full flex flex-row gap-0 items-center">
            <p className="font-roboto font-medium text-l text-center text-[#e84574] flex flex-row items-center">
              ©️ {currentYear} Aishwarya Steel Corporation. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
