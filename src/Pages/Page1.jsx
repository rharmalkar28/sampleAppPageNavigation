import React from "react";
import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox Page 1</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
