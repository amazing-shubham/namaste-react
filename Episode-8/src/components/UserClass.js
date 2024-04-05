import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "Child Constructor");
  }
  componentDidMount() {
    console.log(this.props.name + "Child Mounted");
  }
  render() {
    console.log(this.props.name + "Child rendered");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Counter
        </button>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h3>Contact : @crazy_shubhi</h3>
      </div>
    );
  }
}

export default UserClass;
