import React from 'react';
import { BsTwitter, BsInstagram,BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">
    
    <div>
      <a href='https://github.com/fefiy' target='_blank'>
      <AiFillGithub />
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/fewzya-yimam-338868231/' target='_blank'>
      <BsLinkedin />
      </a>
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;