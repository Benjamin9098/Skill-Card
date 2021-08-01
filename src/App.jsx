import React from "react";
import Img from "./images/profile.jpg";
import "./index.css";
import { useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const App = () => {
  const [profile, setSkills] = useState(
    <div className="box center">
      <img className="image" src={Img} alt="profile" />
      <div>
        <p className="user_name">Mohitya Pratap Singh Parihar</p>
        <p className="user_email">
          <a
            href="mailto:mohityapratapsingh@gmail.com"
            target="_mail"
            style={{ color: "#AFB9c2", textDecoration: "none" }}
          >
            mohityapratapsingh@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
  const change = () => {
    setSkills(
      <div className="left_container off">
        <p>Skills</p>
        <div className="skills">
          <div>C++</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React.js</div>
        </div>
        <div className="icons">
          <div className="g">
            <a
              href="https://github.com/mohitya10"
              target="_gith"
              style={{ color: "#AFB9c2" }}
            >
              <GitHubIcon />
            </a>
          </div>
          <div className="l">
            <a
              href="https://www.linkedin.com/in/mohitya-pratap-singh-parihar-33bb2b1a9/"
              target="_linkdin"
              style={{ color: "#AFB9c2" ,hover: '#5c5b5b' }}
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="f">
            <a
              href="https://www.instagram.com/mohitya_m.pratap/ "
              target="_intagram"
              style={{ color: "#AFB9c2" }}
            >
              <InstagramIcon />
            </a>
          </div>
          <div className="t">
            <a
              href="https://twitter.com/mohityaprataps2"
              target="_twitter"
              style={{ color: "#AFB9c2" }}
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    );
  };

  const dChange = () => {
    setSkills(
      <div className="box center">
        <img className="image" src={Img} alt="profile" />
        <div>
          <p className="user_name">Mohitya Pratap Singh Parihar</p>
          <p className="user_email">
            <a
              href="mailto:mohityapratapsingh@gmail.com"
              target="_mail"
              style={{ color: "#AFB9c2", textDecoration: "none" }}
            >
              mohityapratapsingh@gmail.com
            </a>
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="main center">
        <div className="box center">
          {profile}
          <button
            className="arr_container center"
            onClick={change}
            onDoubleClick={dChange}
          >
            <i style={{ backgroundColor: "white" }}>
              <ArrowForwardIcon style={{ backgroundColor: "white" }} />
            </i>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
