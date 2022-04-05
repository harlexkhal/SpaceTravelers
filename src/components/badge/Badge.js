import React from 'react';
import PropTypes from 'prop-types';

export default function Badge({ ...props }) {
  return (
    <div
      className={`rounded p-2 text-base text-white min-w-fit  ${props.twClasses}`}
    >
      {props.text}
    </div>
  );
}

Badge.defaultProps = {
  twClasses: '',
  text: '',
};

Badge.propTypes = {
  text: PropTypes.string,
  twClasses: PropTypes.string,
};
