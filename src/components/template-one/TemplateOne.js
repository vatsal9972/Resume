import React from "react";
import "./TemplateOne.css";

const TemplateOne = ({ data }) => {
  return (
    <div class="resume">
      <div class="header">
        <h1>{data.first_name + " " + data.last_name}</h1>
      </div>
      <div class="contact">
        <p>Email: {data.email}</p>
        <p>Phone: {data.contact_number}</p>
        <p>Address: {data.address}</p>
      </div>
      {data.about_me.length > 0 && (
        <div class="summary">
          <h2>ABOUT ME</h2>
          <p>{data.about_me}</p>
        </div>
      )}

      {(data.soft_skills.length > 0 || data.technical_skills.length > 0) && (
        <div class="skill">
          <h2>SKILLS</h2>
          <div className="skills-container">
            {data.technical_skills.length > 0 && (
              <div class="Techskill">
                <h3>Technical Skills</h3>
                <ul>
                  {data.technical_skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
            {data.soft_skills.length > 0 && (
              <div class="Softskill">
                <h3>Soft Skills</h3>
                <ul>
                  {data.soft_skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      {data.experiences.length > 0 && (
        <div class="experience">
          <h2>EXPERIENCE</h2>
          {data.experiences.map((experience, i) => (
            <div key={i}>
              <h3>{experience.company_name}</h3>
              <p class="date">
                {experience.start_year + "-" + experience.end_year}
              </p>
              <ul>
                <li>{experience.description}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
      {data.educations.length > 0 && (
        <div class="education">
          <h2>EDUCATION</h2>
          {data.educations.map((education, i) => (
            <div key={i}>
              <h3>{education.college_name}</h3>
              <p class="date">
                {education.start_year + "-" + education.end_year}
              </p>
              <p>Grade: {education.grade}</p>
            </div>
          ))}
        </div>
      )}

      {data.projects.length > 0 && (
        <div class="education">
          <h2>PROJECTS</h2>
          {data.projects.map((project, i) => (
            <div key={i}>
              <h3>{project.project_name}</h3>
              <p> {project.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.languages.length > 0 && (
        <div class="education">
          <h2>LANGUAGES</h2>
          {data.languages.map((language, i) => (
            <div key={i}>
              <p>{language}</p>
            </div>
          ))}
        </div>
      )}

      {data.achivements.length > 0 && (
        <div class="education">
          <h2>ACHIVEMENTS</h2>
          {data.achivements.map((achivement, i) => (
            <div key={i}>
              <p>{achivement}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateOne;

