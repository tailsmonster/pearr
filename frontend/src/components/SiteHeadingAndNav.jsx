import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import "./SiteHeadingAndNav.css";

export default function SiteHeadingAndNav() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  useEffect(() => {
    // const getAccount = async () => {
    //   const [org, id] = await checkForLoggedInUser();
    //   console.log(org,id)
    //   if (id === -1) {
    //     return setCurrentUser(null);
    //   }
    //   if (org) {
    //     return setCurrentUser(await getOrganization(id));
    //   }
    //   return setCurrentUser(await getUser(id))

    // };
    // getAccount();
  },[])
  return <header>
    <div>
      <div className="spacer"></div>

      <a id='logo' href='/'>PEAR</a>

      <div className="spacer"></div>
    </div>
    <nav>
      <ul>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/about'>ABOUT</NavLink></li>
        <li><NavLink to='/opportunities'>OPPORTUNITIES</NavLink></li>
        {
          currentUser
            ? 
              <li><NavLink to='/edit' end={true}>{currentUser.username}</NavLink></li>
            : <>
              <li><NavLink to='/login'>LOGIN</NavLink></li>
              <li><NavLink to='/signup'>SIGN UP</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}
