import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';
import Link from "next/link";
// Assuming you're using React Router for navigation
import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import navlinks from "../constants/navlinks";
import { Navlink } from ".";
import Image from "next/image";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [dropdownWidth, setDropdownWidth] = useState("w-170");
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleNavlinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`px-3 sm:px-12 py-8 relative`}
      viewport={{ once: true }}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 flex justify-center items-center" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-5 sm:gap-8`}
      >
        <Image
          src="/cds_circle.png"
          alt="cds"
          width={900}
          height={900}
          className="w-8 sm:w-[35px] sm:h-[35px] object-contain "
        />
        <h2 className="font-bold sm:text-[20px] text-[15px] leading-[30.24px] text-white">
          CodeDeployingSquad
        </h2>
        <div className="relative">
          <Image
            width={900}
            height={900}
            src="/menu.svg"
            alt="menu"
            className="w-5 sm:w-[24px] sm:h-[24px] object-contain cursor-pointer"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div
              className={`absolute top-full pb-5 bg-black  rounded shadow-lg z-20 w-[200px]  -ml-[180px]`}
            >
              <ul className=" px-2">
                {
                  navlinks.map(e => {
                    return (
                      <Navlink key={e.tag} label={e.label} tag={e.tag} onClick={handleNavlinkClick}/>
                    )
                  })
                }
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
