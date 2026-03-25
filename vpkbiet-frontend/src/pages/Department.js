import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Department() {
  const { name } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const title = name
    ? name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Department";

  // Department data - will be replaced with API calls later
  const departmentsData = {
    "Computer Engineering": {
      overview: {
        description: "The Computer Engineering Department is committed to excellence in technical education, research, and innovation.",
        hod: "Dr. Gyankamal J. Chhajed",
        established: "2000",
        students: 240,
      },
      activities: [
        { event: "TECH UTOPIA", date: "Semester", desc: "Annual technical event showcasing projects and innovations" },
        { event: "Smart India Hackathon", date: "Annual", desc: "Participation in national hackathon competition" },
        { event: "Programming Contests", date: "Regular", desc: "Coding competitions and algorithmic problem-solving" },
        { event: "Project Exhibitions", date: "Semester End", desc: "Showcasing student capstone and research projects" },
        { event: "MERN Workshop", date: "Monthly", desc: "Hands-on training on MERN stack development" },
        { event: "Python & AI Workshop", date: "Monthly", desc: "Python programming and artificial intelligence training" },
        { event: "Skill Development", date: "Weekly", desc: "Aptitude and professional skill development sessions" },
      ],
      placements: {
        record: "Strong placement record in multinational software companies",
        opportunities: ["Internships with leading tech companies", "Industry training programs", "Campus recruitment drives", "Startup incubation support"],
        topCompanies: [
          { company: "Google", position: "Software Engineer", salary: "₹12 LPA" },
          { company: "Microsoft", position: "Data Scientist", salary: "₹11 LPA" },
          { company: "Amazon", position: "DevOps Engineer", salary: "₹10.5 LPA" },
          { company: "TCS", position: "Software Developer", salary: "₹8.5 LPA" },
          { company: "Infosys", position: "Systems Engineer", salary: "₹8 LPA" },
        ],
      },
      evaluation: {
        sgpa: "Students are evaluated using SGPA (Semester Grade Point Average) each semester.",
        cgpa: "CGPA (Cumulative Grade Point Average) is calculated across all semesters according to SPPU rules.",
      },
      results: {
        passPercentage: "94%",
        avgGPA: "7.8/10",
        topperScore: "9.2/10",
      },
      students: [
        { id: 1, name: "Rajesh Kumar", roll: "ENM001", cgpa: 8.9 },
        { id: 2, name: "Priya Sharma", roll: "ENM002", cgpa: 8.7 },
        { id: 3, name: "Amit Patel", roll: "ENM003", cgpa: 8.5 },
      ],
    },
    "Mechanical Engineering": {
      overview: {
        description: "The Mechanical Engineering Department is dedicated to excellence in mechanical design, manufacturing, and innovation.",
        hod: "Dr. Manisha Lande",
        established: "2002",
        students: 60,
      },
      activities: [
        { event: "ELYSIUM", date: "Annual", desc: "Technical event showcasing mechanical projects and innovations" },
        { event: "Project Competitions", date: "Semester", desc: "Design and build competitions for students" },
        { event: "Industrial Visits", date: "Regular", desc: "Exposure to manufacturing and industrial processes" },
        { event: "Technical Workshops", date: "Monthly", desc: "Hands-on training on CAD, CNC, and fabrication" },
        { event: "Expert Seminars", date: "Monthly", desc: "Lectures from industry experts and researchers" },
        { event: "Research Activities", date: "Ongoing", desc: "Research in energy engineering and design optimization" },
      ],
      placements: {
        record: "Strong placement record in automotive and manufacturing industries",
        opportunities: ["Internships with automotive companies", "Design engineering roles", "Research and development programs", "PG opportunities in specializations"],
        topCompanies: [
          { company: "Bosch", position: "Design Engineer", salary: "₹9.5 LPA" },
          { company: "Siemens", position: "Manufacturing Engineer", salary: "₹9 LPA" },
          { company: "Honda", position: "Production Engineer", salary: "₹8.8 LPA" },
          { company: "Bharat Petroleum", position: "Plant Engineer", salary: "₹8.5 LPA" },
          { company: "Maruti Suzuki", position: "Process Engineer", salary: "₹8 LPA" },
        ],
      },
      evaluation: {
        sgpa: "Students are evaluated using SGPA (Semester Grade Point Average) each semester.",
        cgpa: "CGPA (Cumulative Grade Point Average) is calculated across all semesters according to SPPU rules.",
      },
      results: {
        passPercentage: "92%",
        avgGPA: "7.6/10",
        topperScore: "9.0/10",
      },      students: [
        { id: 1, name: "Rujuta Shinde", roll: "MEC001", cgpa: 9.2 },
        { id: 2, name: "Aditya Deshmukh", roll: "MEC002", cgpa: 8.8 },
        { id: 3, name: "Priya Kulkarni", roll: "MEC003", cgpa: 8.5 },
      ],      features: [
        "Well-equipped laboratories and testing facilities",
        "Industry-oriented training and project-based learning",
        "PG courses in Energy Engineering and Design Engineering",
        "Collaboration with leading automotive and manufacturing companies",
      ],
    },
    "Electronics Engineering": {
      overview: {
        description: "The Electronics Engineering Department is dedicated to excellence in communication systems, embedded systems, and RF technologies.",
        hod: "R.S. Rangole",
        established: "2005",
        students: 120,
      },
      activities: [
        { event: "Guest Lectures", date: "Monthly", desc: "Expert lectures on defense and communication technologies" },
        { event: "EESA Events", date: "Regular", desc: "Electronics Engineering Student Association activities and competitions" },
        { event: "Embedded Systems Workshop", date: "Semester", desc: "Hands-on training on embedded systems and microcontrollers" },
        { event: "Communication Workshop", date: "Semester", desc: "Workshops on advanced communication technologies and protocols" },
      ],
      placements: {
        record: "Strong placement record in telecom, defense, and semiconductor industries",
        opportunities: ["Internships in telecom sector", "Defense research opportunities", "Semiconductor design roles", "Communication systems training"],
        topCompanies: [
          { company: "Qualcomm", position: "RF Engineer", salary: "₹10.5 LPA" },
          { company: "Airtel", position: "Network Engineer", salary: "₹9 LPA" },
          { company: "Jio", position: "Telecom Engineer", salary: "₹8.8 LPA" },
          { company: "Intel", position: "Embedded Systems Engineer", salary: "₹10 LPA" },
          { company: "DRDO", position: "Electronics Engineer", salary: "₹8 LPA" },
        ],
      },
      evaluation: {
        sgpa: "Students are evaluated using SGPA (Semester Grade Point Average) each semester.",
        cgpa: "CGPA (Cumulative Grade Point Average) is calculated across all semesters according to SPPU rules.",
      },
      results: {
        passPercentage: "90%",
        avgGPA: "7.5/10",
        topperScore: "9.1/10",
      },
      students: [
        { id: 1, name: "Vikram Desai", roll: "ELE001", cgpa: 9.1 },
        { id: 2, name: "Neha Verma", roll: "ELE002", cgpa: 8.9 },
        { id: 3, name: "Rohit Saxena", roll: "ELE003", cgpa: 8.6 },
      ],
      features: [
        "Communication Lab with modern testing equipment",
        "RF & Microwave Lab for antenna and signal analysis",
        "Digital Electronics Lab with programmable logic devices",
        "VLSI & Embedded Lab for chip design and embedded programming",
        "Collaboration with telecom and defense organizations",
      ],
    },
    "Civil Engineering": {
      overview: {
        description: "The Civil Engineering Department is dedicated to excellence in structural design, environmental engineering, and infrastructure development.",
        hod: "Dr. Chittaranjan Nayak",
        established: "Early 2000s",
        students: 80,
      },
      activities: [
        { event: "Structural Design Workshops", date: "Semester", desc: "Hands-on training in structural analysis and design" },
        { event: "Surveying Labs", date: "Regular", desc: "Practical training in surveying techniques and equipment" },
        { event: "Construction Site Visits", date: "Semester", desc: "Field visits to ongoing construction projects" },
        { event: "Technical Paper Presentations", date: "Monthly", desc: "Student presentations on civil engineering topics" },
      ],
      placements: {
        record: "Strong placement record in construction, infrastructure, and consulting firms",
        opportunities: ["Internships with construction companies", "Site engineering roles", "Design and planning positions", "Government sector opportunities"],
        topCompanies: [
          { company: "L&T Construction", position: "Site Engineer", salary: "₹7.5 LPA" },
          { company: "Pune Municipal Corporation", position: "Junior Engineer", salary: "₹6.5 LPA" },
          { company: "Tata Projects", position: "Civil Engineer", salary: "₹7 LPA" },
          { company: "Afcons Infrastructure", position: "Project Engineer", salary: "₹6.8 LPA" },
          { company: "Maharashtra State Road Development", position: "Engineer", salary: "₹6 LPA" },
        ],
      },
      evaluation: {
        sgpa: "Students are evaluated using SGPA (Semester Grade Point Average) each semester.",
        cgpa: "CGPA (Cumulative Grade Point Average) is calculated across all semesters according to SPPU rules.",
      },
      results: {
        passPercentage: "88%",
        avgGPA: "7.2/10",
        topperScore: "8.8/10",
      },
      students: [
        { id: 1, name: "Anjali Gupta", roll: "CIV001", cgpa: 8.8 },
        { id: 2, name: "Rahul Sharma", roll: "CIV002", cgpa: 8.4 },
        { id: 3, name: "Priya Patel", roll: "CIV003", cgpa: 8.1 },
      ],
      features: [
        "Focus on structural engineering and design",
        "Environmental engineering and sustainability studies",
        "Transportation engineering and traffic planning",
        "Well-equipped surveying and construction laboratories",
        "Collaboration with construction and infrastructure companies",
      ],
    },
  };

  const deptData = departmentsData[title] || departmentsData["Computer Engineering"];

  return (
    <section className="container fade-in">
      <h2>{title}</h2>

      {/* Tabs Navigation */}
      <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap", borderBottom: "2px solid #eee", paddingBottom: "10px" }}>
        {["overview", "placements", "results", "students", "activities"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "10px 16px",
              border: "none",
              background: activeTab === tab ? "var(--color-primary)" : "#f0f0f0",
              color: activeTab === tab ? "white" : "var(--text)",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "0.3s",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div style={{ marginTop: "30px" }}>
          <p>{deptData.overview.description}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", marginTop: "20px" }}>
            <div className="card"><h4>Head of Department</h4><p>{deptData.overview.hod}</p></div>
            <div className="card"><h4>Established</h4><p>{deptData.overview.established}</p></div>
            <div className="card"><h4>Total Students</h4><p>{deptData.overview.students}</p></div>
          </div>
          {deptData.features && (
            <div style={{ marginTop: "30px" }}>
              <h4>Department Features</h4>
              <ul style={{ marginLeft: "20px", marginTop: "15px" }}>
                {deptData.features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: "10px" }}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Placements Tab */}
      {activeTab === "placements" && (
        <div style={{ marginTop: "30px" }}>
          <h3>Campus Placements</h3>
          <div className="card" style={{ padding: "20px", marginTop: "20px", backgroundColor: "#f9f9f9" }}>
            <p><strong>{deptData.placements.record}</strong></p>
            <h4 style={{ marginTop: "15px" }}>Opportunities:</h4>
            <ul style={{ marginLeft: "20px" }}>
              {deptData.placements.opportunities.map((opp, idx) => (
                <li key={idx}>{opp}</li>
              ))}
            </ul>
          </div>
          <h4 style={{ marginTop: "30px" }}>Top Recruiting Companies:</h4>
          <div style={{ display: "flex", gap: "15px", marginTop: "15px", flexWrap: "wrap" }}>
            {deptData.placements.topCompanies.map((p, idx) => (
              <div key={idx} className="card" style={{ padding: "20px", flex: "1 1 calc(20% - 12px)", minWidth: "200px" }}>
                <h4>{p.company}</h4>
                <p><strong>Position:</strong> {p.position}</p>
                <p><strong>Package:</strong> {p.salary}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results Tab */}
      {activeTab === "results" && (
        <div style={{ marginTop: "30px" }}>
          <h3>Academic Results & Evaluation</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", marginTop: "20px" }}>
            <div className="card"><h4>Pass %</h4><p style={{ fontSize: "1.8rem", fontWeight: "bold", color: "var(--color-primary)" }}>{deptData.results.passPercentage}</p></div>
            <div className="card"><h4>Avg GPA</h4><p style={{ fontSize: "1.8rem", fontWeight: "bold", color: "var(--color-primary)" }}>{deptData.results.avgGPA}</p></div>
            <div className="card"><h4>Topper</h4><p style={{ fontSize: "1.8rem", fontWeight: "bold", color: "var(--color-primary)" }}>{deptData.results.topperScore}</p></div>
          </div>
          <div className="card" style={{ padding: "20px", marginTop: "30px", backgroundColor: "#f0f8ff" }}>
            <h4>SGPA (Semester Evaluation)</h4>
            <p>{deptData.evaluation.sgpa}</p>
          </div>
          <div className="card" style={{ padding: "20px", marginTop: "15px", backgroundColor: "#f0f8ff" }}>
            <h4>CGPA (Cumulative Evaluation)</h4>
            <p>{deptData.evaluation.cgpa}</p>
          </div>
        </div>
      )}

      {/* Students Tab */}
      {activeTab === "students" && (
        <div style={{ marginTop: "30px" }}>
          <h3>Top Students</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", marginTop: "15px" }}>
              <thead>
                <tr style={{ backgroundColor: "#f0f0f0", borderBottom: "2px solid #ddd" }}>
                  <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Roll No</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>CGPA</th>
                </tr>
              </thead>
              <tbody>
                {deptData.students ? deptData.students.map((s) => (
                  <tr key={s.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "12px" }}>{s.name}</td>
                    <td style={{ padding: "12px" }}>{s.roll}</td>
                    <td style={{ padding: "12px", fontWeight: "bold" }}>{s.cgpa}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="3" style={{ padding: "12px", textAlign: "center" }}>No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Activities Tab */}
      {activeTab === "activities" && (
        <div style={{ marginTop: "30px" }}>
          <h3>Events & Activities</h3>
          <div style={{ display: "flex", gap: "15px", marginTop: "20px", flexWrap: "wrap" }}>
            {deptData.activities.map((a, idx) => (
              <div key={idx} className="card" style={{ flex: "1 1 calc(25% - 12px)", minWidth: "250px" }}>
                <h4>{a.event}</h4>
                <p><strong>📅 {a.date}</strong></p>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <p style={{ marginTop: "40px" }}>
        <a href="/departments" className="btn secondary">
          &larr; Back to Departments
        </a>
      </p>
    </section>
  );
}

export default Department;