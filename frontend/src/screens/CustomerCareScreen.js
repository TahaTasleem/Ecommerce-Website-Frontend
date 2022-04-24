import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Logo from "../utils/react-announcement-logo.png";
import Announcement from 'react-announcement'

export default function CustomerCareScreen()  {
  
    const form = useRef();
    function sendEmail(e)  {    
        e.preventDefault();
    
        emailjs.sendForm('service_lhiz5if', 'template_gci7yfr', form.current, 'user_ex39nyTTiELy7x5CXgnQr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
      <>
        <Announcement
          title="Visit our Facebook Page"
          subtitle="   Donot want to miss any events?. Reach us out on our Facebook Page!"
          link="https://www.facebook.com/darazpk?scm=1003.4.icms-zebra-5029545-2833168.OTHER_5370750444_2485565"
          imageSource={Logo}
          daysToLive={0}
          secondsBeforeBannerShows={2}
          closeIconSize={30}
          animateInDuration={5}
          animateOutDuration={50}
      />
    <h1 className="title">Contact Us</h1>
    <p>Let us know what you think! In order to provide better service,
         please do not hesitate to give us your feedback. Thank you.</p><hr/>
    <form ref={form} onSubmit={sendEmail}>
     
    <div className="form-group">
        <label className="mb-0">Your name<span className="text-danger">*</span></label>
        <input name="name" type="text" className="form-control" placeholder="Name" />
    </div>
        <div className="form-group">
        <label className="mb-0">Your email<span className="text-danger">*</span></label>
        <input name="email" type="email" className="form-control" placeholder="Email" />
        </div>
         <div className="form-group">
            <label className="mb-0">Message<span className="text-danger">*</span></label>
            <textarea name="message" type="text" className="form-control" placeholder="Message"/>
            </div>
        <p className="text-center mb-0"><input type="submit" className="btn btn-primary btn-lg w-100 text-uppercase" value="Submit Now" /></p>
    </form>
   
    </>
  );
};
