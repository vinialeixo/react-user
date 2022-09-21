import React, { useState } from "react";

const CreatUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(name, age);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name:"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Age:"
          onChange={(event) => setAge(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CreatUser;
