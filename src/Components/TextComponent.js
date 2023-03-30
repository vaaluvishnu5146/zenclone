import { useState } from "react";
/**
 * @param {*} props = { firstName: "", lastName: "" }
 * @output <div></div> returns JSX - Javascript XML
 * What is JSX:
 * 1. Its the javascript version of HTML
 * 2. class is replaced with className
 * 3. JSX renders into actual dom quickly
 */
export default function TextComponent(props) {
  // let city = "Chennai"; // JAVASCVRIPT WAY

  const [city, setCity] = useState("Chennai"); // returns [variableName, callback]
  console.log(props);

  function changeCity() {
    setCity("Coimbatore");
  }

  return (
    <div className="">
      {props.firstName}
      {props.lastName} is of age {props.age} comes from {city}
      <button onClick={changeCity}>Change City</button>
    </div>
  );
}

// 1. CREATE A FUNCTIONAL COMPONENT
// 3. SEND FIRSTNAME AND LASTNAME VIA PROPS AND SHOW THE PROPS DATA IN COMPONENT DYNAMICALLY
// 4. LETS DEFINE A STATE
