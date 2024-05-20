import { getAllPrograms } from "../adapters/program-adapter.js";
import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect, useContext } from "react";

import "./Home.css";


export default function HomePage() {
  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getPrograms = async () => {
      const data = await getAllPrograms();
      console.log(data);
      if (data) setPrograms(data);
      if (error) setError(error);
    };
    getPrograms();
    console.log(programs);
  }, []);

  const headliner = "Youth Resources for Children in NYC ";
  const subtitle = "A centralized platform for parents to find ";

  return (
    <>
      <section id="bnr-section" className="bnr-section">
        <div id="bnr-text-div">
          <h2 id="bnr-text" className="bnr-text libre-baskerville-bold">{headliner}</h2>
          <p id="bnr-subtitle" className="bnr-subtitle">{subtitle}</p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>


      <section id="home-acc-buttons-section">
        <div id="login-signup-buttons">
          <div className="home-space2"></div>
          <button>SIGN UP</button>
          <button>LOGIN</button>
          <div className="home-spacer2"></div>
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
