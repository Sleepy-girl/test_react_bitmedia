import React from "react";
import { FooterStyles } from "./FooterStyles";

function Footer() {
  return (
    <FooterStyles>
      {/* <span className="logo footer">AppCo</span> */}
      <div className="wrapperFooter">
        <span className="logo logoFooter">AppCo</span>
        <span className="copyright">All rights reserved by ThemeTags</span>
        <span className="copyright">Copyrights © 2019.</span>
      </div>
    </FooterStyles>
  );
}

export default Footer;
