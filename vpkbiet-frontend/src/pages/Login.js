import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate login and go to dashboard
    navigate("/dashboard");
  };

  return (
    <section className="container fade-in">
      <h2>Login to VPKBIET</h2>
      <p style={{ textAlign: "center", marginBottom: "30px", color: "#666" }}>
        Enter your credentials to access your account
      </p>

      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "1rem",
                boxSizing: "border-box"
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "1rem",
                boxSizing: "border-box"
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "var(--color-primary)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "15px"
            }}
          >
            Sign In
          </button>
        </form>

        <div style={{ textAlign: "center", paddingTop: "20px", borderTop: "1px solid #eee" }}>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>
            Need help? Contact <a href="/contact" style={{ color: "var(--color-primary)", textDecoration: "none" }}>Student Support</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
