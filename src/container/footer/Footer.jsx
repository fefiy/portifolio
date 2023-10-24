import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import AppWrap from ".././wrapper/AppWrap"
import MotionWrap from ".././wrapper/MotionWrap"
import './footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;



  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

console.log(import.meta.env.VITE_SERVICE_ID)
  const templateParams = {
    from_name: formData.username,
    message:formData.message,
    from_email:formData.email,
    to_name:"Fewzya Yimam",
  }
console.log("templateparams", templateParams)
  const service_id = import.meta.env.VITE_SERVICE_ID
  const templete_id= import.meta.env.VITE_EMAIL_TAMPLATE
  const publick_key = import.meta.env.VITE_PUBLIK_KEY 
  console.log(service_id, templete_id, publick_key)
  console.log(templateParams)

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs.send(service_id, templete_id, templateParams, publick_key)
      .then((result) => {
        setLoading(false)
         setIsFormSubmitted(true)
          console.log("result", result.text);
      }, (error) => {
        setLoading(false)
          console.log("err",error.text);
      });
   

   
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:foziayimam87@gmail.com" className="p-text">foziayimam87@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+251940058283" className="p-text">+251940058283</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);