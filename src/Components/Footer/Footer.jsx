import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footerImgDiv">
        <img src="/Assets/images/logo-1.png" alt="footer image" />
      </div>

      <div className="footerTextDiv">
        <p className="footerText">Made with <span>&#128151;
</span> by Martin Wachira</p>
      </div>
    </div>
  );
}

export default Footer;
