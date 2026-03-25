import "./Home.css";
import { Link } from "react-router-dom";
import collageImg from "../assets/images/campus.png";
import Card from "../components/card";
function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="hero fade-in"
        style={{
          backgroundImage: `url(${collageImg})`,
        }}
      >
        <div className="hero-overlay">
          <h1>Vidya Pratishthan's</h1>
          <h2>Kamalnayan Bajaj Institute of Engineering & Technology</h2>
          <p>Empowering Future Engineers</p>

          <button className="explore-btn">
            Explore Departments
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about fade-in">
        <h2>About VPKBIET</h2>
        <p>
          VPKBIET is one of the leading engineering institutes
          providing quality technical education and innovation.
        </p>
      </section>

      {/* Departments Section */}
      <section className="departments fade-in">
        <h2>Departments</h2>
        <div className="dept-container">
          {['Computer Engineering','Mechanical Engineering','Electronics Engineering','Civil Engineering'].map(d=>{
            const slug = d.replace(/\s+/g,'-').toLowerCase();
            return (
              <Link key={d} to={`/departments/${slug}`} style={{textDecoration:'none'}}>
                <Card title={d} />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Admissions preview */}
      <section className="admissions-preview fade-in">
        <h2>Admissions</h2>
        <p>Learn about how to join VPKBIET and important dates.</p>
        <Link to="/admissions" className="btn secondary">
          Read More
        </Link>
      </section>

      {/* Placements preview */}
      <section className="placements-preview fade-in">
        <h2>Placements</h2>
        <p>See where our graduates are working and how we support careers.</p>
        <Link to="/placements" className="btn secondary">
          Details
        </Link>
      </section>

    </div>
  );
}

export default Home;