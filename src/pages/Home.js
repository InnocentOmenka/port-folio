import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Innocent</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/innocent-omenkaa"><LinkedInIcon /></a>
          <a href="mailto:omenka2innocent@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/InnocentOmenka"><GitHubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Java, Spring, NodeJS,
              MySQL, Postgres, Docker,  MongoDB, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
