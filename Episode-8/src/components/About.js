import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <User />
      <UserClass name="Shubham Gupta" location="Dhanbad" />
    </div>
  );
};

export default About;
