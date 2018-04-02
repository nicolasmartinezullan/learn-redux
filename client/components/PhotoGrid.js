import React from "react";
import Photo from "./Photo";

const PhotoGrid = React.createClass({
  render() {
    return (
      <span className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo key={i} i={i} post={post} {...this.props} />
        ))}
      </span>
    );
  }
});

export default PhotoGrid;
