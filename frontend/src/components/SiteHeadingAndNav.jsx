import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import "./SiteHeadingAndNav.css";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header>
    <a id='logo' href='/'>PEAR</a>
    <nav>
      <ul>
        {/* <li><NavLink to='/'>Home</NavLink></li> */}

        {
          currentUser
            ? <>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/programs'>Programs</NavLink></li>
              <li><NavLink to='/edit' end={true}>Profile</NavLink></li>
            </>
            : <>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/programs'>Programs</NavLink></li>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/signup'>Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}
