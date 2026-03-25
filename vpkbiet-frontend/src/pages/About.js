import React from "react";

function About() {
  return (
    <section className="container fade-in">
      <h2>About VPKBIET</h2>
      <p>
        Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering & Technology (VPKBIET) is a premier engineering college dedicated to providing quality education and fostering innovation. Established with a vision to empower future engineers, we offer a range of undergraduate and postgraduate programs in various disciplines.
      </p>
      <p>
        Our campus features state-of-the-art facilities, experienced faculty, and a vibrant learning environment. We emphasize practical learning, research, and industry collaboration to prepare students for successful careers.
      </p>

      {/* Mission and Vision */}
      <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To provide holistic education that nurtures innovation, ethical values, and technical excellence, preparing students to become leaders in engineering and technology.
          </p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To be a globally recognized institute of engineering education, fostering research, entrepreneurship, and sustainable development for societal benefit.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h3>Campus Tour</h3>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/OaohCsPvoBk"
          title="VPKBIET Campus Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: '600px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
        ></iframe>
      </div>
    </section>
  );
}

export default About;