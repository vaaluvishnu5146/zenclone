import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

export default function CreateStudents() {
  const [data, setData] = useState({});
  const { city = "", state = "", handleChange = (e) => {} } = useAuth();

  return (
    <div>
      <input
        id="userName"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <input id="city" placeholder="Enter your city" onChange={handleChange} />
      <input
        id="state"
        placeholder="Enter your state"
        onChange={handleChange}
      />
      <p>{city}</p>
      <p>{state}</p>
    </div>
  );
}
