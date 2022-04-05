import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Badge from '../badge/Badge';
import rocket from '../../rocket.jpg';

const RocketCard = ({
  id, reservaton, name, description,
}) => (
  <div className="flex flex-row h-40 ml-10 w-11/12">
    <img src={rocket} alt="rocket-img" />
    <div className="ml-2.5">
      <h1 className="font-semibold">Falcon 9</h1>
      <Badge twClasses={reservaton ? 'bg-blue-400' : 'hidden'} text="Reserved" />
      <p>
        Ready for launch jska kjasj k akf ak ak ak  kjs ak kajf
        ak f jkajfa kj  aj skfj la jka a jska  jskfjsk
        sk j ask fa kaja ljkisa ja jfa kj kak kja fkjfas jak fjk ak
        jfk ka fkajk f ksa f aj fajfkajf jf akj ajf ajs
        akjflaj fjf jksjal fjl jfa
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
  id: PropTypes.number.isRequired,
  reservaton: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketCard;
