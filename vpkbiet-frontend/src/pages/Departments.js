import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";

const list = [
  "Computer Engineering",
  "Mechanical Engineering",
  "Electronics Engineering",
  "Civil Engineering",
];

function Departments() {
  return (
    <section className="container fade-in">
      <h2>Departments</h2>
      <div className="dept-container">
        {list.map((dept) => (
          <Link
            key={dept}
            to={`/departments/${dept.replace(/\s+/g, "-").toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <Card title={dept} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Departments;
