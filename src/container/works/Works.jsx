import React, { useEffect, useState } from "react";
import "./works.scss";
import { images } from "../../constants";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import AppWrap from "../wrapper/AppWrap";
import { motion } from "framer-motion";

const Works = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const works = [
    {
      title: "Inventory and Selling Web App",
      imgUrl: images.inv,
      projectLink: "https://sample-inventory.vercel.app/",
      tags: ["Web App", "React-TypeScript"],
      stacks: ["React", "React-TypeScript"],
      description:
        "The Inventory and Sales App controls the flow of items in and out of the shop and manages sales. It includes permissions for different roles like stock keeper, cashier, sales representative, and admin. Admins have the flexibility to assign permissions based on user roles",
    },

    {
      title: "Real State App",
      description:
        "This all-inclusive real estate app streamlines the property search and management experience. Users can easily list their properties, save favorites, and schedule visits",
      imgUrl: images.realstate,
      projectLink: "https://real-state-mern.vercel.app/",
      codeLink: "https://github.com/fefiy/Real-state-Mern",
      tags: ["Web App", "ReactJS"],
    },
    {
      title: "Music Website",

      description: `Admin user name and pasword are fozi and fefu123 respectivly, This music website features user and admin roles. Users enjoy personalized playlists, favorite song marking, and a dedicated music player. Admins manage songs, albums, and artists, ensuring content control and organization,`,
      imgUrl: images.music,
      projectLink: "https://music-website-typescript-react.vercel.app/",
      codeLink: "https://github.com/fefiy/music-website-typescript-react",
      tags: ["Web App", "React-TypeScript"],
    },
    {
      title: "tictactoa game",
      description:
        "fully functional Tic-Tac-Toe game featuring player vs. player and player vs. computer modes. It offers two difficulty levels: 'easy' and 'hard,' utilizing the minimax algorithm for the computer's moves.",
      imgUrl: images.tictactoe,
      projectLink: "https://fefiy.github.io/tic-tac-toe-with-reactjs/",
      codeLink: "https://github.com/fefiy/tic-tac-toe-with-reactjs",
      tags: ["Web App", "ReactJS"],
    },
  ];

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  useEffect(() => {
    setFilterWork(works);
  }, []);

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["Web App", "ReactJS", "React-TypeScript", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}>
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio">
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img
                src={work.imgUrl}
                style={{ objectFit: "cover" }}
                alt={work.name}
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  delayChildren: 0.3,
                }}
                className="app__work-hover app__flex">
                {work?.projectLink && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex">
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}
                {work?.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex">
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" style={{ textTransform: "capitalize" }}>
                {work.title}
              </h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Works, "works");
