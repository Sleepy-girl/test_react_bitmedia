import React from "react";
import { MainPageStyles } from "./MainPageStyles";
import mobile from "../assets/images/mobile.svg";

function MainPage() {
  return (
    <MainPageStyles>
      <section className="header">
        <div className="wrapper">
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
          <li className="iconDesign">
            <span className="listTitle">Clean Design</span>
            <p className="listDescription">
              Increase sales by showing true dynamics of your website.
            </p>
          </li>
          <li className="iconData">
            <span className="listTitle">Secure Data</span>
            <p className="listDescription">
              Build your online store’s trust using Social Proof & Urgency.
            </p>
          </li>
          <li className="iconRetina">
            <span className="listTitle">Retina Ready</span>
            <p className="listDescription">
              Realize importance of social proof in customer’s purchase
              decision.
            </p>
          </li>
        </ul>
      </section>
      <section className="footer">
        <form>
          <label>
            <input type="text" placeholder="Enter your email" />
            <button className="btnFooter">Subscribe</button>
          </label>
        </form>
        <div className="wrapperFooter">
          <span className="logoFooter">AppCo</span>
          <span className="copyright">All rights reserved by ThemeTags</span>
          <span className="copyright">Copyrights © 2019.</span>
        </div>
      </section>
    </MainPageStyles>
  );
}

export default MainPage;
