import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ ...props }) {
  return (
    <button
      className={`rounded px-6 py-3 ${props.twClasses}`}
      type={props.type === 'submit' ? 'submit' : 'button'}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  text: '',
  handleClick: () => {},
  twClasses: 'text-base',
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  twClasses: PropTypes.string,
  handleClick: PropTypes.func,
};
