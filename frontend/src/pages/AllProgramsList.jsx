import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAllPrograms } from "../adapters/program-adapter.js";
import CurrentUserContext from "../contexts/current-user-context";
import { getOrganization, getPrograms } from "../adapters/organization-adapter.js";
import { checkForLoggedInUser } from "../adapters/auth-adapter.js";
import { getUser } from "../adapters/user-adapter.js";
import "./AllProgramsList.css";

const AllProgramsPage = () => {
  function redirectToPage() {
    window.location.href = "https://www.example.com";
  }

  const [programs, setPrograms] = useState([]);
  const [error, setError] = useState("");
  const {isOrganization, currentUser, setCurrentUser} = useContext(CurrentUserContext);

  const nameTextLimiter3000 = (str) => {
  if (str.length > 26) {
    str = str.substring(0, 26) + '...';
  }
  return str;
}
  
  const descTextLimiter3000 = (str) => {
  if (str.length > 300) {
    str = str.substring(0, 256) + '...';
  }
  return str;
}

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
    <div id="opportunities-header-wrapper">
      <h1 className="normal-font" id="opporunities-header">{isOrganization ? "OUR OPPORTUNITIES HERE" : "ALL OPPORTUNITIES HERE"}</h1>
    </div>
        {programs.map((program, idx) => {
          // console.log(program);
          // console.log(currentUser,isOrganization)
          return (
            <div key={idx}>
                  {/* <>
                  <div key={idx}>
                  <div className={`hm-card`}>
                    <div className={`hm-card-img`}>
                      <img className={`hm-card-img`}src={program.imgUrl} alt={program.name} />
                    </div>
                    <div className={`hm-card-content`}>
                      <NavLink to={`/opportunities/${program.id}`}>
                        <span className={`hm-card-title`}>{nameTextLimiter3000(program.name)}</span>
                      </NavLink>
                      <p className={`hm-card-desc`}>{descTextLimiter3000(program.bio)}
                      </p>
                      
                      <NavLink className="action" to={`/opportunities/${program.id}`}>
                        Find out more
                        <span aria-hidden="true">
                          →
                        </span>
                      </NavLink>
                      {currentUser !== null && isOrganization && program.organizationId === currentUser.id && <NavLink to={`/programs/${program.id}/edit`}><button>Edit</button></NavLink>}
                    </div>
                  </div>
                </div>
                  </>  */}
                  {idx % 2 === 0 ? <>
                  <div className="opProgram">
                      <div className="opProgramDescDiv">
                        <h2 className="normal-font">{program.name}</h2>
                        <p className="normal-font">{program.bio}</p>
                      </div>
                      <div className="opProgramImgDiv">
                        <div>
                          <img className="li-card-img" src={program.imgUrl} alt={program.id} />
                          <Link to={`/opportunities/${program.id}`}>
                          <button className="action" type='button'>Learn More?</button>
                          </Link>
                          {currentUser !== null && isOrganization && program.organizationId === currentUser.id && <NavLink to={`/opportunities/${program.id}/edit`}><button>Edit</button></NavLink>}
                          
                        </div>
                      </div>
                  </div>
                  </> 
                  :
                  <>
                    <div className="opProgram">
                      <div className="opProgramImgDiv">
                        <div>
                          <img className="li-card-img" src={program.imgUrl} alt={program.id} />
                          <Link to={`/opportunities/${program.id}`}>
                          <button className="action">Learn More?</button>
                          </Link>
                          {currentUser !== null && isOrganization && program.organizationId === currentUser.id && <NavLink to={`/opportunities/${program.id}/edit`}><button>Edit</button></NavLink>}
                        </div>
                      </div>
                      <div className="opProgramDescDiv">
                        <h2 className="normal-font">{program.name}</h2>
                        <p className="normal-font">{program.bio}</p>
                      </div>
                    </div>
                  </>
                  }
                
                {/* <Link to={`/opportunities/${program.id}`}>{program.name}</Link> */}

                {/* <p>{program.name}</p> */}
            </div>
          );
        })}
      {isOrganization && 
      <div className="programsection">
        <Link to="/opportunities/add" >
          {/* <button>Add Program Button</button> */}
          <div className="add-program-button">
            <button className="add-programs">
              <span className="add-prgrm-text">+</span>
            </button>
          </div>
        </Link>
      </div>
      }
    </>
  );
};

export default AllProgramsPage;
