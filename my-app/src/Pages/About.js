import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './About.css';
//ViybevgiTi26olI73egZdFCNHSWj6ERe654bSyJG - API KEY


function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are dedicated to providing you with the most
        up-to-date and comprehensive information on federal and state matters.
        Our mission is to make legislative information accessible and
        understandable to everyone.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to bridge the gap between the government and the people
        by providing transparent and easily accessible information. We believe
        that an informed public is the cornerstone of a healthy democracy.
      </p>
      <h2>What We Offer</h2>
      <ul>
        <li>Comprehensive federal and state legislative information</li>
        <li>Interactive maps and tools</li>
        <li>Up-to-date data from Congress.gov</li>
        <li>Insights and analysis powered by AI</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or suggestions, feel free to reach out to us
        at <a href="mailto:info@ourwebsite.com">info@ourwebsite.com</a>.
      </p>
    </div>
  );
};
export default About;