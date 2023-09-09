import React from "react";
import "./ProfileSelectFile.css";

const ProfileSelectFile = ({ setResumeDetails, name }) => {
  const onSelectProfile = (e) => {
    const file = e.target.files[0];
    setResumeDetails((prev) => ({ ...prev, [name]: file }));
  };
  return (
    <input
      placeholder="Select your profile picture"
      type="file"
      onChange={onSelectProfile}
    />
  );
};

export default ProfileSelectFile;
