import React from "react";
import { CardContainer, InputField, Dropdown } from "./Style";
const FunctionCard = ({ index, equation, onEquationChange }) => {
  const handleInputChange = (e) => {
    onEquationChange(e.target.value);
  };

  return (
    <CardContainer>
      <div>Function {index + 1}</div>
      <InputField
        type="text"
        value={equation}
        onChange={handleInputChange}
        placeholder="Enter equation (e.g., x+2)"
      />
      <Dropdown disabled>
        <option>Function {index + 1}</option>
      </Dropdown>
    </CardContainer>
  );
};

export default FunctionCard;
