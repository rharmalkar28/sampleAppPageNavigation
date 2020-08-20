import React from "react";
import { Link } from "react-router-dom";
import FormPage1 from "../Components/FormPage1";

const Page1 = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox Page 1</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <FormPage1 />
    </div>
  );
};

export default Page1;
