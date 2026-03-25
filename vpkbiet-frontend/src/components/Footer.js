import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering & Technology. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
