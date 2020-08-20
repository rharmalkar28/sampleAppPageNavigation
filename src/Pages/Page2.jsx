import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "mobx-react-lite/batchingForReactDom";
import { store } from "../Stores/PageStore";

export default function Page2() {
  useEffect(() => {
    store.fetchProjects().then(() => {
      console.log("done");
    });
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox Page 2</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      {store.formDataList.map((itrm) => (
        <span>{JSON.stringify(itrm)}</span>
      ))}
    </div>
  );
}
