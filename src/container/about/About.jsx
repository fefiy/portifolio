import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {images} from "../../constants"

import AppWrap from '../wrapper/AppWrap';
import './about.scss';
// import { urlFor, client } from '../../client';
const abouts = [
  {
    title:"FrontEnd developer",
    imgUrl:images.front,
    description: "With Two year of experience in front-end development, I'm proficient in React, Tailwind CSS, Material-UI, and Redux for state management. "
  },
  {
    title:"Backend developer",
    imgUrl:images.back,
    description: "With Two year of experience, I focus on back-end development using Node.js, MySQL, MongoDB, and PostgreSQL. create secure applications using JSON Web Tokens (JWT) for authentication and authorization"
  },
  {
    title:"mobile app developer",
    imgUrl:images.reactNative,
    description: "with 2 month experience,mobile app using React Native, with a backend built using Node.js and MongoDB, targeting both iOS and Android platforms:"
  },
]
const About = () => {


  return (
    <>
      <h2 className="head-text">Things <span>I am </span> <br />Good  <span>At</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p></p>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
        
      </div>
    </>
  );
};

export default AppWrap(About, "about")