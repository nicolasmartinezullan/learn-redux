import React from "react";
import { Link } from "react-router";

const Main = React.createClass({
  render() {
    return (
      <span>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </span>
    );
  }
});

export default Main;
