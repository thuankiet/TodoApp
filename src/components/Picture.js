import React, { Component } from "react";

class Picture extends Component {
  render() {
    return (
      <div className="PictureContent">
        <img
          src="https://res.cloudinary.com/dpy2iegdk/image/upload/v1591797424/undraw_happy_music_g6wc_yqu4ib.svg"
          className="MenuIcon"
          alt="menu"
        />
      </div>
    );
  }
}

export default Picture;
