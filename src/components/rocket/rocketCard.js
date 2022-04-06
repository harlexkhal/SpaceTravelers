import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Badge from '../badge/Badge';

const RocketCard = ({
  reservaton, name, description, imgUrl,
}) => (
  <div className="flex flex-row h-40 ml-10 w-11/12 mb-5">
    <img src={imgUrl} className="w-52 h-full" alt="rocket-img" />
    <div className="ml-2.5">
      <h1 className="font-semibold">{name}</h1>
      <Badge twClasses={reservaton ? 'bg-blue-400' : 'hidden'} text="Reserved" />
      <p>
        {description}
      </p>
      <Button
        twClasses="bg-blue-500 text-white mt-2"
        text="Reserve Rocket"
        handleClick={() => {}}
        type="button"
      />
    </div>
  </div>
);

RocketCard.propTypes = {
  // id: PropTypes.string.isRequired,
  reservaton: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default RocketCard;
