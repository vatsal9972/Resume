// import React from "react";
// import "./TemplateOne.css";

// const TemplateOne = () => {
//   return (
//     <body>
//       <div class="resume">
//         <div className="left_side">
//           <div className="profileText">
//             <div className="imgBox">
//               {/* <img src="img.jpg" ></img> */}
//             </div>
//             <h2>Jennifer Taylor<span>Web Developer</span></h2>
//           </div>
//         </div>
//         <div className="right_side"></div>
//       </div>
//     </body>
//   );
// };

// export default TemplateOne;

// import React from "react";
// import "./TemplateTwo.css";

// const TemplateTwo = ({ data }) => {
//   return (
//     <div class="resume">
//       <div class="header">
//         <h1>{data.first_name + " " + data.last_name}</h1>
//         {/* <p>Web Developer</p> */}
//       </div>
//       <div class="contact">
//         <p>Email: {data.email}</p>
//         <p>Phone: {data.contact_number}</p>
//         <p>Address: {data.address}</p>
//       </div>
//       {data.about_me.length > 0 && (
//         <div class="summary">
//           <h2>Summary</h2>
//           <p>{data.about_me}</p>
//         </div>
//       )}

//       {(data.soft_skills.length > 0 || data.technical_skills.length > 0) && (
//         <div class="skill">
//           <h2>SKILLS</h2>
//           <div className="skills-container">
//             {data.technical_skills.length > 0 && (
//               <div class="Techskill">
//                 <h3>Technical Skills</h3>
//                 <ul>
//                   {data.technical_skills.map((skill) => (
//                     <li key={skill}>{skill}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {data.soft_skills.length > 0 && (
//               <div class="Softskill">
//                 <h3>Soft Skills</h3>
//                 <ul>
//                   {data.soft_skills.map((skill) => (
//                     <li key={skill}>{skill}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//       {data.experiences.length > 0 && (
//         <div class="experience">
//           <h2>EXPERIENCE</h2>
//           {data.experiences.map((experience, i) => (
//             <div key={i}>
//               <h3>{experience.company_name}</h3>
//               <p class="date">
//                 {experience.start_year + "-" + experience.end_year}
//               </p>
//               <ul>
//                 <li>{experience.description}</li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//       {data.educations.length > 0 && (
//         <div class="education">
//           <h2>EDUCATION</h2>
//           {data.educations.map((education, i) => (
//             <div key={i}>
//               <h3>{education.college_name}</h3>
//               <p class="date">
//                 {education.start_year + "-" + education.end_year}
//               </p>
//               <p>Grade: {education.grade}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {data.projects.length > 0 && (
//         <div class="education">
//           <h2>PROJECTS</h2>
//           {data.projects.map((project, i) => (
//             <div key={i}>
//               <h3>{project.project_name}</h3>
//               <p>Grade: {project.description}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {data.projects.length > 0 && (
//         <div class="education">
//           <h2>PROJECTS</h2>
//           {data.projects.map((project, i) => (
//             <div key={i}>
//               <h3>{project.project_name}</h3>
//               <p>Grade: {project.description}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {data.languages.length > 0 && (
//         <div class="education">
//           <h2>LANGUAGES</h2>
//           {data.languages.map((language, i) => (
//             <div key={i}>
//               <h3>{language}</h3>
//             </div>
//           ))}
//         </div>
//       )}

//       {data.achivements.length > 0 && (
//         <div class="education">
//           <h2>ACHIVEMENTS</h2>
//           {data.achivements.map((achivement, i) => (
//             <div key={i}>
//               <h3>{achivement}</h3>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TemplateTwo;

// import React from "react";
// import "./TemplateOne.css";

// const TemplateOne = () => {
//   return (
//     <div class="resume">
//       <div class="header">
//         <h1>Your Name</h1>
//         <p>Web Developer</p>
//       </div>
//       <div class="contact">
//         <p>Email: your.email@example.com</p>
//         <p>Phone: (123) 456-7890</p>
//         <p>Website: www.yourwebsite.com</p>
//         <p>Location: City, Country</p>
//       </div>
//       <div class="summary">
//         <h2>Summary</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
//           euismod arcu ac volutpat.
//         </p>
//       </div>
//       <div class="experience">
//         <h2>Experience</h2>
//         <h3>Web Developer, XYZ Company</h3>
//         <p class="date">Jan 2020 - Present</p>
//         <ul>
//           <li>
//             Developed and maintained company websites using HTML, CSS, and
//             JavaScript.
//           </li>
//           <li>
//             Collaborated with cross-functional teams to design and implement new
//             features.
//           </li>
//           <li>Optimized websites for performance and responsiveness.</li>
//         </ul>

//         <h3>Junior Web Developer, ABC Agency</h3>
//         <p class="date">May 2018 - Dec 2019</p>
//         <ul>
//           <li>
//             Assisted senior developers in building and updating client websites.
//           </li>
//           <li>Tested website functionality and resolved issues.</li>
//           <li>
//             Implemented responsive design principles to improve user experience.
//           </li>
//         </ul>
//       </div>
//       <div class="education">
//         <h2>Education</h2>
//         <h3>Bachelor of Science in Computer Science, University XYZ</h3>
//         <p class="date">Sept 2014 - May 2018</p>
//         <p>
//           Relevant Coursework: Web Development, Algorithms, Database Management
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TemplateOne;
