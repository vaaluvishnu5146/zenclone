import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext({
  userName: null,
  email: null,
  role: null,
  course: null,
  city: null,
  state: null,
  greet: () => {},
  handleChange: (e) => {},
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState({
    userName: "Dinesh",
    email: "Dinesh@gmail.com",
    role: "mentor",
    course: "FSD",
  });
  const value = {
    ...userData,
    greet: greet,
    handleChange: handleChange,
  };

  function greet() {
    console.log("Hello all");
  }

  function handleChange(e) {
    console.log(e);
    const { id, value } = e.target;
    let dataCopy = {
      ...userData,
    };
    dataCopy[id] = value;
    setUserData(dataCopy);
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
