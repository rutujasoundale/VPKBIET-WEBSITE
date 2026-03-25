import React from "react";

function Dashboard() {
  return (
    <section className="container fade-in">
      <h2>Welcome to Your Dashboard</h2>
      <p>This is your personalized space. (We'll add more features later!)</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <div className="card">
          <h3>Recent Notifications</h3>
          <p>No new updates yet.</p>
        </div>
        <div className="card">
          <h3>My Courses</h3>
          <p>View your enrolled courses.</p>
        </div>
        <div className="card">
          <h3>Events</h3>
          <p>Upcoming hackathons and seminars.</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;