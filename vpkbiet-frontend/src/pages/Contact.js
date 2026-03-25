import React from "react";

function Contact() {
  return (
    <section className="container fade-in">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        Get in touch with VPKBIET - we're here to help you with admissions, academics, and any questions you may have.
      </p>

      <div style={{ display: "flex", gap: "30px", marginTop: "40px", flexWrap: "wrap" }}>

        {/* Contact Information */}
        <div style={{ padding: "30px", backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
          <h3 style={{ color: "var(--color-primary)", marginBottom: "20px" }}>📍 College Address</h3>
          <div style={{ lineHeight: "1.6" }}>
            <p><strong>VPKBIET College</strong></p>
            <p>A/P Baramati, Tal: Baramati</p>
            <p>Dist: Pune, Maharashtra - 413133</p>
            <p>India</p>
          </div>

          <h4 style={{ color: "var(--color-primary)", marginTop: "25px", marginBottom: "15px" }}>📞 Phone Numbers</h4>
          <div style={{ lineHeight: "1.6" }}>
            <p><strong>Principal Office:</strong> +91-2112-239XXX</p>
            <p><strong>Admissions:</strong> +91-2112-239XXX</p>
            <p><strong>General Enquiry:</strong> +91-2112-239XXX</p>
          </div>

          <h4 style={{ color: "var(--color-primary)", marginTop: "25px", marginBottom: "15px" }}>📧 Email Addresses</h4>
          <div style={{ lineHeight: "1.6" }}>
            <p><strong>Principal:</strong> principal@vpbiet.edu.in</p>
            <p><strong>Admissions:</strong> admissions@vpbiet.edu.in</p>
            <p><strong>General:</strong> info@vpbiet.edu.in</p>
          </div>
        </div>

        {/* Office Hours */}
        <div style={{ padding: "30px", backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
          <h3 style={{ color: "var(--color-primary)", marginBottom: "20px" }}>🕒 Office Hours</h3>
          <div style={{ lineHeight: "1.8" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span><strong>Monday - Friday:</strong></span>
              <span>9:00 AM - 5:00 PM</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span><strong>Saturday:</strong></span>
              <span>9:00 AM - 1:00 PM</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <span><strong>Sunday:</strong></span>
              <span>Closed</span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "15px" }}>
              <em>* Office hours may vary during holidays and examination periods</em>
            </p>
          </div>

          <h4 style={{ color: "var(--color-primary)", marginTop: "30px", marginBottom: "15px" }}>🌐 Connect With Us</h4>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <button className="btn" style={{ padding: "8px 16px", fontSize: "0.9rem" }}>Facebook</button>
            <button className="btn" style={{ padding: "8px 16px", fontSize: "0.9rem" }}>LinkedIn</button>
            <button className="btn" style={{ padding: "8px 16px", fontSize: "0.9rem" }}>Instagram</button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card" style={{ padding: "30px", width: "100%" }}>
          <h3 style={{ color: "var(--color-primary)", marginBottom: "20px" }}>💬 Send us a Message</h3>
          <p style={{ marginBottom: "25px", color: "#666" }}>
            Have a question about admissions, academics, or anything else? We'd love to hear from you!
          </p>
          <form className="contact-form">
            <div style={{ display: "flex", gap: "15px", marginBottom: "15px", flexWrap: "wrap" }}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" placeholder="your.email@example.com" required />
              </div>
            </div>
            <div style={{ display: "flex", gap: "15px", marginBottom: "15px", flexWrap: "wrap" }}>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91-XXXXXXXXXX" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option value="">Select Subject</option>
                  <option value="admissions">Admissions</option>
                  <option value="academics">Academics</option>
                  <option value="placements">Placements</option>
                  <option value="general">General Enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" rows="5" placeholder="Please describe your query in detail..." required></textarea>
            </div>
            <button type="submit" className="btn secondary" style={{ padding: "12px 30px", fontSize: "1rem" }}>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
