import React from "react";
import MacWindow from "./Windows/MacWindow";
import "./Resume.scss";

const Resume = () => {
  return (
    <MacWindow>
      <div className="Resume-Window">
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
          title="Resume PDF"
        />
      </div>
    </MacWindow>
  );
};

export default Resume;
