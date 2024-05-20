import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import "./SiteHeadingAndNav.css";
import {checkForLoggedInUser} from "../adapters/auth-adapter.js";
import { getUser } from "../adapters/user-adapter.js";
import { getOrganization } from "../adapters/organization-adapter.js";

export default function SiteHeadingAndNav() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  useEffect(() => {
    const getAccount = async () => {
      const [org, id] = await checkForLoggedInUser();
      console.log(org,id)
      if (id === -1) {
        return setCurrentUser(null);
      }
      if (org) {
        return setCurrentUser(await getOrganization(id));
      }
      return setCurrentUser(await getUser(id))

    };
    getAccount();
  },[])
  return <header>
    <div>
      <div class="spacer"></div>
      <a id='logo' href='/'>PEAR</a>
      <div class="spacer"></div>
    </div>
    <nav>
      <ul>
        {/* <li><NavLink to='/'>Home</NavLink></li> */}
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/programs'>Programs</NavLink></li>
        {
          currentUser
            ? 
              <li><NavLink to='/edit' end={true}>Profile</NavLink></li>
            : <>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/signup'>Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}
