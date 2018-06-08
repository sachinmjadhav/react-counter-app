import React, { Component } from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <div className="header navbar navbar-dark bg-dark">
      <div className="row m-auto">
        <i className="fa fa-hand-pointer-o fa-4x text-white" />
        <div className="h1 ml-2 my-auto text-light" href="/">
          {props.title}
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Title"
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
