import React from "react";
import { MainPageStyles } from "./MainPageStyles";

function MainPage() {
  return (
    <MainPageStyles>
      <section className="header">
        <h1 className="logo">AppCo</h1>
        <h2>Brainstorming for desired perfect Usability</h2>
        <span>
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </span>
        <button>Views Stats</button>
      </section>
      <section className="content">
        <h3>Why small business owners love AppCo?</h3>
        <span>
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
