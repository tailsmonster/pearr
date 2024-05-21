import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';
import { getUser, updateUser } from '../adapters/user-adapter';
import { logUserOut } from '../adapters/auth-adapter';
import { checkForLoggedInUser } from '../adapters/auth-adapter';
import {getOrganization} from "../adapters/organization-adapter"

export default function EditAccountPage() {
  const { currentUser, isOrganization, setIsOrganization, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  // console.log(currentUser);
  
  useEffect(() => {
    const getAccount = async () => {
      const [org, id] = await checkForLoggedInUser();
      console.log(org, id);
      if (id === -1) {
        setIsOrganization(false);
        setCurrentUser(null);
        return navigate('/access-denied')
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
    getAccount();
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      id: currentUser.id,
      username,
      password,
      pfp_url: profilePicture,
    };
    await updateUser(updatedUser);
    const [user] = await getUser(currentUser.id);
    setCurrentUser(user);
    navigate('/edit');
  };

  const logOut = async() => {
    await logUserOut();
    setCurrentUser(null)
    navigate('/');
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Edit Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username" className="label">Username</label>
            <div className="control">
              <input
                id="username"
                className="input"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="password" className="label">Password</label>
            <div className="control">
              <input
                id="password"
                className="input"
                type="password"
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="profilePicture" className="label">Profile Picture</label>
            <div className="control">
              <input
                id="profilePicture"
                className="input"
                type="text"
                placeholder="Enter the URL of your profile picture"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
      <button onClick={logOut}>Log Out</button>
    </section>
  );
}