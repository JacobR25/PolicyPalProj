import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import USMap from './Map/USMap.js';
//ViybevgiTi26olI73egZdFCNHSWj6ERe654bSyJG - API KEY


function Gov() {
  // State to hold the list of subjects
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    // Function to fetch legislative subjects
    const fetchLegislativeSubjects = async () => {
      const apiKey = 'ViybevgiTi26olI73egZdFCNHSWj6ERe654bSyJG'; // Replace this with your actual API key
      const url = `https://api.congress.gov/v3/bill/117/hr/3076/subjects?api_key=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Assuming the response is XML, as per your description
        const data = await response.text();

        // Convert XML to JSON
        // Note: This example uses a simple parser for demonstration purposes.
        // You might need a more robust parser depending on the XML structure.
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        // Corrected parsing based on the provided XML structure
        const legislativeSubjects = xml.getElementsByTagName("legislativeSubjects")[0];
        const items = legislativeSubjects.getElementsByTagName("item");
        const subjectsList = Array.from(items).map(item => item.getElementsByTagName("name")[0].textContent.trim());
        console.log(subjectsList)
        setSubjects(subjectsList);
      } catch (error) {
        console.error("Failed to fetch legislative subjects:", error);
      }
    };

    fetchLegislativeSubjects();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h1>Government Page</h1>
      <USMap />
      <h2>Legislative Subjects</h2>
      {subjects.length > 0 ? (
        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      ) : (
        <p>No subjects found.</p>
      )}
    </div>
  );
}

export default Gov;