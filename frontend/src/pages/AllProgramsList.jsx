import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAllPrograms } from "../adapters/program-adapter.js";
import CurrentUserContext from "../contexts/current-user-context";
import "./AllProgramsList.css";

const AllProgramsPage = () => {
  function redirectToPage() {
    window.location.href = "https://www.example.com";
  }

  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState("");
  const {isOrganization, currentUser} = useContext(CurrentUserContext);

  useEffect(() => {
    const getPrograms = async () => {
      const data = await getAllPrograms();
      if (data) setPrograms(data);
      if (error) setError(error);
    };
    getPrograms();
  }, []);

  return (
    <>
      <h1>ALL PROGRAMS HERE</h1>
      <ul>
        {programs.map((program, idx) => {
          return (
            <li key={idx}>
              <div>
                <img id="li-thumbnail" src={program.imgUrl} alt={program.id} />
                <Link to={`/programs/${program.id}`}>{program.name}</Link>
                {currentUser && isOrganization && program.organizationId === currentUser.id && <NavLink to={`/programs/${program.id}/edit`}><button>Edit</button></NavLink>}
                {/* <p>{program.name}</p> */}
              </div>
            </li>
          );
        })}
      </ul>
      {isOrganization && 
      <Link to="/programs/add">
        <button>Add Program Button</button>
      </Link>
      }
    </>
  );
};

export default AllProgramsPage;
