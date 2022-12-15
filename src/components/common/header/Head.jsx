import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1 style={{ color: "white" }}>Suvidha Foundation</h1>
            <span>EDUCATION FOR KIDS</span>
          </div>

          <div className="social">
            <a href="https://www.facebook.com/suvidhamahilamandal/">
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <a href="https://www.instagram.com/suvidhafoundation3/">
              <i className="fab fa-instagram icon"></i>
            </a>

            <a href="https://www.linkedin.com/company/suvidha-foundation/?originalSubdomain=mq">
              <i className="fab fa-linkedin icon"></i>
            </a>
            <a href="https://suvidhafoundationedutech.org/">
              <i className="fab fa-google icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
