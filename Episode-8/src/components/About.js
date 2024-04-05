import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Mounted");
  }
  render() {
    console.log("Parent rendered");
    return (
      <div className="about">
        <h1>About Page</h1>
        <User />
        <UserClass name="Shubham Gupta" location="Dhanbad" />
      </div>
    );
  }
}

export default About;
