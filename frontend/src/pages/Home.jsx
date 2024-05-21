import { getAllPrograms } from "../adapters/program-adapter.js";
import { Link, useNavigate } from "react-router-dom";
import Waves01SVG from '../components/Waves01SVG.jsx'
import { useState, useEffect, useContext } from "react";

import "./Home.css";




export default function HomePage() {
  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getPrograms = async () => {
      const data = await getAllPrograms();
      console.log(data);
      if (data) setPrograms([data[data.length-1], data[data.length-2]]);
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
          <img src="" alt="" />
        </div>
      </section>

      <Waves01SVG />

      <section id="home-acc-buttons-section">
        <div id="login-signup-buttons">
          {/* <div className="home-space2"></div> */}
          <div className="buttons1"> 
            <button id="signup-button" className="raleway">SIGN UP</button>
          </div>
          <div className="buttons2">
            <button id="login-button" className="raleway">LOGIN</button>
          </div>
          {/* <div className="home-spacer2"></div> */}










        </div>
      </section>


      <section id="">
        <div id="program1">
          {/* <img src={programs[programs.length - 1].imgUrl} alt="hi" /> */}

          <ul>
        {programs.map((program, idx) => {
          return (
            <li key={idx}>
              <div>
                <img id="li-thumbnail" src={program.imgUrl} alt={program.id} />
                <Link to={`/programs/${program.id}`}>{program.name}</Link>
                {/* <p>{program.name}</p> */}
              </div>
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
