import React from "react";
import { motion } from "framer-motion";
import AppWrap from "../wrapper/AppWrap";
import { images } from "../../constants";
import "./header.scss";
import cvFile from '../../assets/cv.pdf';



const Header = () => {
  const cvPath = '../../assets/cv.pdf';

  const handleDownload = () => {
    // Create a link to the CV file
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'cv.pdf'; // The filename users will see when downloading
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
  <div className="app__header">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info">
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Fewzya Yimam</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div>

        <div className="btn" onClick={handleDownload}>Download cv</div>
      </div>
    </motion.div>

    <div className="orbit">
      <motion.ul
        whileInView={{scale:[0, 1], transition:{duration: 1, ease: "easeInOut"}}}
        animate={{ rotate: "1turn" }}
        transition={{ repeat: Infinity, duration: 100, ease: "easeInOut" }}>
        {[
          images.redux,
          images.node,
          images.tailwind,
          images.react,
          images.javascript,
          images.html,
        ].map((img, index) => (
          <motion.li key={index}>
            <div className="img-cont">
              <img src={img} />
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </div>
  )
}

export default AppWrap(Header, "home");
