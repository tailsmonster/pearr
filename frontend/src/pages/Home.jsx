import { getAllPrograms } from "../adapters/program-adapter.js";
import { NavLink, Link,  useNavigate } from "react-router-dom";

import Waves01SVG from '../components/Waves01SVG.jsx'
import Waves02SVG from '../components/Waves02SVG.jsx'
import KidCompassSVG from '../components/KidCompassSVG.jsx'
import { useState, useEffect, useContext } from "react";

import "./Home.css";
import CurrentUserContext from "../contexts/current-user-context.js";




export default function HomePage() {
  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState("");
  const {currentUser} = useContext(CurrentUserContext);
  useEffect(() => {
    const getPrograms = async () => {
      const data = await getAllPrograms();
      console.log(data);
      if (data) setPrograms([data[data.length-1], data[data.length-2], data[data.length-3]]);
      if (error) setError(error);
    };
    getPrograms();
    console.log(programs);
  }, []);

  const headliner = "Youth Resources for Children in NYC ";
  const subtitle = "A centralized platform to help parents to find resources for their kids.";

  return (
    <>
      <section id="bnr-section" className="bnr-section">
        <div id="bnr-text-div">
          <h2 id="bnr-text" className="libre-baskerville-bold">{headliner}</h2>
          <p id="bnr-subtitle" className="open-sans">{subtitle}</p>
        </div>
        <div>
          {/* <KidCompassSVG /> */}
          <img src="https://www.freeiconspng.com/thumbs/kids-png/kids-png--8.png" alt="" />
        </div>
      </section>

      <Waves01SVG />
      {
        (currentUser === null || currentUser.id === -1) &&
      <section id="home-acc-buttons-section">
        <div id="login-signup-buttons">
          {/* <div className="home-space2"></div> */}
          <div className="buttons1"> 
          <NavLink to='/signup'>

            <button id="signup-button" className="raleway">SIGN UP</button>
          </NavLink>

          </div>
          <div className="buttons2">
            <NavLink to='/login'>
            <button id="login-button" className="raleway">LOGIN</button>
            </NavLink>
          </div>
          {/* <div className="home-spacer2"></div> */}
        </div>
      </section>
}

      <Waves02SVG />



      <section id="programs-section">
        <div id="program1">
          {/* <img src={programs[programs.length - 1].imgUrl} alt="hi" /> */}

        <ul>
          {programs.map((program, idx) => {
            return (
              <li key={idx}>
                <div className={`hm-card-${idx}`}>
                  <div className={`hm-card-img`}>
                    <img className={`hm-card-img`}src={program.imgUrl} alt={program.name} />
                  </div>
                  <div className={`hm-card-content-${idx}`}>
                    <a href="#">
                      <span className={`hm-card-title`}>{program.name}</span>
                    </a>
                    <p className={`hm-card-desc`}>{program.bio}
                    </p>

                    <a className="action" href="#">
                      Find out more
                      <span aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>
                </div>


                {/* <div>
                  <img id="li-thumbnail" src={program.imgUrl} alt={program.id} />
                  <Link to={`/programs/${program.id}`}>{program.name}</Link>
                  <p>{program.name}</p>
                </div> */}
              </li>
            );
          })}
        </ul>

        </div>
        <div id="program2"></div>
        <div id="program3"></div>
      </section>
    </>
  );
}
