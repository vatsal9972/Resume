import React, { useState } from "react";
import Modal from "react-modal";
import Input from "../input/Input";
import TextArea from "../textarea/TextArea";
import MultiAdd from "../multi-add/MultiAdd";
import MultiEducation from "../multi-education/MultiEducation";
import MultiExperience from "../multi-experience/MultiExperience";
import MultiProjects from "../multi-projects/MultiProjects";
import TemplateOne from "../template-one/TemplateOne";
import "./CreateResumeForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CreateResumeForm = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const [resumeDetails, setResumeDetails] = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    address: "",
    about_me: "",
    soft_skills: [],
    technical_skills: [],
    languages: [],
    educations: [],
    experiences: [],
    projects: [],
    achivements: [],
  });

  console.log("resumeDetails", resumeDetails);
  return (
    <>
      <div className="wrapper">
        {/* <TemplateOne /> */}
        <h4 className="resume-title">Resume Form</h4>
        <h6 className="block-title">Personal Details</h6>
        <Input
          label={"First Name"}
          type={"text"}
          setResumeDetails={setResumeDetails}
          name="first_name"
        />
        <Input
          label={"Last Name"}
          type={"text"}
          setResumeDetails={setResumeDetails}
          name="last_name"
        />
        <Input
          label={"Contact Number"}
          type={"number"}
          setResumeDetails={setResumeDetails}
          name="contact_number"
        />
        <Input
          label={"E-mail"}
          type={"email"}
          setResumeDetails={setResumeDetails}
          name="email"
        />
        <TextArea
          label={"Address"}
          setResumeDetails={setResumeDetails}
          name="address"
        />
        <TextArea
          label={"About Me"}
          setResumeDetails={setResumeDetails}
          name="about_me"
        />
        <h6 className="block-title">Skills</h6>
        <MultiAdd
          label={"Soft Skills"}
          setResumeDetails={setResumeDetails}
          name="soft_skills"
        />
        <MultiAdd
          label={"Technical Skills"}
          setResumeDetails={setResumeDetails}
          name="technical_skills"
        />
        <h6 className="block-title">Known Languages</h6>
        <MultiAdd
          placeholder={"Languages"}
          setResumeDetails={setResumeDetails}
          name="languages"
        />
        <h6 className="block-title">Education</h6>
        <MultiEducation setResumeDetails={setResumeDetails} name="educations" />
        <h6 className="block-title">Experience</h6>
        <MultiExperience
          setResumeDetails={setResumeDetails}
          name="experiences"
        />
        <h6 className="block-title">Projects</h6>
        <MultiProjects setResumeDetails={setResumeDetails} name="projects" />
        <h6 className="block-title">Achivements</h6>
        <MultiAdd
          placeholder={"Achivements"}
          setResumeDetails={setResumeDetails}
          name="achivements"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            openModal();
          }}
          className="submit-btn"
        >
          Submit
        </button>
      </div>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <TemplateOne />
      </Modal>
    </>
  );
};

export default CreateResumeForm;
