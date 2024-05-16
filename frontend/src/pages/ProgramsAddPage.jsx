import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';
import { createProgram } from '../adapters/program-adapter';

const ProgramsAddPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [about, setAbout] = useState('');
  const [borough, setBorough] = useState('');
  const [url, setUrl] = useState('');
  const [color, setColor] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProgram = {
      name,
      bio: about,
      website_url: url,
      borough,
      organization_id: currentUser.id,
      img_url: picture,
      color,
      rating,
    };
    await createProgram(newProgram);
    navigate('/programs');
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Add Program</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name" className="label">Name</label>
            <div className="control">
              <input
                id="name"
                className="input"
                type="text"
                placeholder="Enter program name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="picture" className="label">Picture</label>
            <div className="control">
              <input
                id="picture"
                className="input"
                type="text"
                placeholder="Enter picture URL"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="about" className="label">About</label>
            <div className="control">
              <textarea
                id="about"
                className="textarea"
                placeholder="Enter program description"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="field">
            <label htmlFor="borough" className="label">Borough</label>
            <div className="control">
              <input
                id="borough"
                className="input"
                type="text"
                placeholder="Enter borough"
                value={borough}
                onChange={(e) => setBorough(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="url" className="label">URL</label>
            <div className="control">
              <input
                id="url"
                className="input"
                type="text"
                placeholder="Enter program URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="color" className="label">Color</label>
            <div className="control">
              <input
                id="color"
                className="input"
                type="text"
                placeholder="Enter program color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="rating" className="label">Rating</label>
            <div className="control">
              <input
                id="rating"
                className="input"
                type="number"
                placeholder="Enter program rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary">Add Program</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProgramsAddPage;