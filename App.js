import React from "react";
import ReactDOM from "react-dom/client";

//JSX => React.createElement(JS Object) by BABEL => After rendering => HTMLElement

// React Element
const jsxHeading = <h2 className="head">Namaste Javascript by JSX !!</h2>;

//Title Component

const TitleComponent = function () {
  return <h1 className="title">React from Title Component</h1>;
};

// React Functional Component
// Add Title Component in a multiple ways
const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    <TitleComponent></TitleComponent>
    {TitleComponent()}
    {jsxHeading}
    <h1 className="heading">Namaste React from Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent />);
