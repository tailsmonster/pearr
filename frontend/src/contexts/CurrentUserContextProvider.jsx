import { useEffect, useState } from 'react';
import CurrentUserContext from './current-user-context';
import { checkForLoggedInUser } from "../adapters/auth-adapter.js";
import { getUser } from "../adapters/user-adapter.js";
import { getOrganization } from "../adapters/organization-adapter.js";

export default function CurrentUserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({}); 
  const [isOrganization, setIsOrganization] = useState(false);
  const context = { currentUser, setCurrentUser, isOrganization, setIsOrganization };

  const getAccount = async () => {
    const [org, id] = await checkForLoggedInUser();
    console.log(org, id);
    if (id === -1) {
      setIsOrganization(false);
      return setCurrentUser(null);
    }
    if (org) {
      setIsOrganization(true);
      const [organization] = await getOrganization(id);
      console.log(organization);
      return setCurrentUser(organization);
    }
    setIsOrganization(false);
    const [user] = await getUser(id);
    console.log(user);
    return setCurrentUser(user);
  };
  
  useEffect(() => {
  getAccount();
  },[])

  return (
    <CurrentUserContext.Provider value={ context }>
      {children}
    </CurrentUserContext.Provider>
  );
}
