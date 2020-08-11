import React from 'react';
import PropTypes from "prop-types";

function MyPackage(props) {
  return (
      <div>
          <h3>Hello {props.name}</h3>
          <p>I hope this configuration helped you :)</p>
      </div>
  )
}


MyPackage.propTypes = {
    name: PropTypes.string
};

export default MyPackage;