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

  const headliner =
    "PEAR is a user-friendly platform providing information to help NYC's low-income parents access free resources for their children.";

  return (
    <>
      <section id="bnr-section" class="bnr-section">
        <div id="bnr-text-div">
          <p id="bnr-text" class="bnr-text">
            {headliner}
          </p>
        </div>
      </section>
      <div class="wave-container"></div>

      <section>
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
