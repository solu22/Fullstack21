import React from "react";

const PersonForm = ({
  onFormSubmit,
  handleNameChange,
  nameValue,
  handleNumberChange,
  numberValue,
}) => {
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={nameValue} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={numberValue} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
