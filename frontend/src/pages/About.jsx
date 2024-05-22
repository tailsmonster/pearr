import React from "react";

const AboutUs = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            <h1 className="title font has-text-centered">About Us</h1>
            <div className="content">
              <h2 className="subtitle font">Project Purpose</h2>
              <p>
                PEAR NYC is a project aimed at connecting low-income families in
                New York City with affordable and enriching extracurricular
                activities for their children. Our goal is to bridge the
                opportunity gap and provide equal access to high-quality
                programs that support the development and well-being of young
                individuals.
              </p>
              <p>
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
                <h2 className="subtitle font">Our Team</h2>
              <div className="column">
                <figure className="image is-3by2">
                  <img src="https://media.discordapp.net/attachments/1232393999294140529/1242615128835489853/IMG_2810.png?ex=664f23c5&is=664dd245&hm=de354378f84aadae9bc46c0a91c1794f495c6a175458e1cea355e66b244f3289&=&format=webp&quality=lossless&width=960&height=443" alt="Group Picture" />
                </figure>
              </div>
                <p>
                  We are a dedicated team of individuals passionate about making
                  a positive impact in our community. With diverse backgrounds
                  and expertise, we have come together to create PEAR NYC and
                  strive to make a difference in the lives of low-income
                  families and their children.
                </p>
              </div>
            </div>
            <div className="content">
              <h2 className="subtitle">Contact Us</h2>
              <p>
                If you have any questions, feedback, or would like to get
                involved with PEAR NYC, please feel free to reach out to us:
              </p>
              <ul>
                <li>
                  Email: <a href="mailto:info@pearnyc.org">info@pearnyc.org</a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/company/pear-nyc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PEAR NYC
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
