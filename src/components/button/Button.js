import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ ...props }) {
  return (
    <button
      className={`rounded px-6 py-3 text-xl  ${props.twClasses}`}
      type={props.type === 'submit' ? 'submit' : 'button'}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  handleClick: () => {},
  twClasses: '',
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  twClasses: PropTypes.string,
  handleClick: PropTypes.func,
};
