import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <WhatsAppIcon />
      </div>
      <p> &copy; 2022 sam-fullstack.netlify.app</p>
    </div>
  );
}

export default Footer;
