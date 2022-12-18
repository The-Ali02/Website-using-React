import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14871.4271588621!2d79.10203932578186!3d21.27713567382785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c5b078211fe7%3A0xd6c9d2d1945e6e1b!2sSuvidha%20Mahila%20Mandal!5e0!3m2!1sen!2sin!4v1671355692677!5m2!1sen!2sin width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Nagpur, Maharashtra</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> info@suvidhafoundationedutech.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
