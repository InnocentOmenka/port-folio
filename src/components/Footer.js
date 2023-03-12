import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <a href="https://www.facebook.com/omenkinno2"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/in/innocent-omenkaa"><LinkedInIcon /></a>
        <a href="https://github.com/InnocentOmenka"><GitHubIcon /></a>
      </div>
      <p> &copy; 2023 innocodes.com</p>
    </div>
  );
}

export default Footer;
