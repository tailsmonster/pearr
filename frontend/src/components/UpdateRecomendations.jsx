import React, { useState } from 'react';

const UpdateRecommendations = () => {
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted:', { username, password, profilePicture });
    
    // Reset form fields
    // setRecommendation('');
  };

  return (
    <>
      <form id="class" onSubmit={handleSubmit}>
        <input type="radio" id="yes" name="fav_language" value="HTML"/>
        <label for="html">HTML</label><br/>
        <input type="radio" id="no" name="fav_language" value="CSS"/>
        <label for="css">CSS</label><br/>
      </form>
    </>
  )
};

export default UpdateRecommendationsPage;