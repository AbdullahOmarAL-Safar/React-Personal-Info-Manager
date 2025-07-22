import React, { useState } from 'react';

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setEmployed] = useState(false);

  const updateName = () => {
    setName("Abdullah");
  };
  const updateAge = () => {
    setAge(age + 1);
  };
  const toggleEmployed = () => {
    setEmployed(!isEmployed);
  };

  return (
    <div className="container">
      <p className="label">Name: <span className="value">{name}</span></p>
      <button className="btn" onClick={updateName}>Set Name</button>

      <p className="label">Age: <span className="value">{age}</span></p>
      <button className="btn" onClick={updateAge}>Increment Age</button>

      <p className="label">Employed: <span className="value">{isEmployed ? "Yes" : "No"}</span></p>
      <button className="btn" onClick={toggleEmployed}>Toggle Status</button>
    </div>
  );
}

export default MyComponent;
