import React from "react";
import { MainPageStyles } from "./MainPageStyles";
import mobile from "../assets/images/mobile.svg";

function MainPage() {
  return (
    <MainPageStyles>
      <section className="header">
        <div className="wrapper">
          {/* ${backgroundHeader} */}
          <h1 className="logo">AppCo</h1>
          <h2>
            Brainstorming
            <span className="title"> for desired perfect Usability</span>
          </h2>
          <span className="desribtion">
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </span>
          <button className="btnStats">Views Stats</button>
        </div>
        <div className="mobile">
          <img src={mobile} alt="iPhoneX" height="561" />
        </div>
      </section>

      <section className="content">
        <h3>
          <span className="contentTitle">Why </span>
          small business owners love
          <span className="contentTitle"> AppCo?</span>
        </h3>
        <span className="contentDescribtion">
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </span>
        <ul>
          <li>
            <span>Clean Design</span>
            <p>Increase sales by showing true dynamics of your website.</p>
          </li>
          <li>
            <span>Secure Data</span>
            <p>Build your online store’s trust using Social Proof & Urgency.</p>
          </li>
          <li>
            <span>Retina Ready</span>
            <p>
              Realize importance of social proof in customer’s purchase
              decision.
            </p>
          </li>
        </ul>
      </section>
      <section className="footer">
        <form>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
        <span>AppCo</span>
        <span>All rights reserved by ThemeTags</span>
        <span>Copyrights © 2019.</span>
      </section>
    </MainPageStyles>
  );
}

export default MainPage;
