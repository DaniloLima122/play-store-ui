import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./main-container.css";
import Dropdown from "../Dropdown";
import { motion } from 'framer-motion';

const filterOptions = {
  category: ["Apps", "Games"],
  genre: ["Action", "Adventure","Stratergy"],
  price: ["R$ 0 - R$10", "R$ 11 - R$ 30"],
  device: ["Samsung GT", "Moto G5"],
};

const headerMainContainerAnimate = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  hidden: { 
    opacity: 0,
 },
}


export const MainContainer = ({ children }) => {
  return (
    <main>
      <div className="main-content">
        <motion.header variants={headerMainContainerAnimate} initial="hidden" animate="visible">
          <div className="left-content">
            <Dropdown
              filterName="category"
              filterOptions={filterOptions.category}
            />
            <Dropdown
              filterName="genre"
              filterOptions={filterOptions.genre}
            />
            <Dropdown
              filterName="price"
              filterOptions={filterOptions.price}
            />
            <Dropdown
              filterName="device"
              filterOptions={filterOptions.device}
            />

            <button>
              <FontAwesomeIcon icon={faTimes}/>
            </button>

          </div>
          <div className="right-content">
            <span>
              <FontAwesomeIcon icon={faTh} />
            </span>
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
          </div>
        </motion.header>

        {children}
      </div>
    </main>
  );
};
