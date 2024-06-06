import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppWrap from "../wrapper/AppWrap";
import MotionWrap from "../wrapper/MotionWrap";
import "./skills.scss";
import { images } from "../../constants";

const Skills = () => {
  const experiences = [
    { 
      year: "Oct 2022 - Feb 2023 | NTERNSHIP  ",
      works:[
        {
        name:"FULL STACK DEVELOPER (ASP.NET MVC)",
        company:"Africom Technology Plc"
      },
     
    ]
    },
    {
      year:"April 2024  - Present | CONTRACTUAL ",
      works:[
        {
          name: "WEB APPLICATION DEVELOPER (MERN)",
          company:"Pawe Radiator Company"
        }
      ]
    }
    
  ]
  const skill = [
    {
      icon: images.react,
      name: "ReactJS",
    },
    {
      icon: images.javascript,
      name: "Javascript",
    },
    {
      icon: images.sass,
      name: "Sass",
    },
    {
      icon: images.tailwind,
      name: "Tailwind",
    },
    {
      icon: images.html,
      name: " HTML",
    },
    {
      icon: images.css,
      name: "css",
    },
    {
      icon: images.redux,
      name: "Redux",
    },
    {
      icon: images.node,
      name: "NodeJs",
    },
    {
      icon: images.git,
      name: "Git",
    },
    {
      icon: images.python,
      name: "Python",
    },
    {
      icon: images.mongodb,
      name: "MongoDb",
    },
  ];
  

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skill.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}>
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}>
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text" style={{fontSize:"18px"}}>{work.company}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
