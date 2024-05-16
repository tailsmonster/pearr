import React, { useState } from 'react';

const UpdateForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted:', { username, password, profilePicture });
    
    // Reset form fields
    setUsername('');
    setPassword('');
    setProfilePicture('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name='username'
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name='password'
        />
      </div>
      <div>
        <label htmlFor="profilePicture">Profile Picture URL:</label>
        <input
          type="text"
          id="profilePicture"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          name='pfp_url'
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;