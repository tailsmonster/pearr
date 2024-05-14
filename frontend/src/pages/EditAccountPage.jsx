import React, { useState } from 'react';

export default function EditAccountPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', { username, email, password, profilePicture });
    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setProfilePicture('');
  };

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
            <label htmlFor="email" className="label">Email</label>
            <div className="control">
              <input
                id="email"
                className="input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Enter your password"
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
    </section>
  );
}