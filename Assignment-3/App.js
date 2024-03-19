import React from "react";
import ReactDOM from "react-dom/client";
import { VscAccount } from "react-icons/vsc";

const srcUrl = "https://reactjs.org/logo-og.png";

const headerUsingCreateElement = React.createElement(
  "div",
  { className: "title" },
  [
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h2", {}, "By Akshay Saini"),
    React.createElement("h3", {}, "Co-sponsered by Google"),
  ]
);

const headerUsingJSX = (
  <div className="title">
    <h1>Namaste React</h1>
    <h2>By Akshay Saini</h2>
    <h3>Co-sponsered by Google</h3>
  </div>
);

const HeaderComponent = () => (
  <div className="container">
    <div className="logo">
      <img src={srcUrl} alt="React Image" />
    </div>
    <div className="search">
      <input placeholder="Search" />
    </div>
    <div className="icon">
      <VscAccount className="iconImg" />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
