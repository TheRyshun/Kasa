import React, { useState } from "react";
import "./index.scss";

interface DropDownProps {
  title: string;
  content: string;
}

const DropDown: React.FC<DropDownProps> = (props) => {
  const [ParagrapheVisible, setParagrapheVisible] = useState<boolean>(false);

  const ParagrapheActif = () => {
    setParagrapheVisible(!ParagrapheVisible);
  };

  return (
    <div
      className={`dropdown__Box ${
        ParagrapheVisible ? "open" : ""
      }`}
      onClick={ParagrapheActif}
    >
      <div className="dropdown__Info">
        <span>{props.title}</span>

        <span>
          <i className={`arrow ${ParagrapheVisible ? "up" : "down"}`}></i>
        </span>
      </div>
      {ParagrapheVisible && (
        <p className="dropdown__Para">{props.content}</p>
      )}
    </div>
  );
};

export default DropDown;
