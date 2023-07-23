import React from "react";
import "./TemplateOne.css";

const TemplateOne = () => {
  return (
    <div class="resume">
      <div class="header">
        <h1>Your Name</h1>
        <p>Web Developer</p>
      </div>
      <div class="contact">
        <p>Email: your.email@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Website: www.yourwebsite.com</p>
        <p>Location: City, Country</p>
      </div>
      <div class="summary">
        <h2>Summary</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod arcu ac volutpat.
        </p>
      </div>
      <div class="experience">
        <h2>Experience</h2>
        <h3>Web Developer, XYZ Company</h3>
        <p class="date">Jan 2020 - Present</p>
        <ul>
          <li>
            Developed and maintained company websites using HTML, CSS, and
            JavaScript.
          </li>
          <li>
            Collaborated with cross-functional teams to design and implement new
            features.
          </li>
          <li>Optimized websites for performance and responsiveness.</li>
        </ul>

        <h3>Junior Web Developer, ABC Agency</h3>
        <p class="date">May 2018 - Dec 2019</p>
        <ul>
          <li>
            Assisted senior developers in building and updating client websites.
          </li>
          <li>Tested website functionality and resolved issues.</li>
          <li>
            Implemented responsive design principles to improve user experience.
          </li>
        </ul>
      </div>
      <div class="education">
        <h2>Education</h2>
        <h3>Bachelor of Science in Computer Science, University XYZ</h3>
        <p class="date">Sept 2014 - May 2018</p>
        <p>
          Relevant Coursework: Web Development, Algorithms, Database Management
        </p>
      </div>
    </div>
  );
};

export default TemplateOne;
