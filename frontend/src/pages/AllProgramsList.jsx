import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAllPrograms } from "../adapters/program-adapter.js";
import CurrentUserContext from "../contexts/current-user-context";
import { getOrganization, getPrograms } from "../adapters/organization-adapter.js";
import { checkForLoggedInUser } from "../adapters/auth-adapter.js";
import "./AllProgramsList.css";
import { getUser } from "../adapters/user-adapter.js";

const AllProgramsPage = () => {
  function redirectToPage() {
    window.location.href = "https://www.example.com";
  }

  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState("");
  const {isOrganization, currentUser, setCurrentUser} = useContext(CurrentUserContext);

  useEffect(() => {
    const getThePrograms = async () => {
    const [org,id] = await checkForLoggedInUser();
      if (org) {
        const [organization] = await getOrganization(id);
        setCurrentUser(organization);
        const [data] = await getPrograms(organization.id);
        setPrograms(data);
      } else {
          setCurrentUser(id !== -1 ? (await getUser(id))[0] : null);
          const data = await getAllPrograms();
          if (data) setPrograms(data);
          if (error) setError(error);
      }
    };
    getThePrograms();
  }, []);

  return (
    <>
      <h1>ALL PROGRAMS HERE</h1>
      <ul>
        {programs.map((program, idx) => {
          // console.log(program);
          // console.log(currentUser,isOrganization)
          return (
            <li key={idx}>
              <div>
                <img id="li-thumbnail" src={program.imgUrl} alt={program.id} />
                <Link to={`/programs/${program.id}`}>{program.name}</Link>
                {currentUser !== null && isOrganization && program.organizationId === currentUser.id && <NavLink to={`/programs/${program.id}/edit`}><button>Edit</button></NavLink>}
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
