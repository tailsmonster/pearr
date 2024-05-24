import React from "react";
import groupPhoto from "../assets/Group-Photo.png"
import "./About.css"

const AboutUs = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8 abt-box">
            <h1 className="title font has-text-centered abt-us-txt" id="about-us-header">About Us</h1>
            <div style={{margin: '0 20px'}}>
            <div className="content">
              <h2 className="subtitle font" style={{fontSize:'35px', margin: '10px 0', textAlign: 'center'}}>Project Purpose</h2>
              <p className="abt-text normal-font">
                PEAR NYC is a project aimed at connecting low-income families in
                New York City with affordable and enriching extracurricular
                activities for their children. Our goal is to bridge the
                opportunity gap and provide equal access to high-quality
                programs that support the development and well-being of young
                individuals.
              </p>
              <p className="abt-text normal-font">
                We understand the challenges faced by low-income families in
                navigating the complex landscape of extracurricular activities.
                PEAR NYC serves as a centralized platform that curates and
                presents information about various programs, making it easier
                for families to discover and enroll in activities that best suit
                their needs and interests.
              </p>
            </div>
            <div className="columns">
              <div className="column">
                <h2 className="subtitle font" style={{fontSize:'35px', margin: '10px 0', textAlign: 'center'}}>Our Team</h2>
              <div className="column">
                <figure className="image is-3by2" style={{display: 'flex', justifyContent: 'center', padding: '20px 0'}}>
                  <img src={groupPhoto} alt="Group Picture" />
                </figure>
              </div>
                <p className="abt-text normal-font team">
                  We are a dedicated team of individuals passionate about making
                  a positive impact in our community. With diverse backgrounds
                  and expertise, we have come together to create PEAR NYC and
                  strive to make a difference in the lives of low-income
                  families and their children.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
