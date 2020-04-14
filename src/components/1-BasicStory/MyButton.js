import * as PropTypes from "prop-types";
import React from "react";

function MyButton(props) {
  return (
    <div>
      <button type='button' {...props}>
        {props.text}
      </button>
    </div> )
}

MyButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

MyButton.defaultProps = {
  text: 'Click! Click!',
}

export default MyButton
