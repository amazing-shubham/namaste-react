import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/amazing-shubham");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component did updated");
  }

  componentWillUnmount() {
    console.log("This is called when component is unmounted");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="user-img" src={avatar_url} />
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h3>Contact : @crazy_shubhi</h3>
      </div>
    );
  }
}

export default UserClass;
