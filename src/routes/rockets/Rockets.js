import React, {useEffect} from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { fetchAllRockets } from '../../store/rockets/Rockets';
import RocketCard from '../../components/rocket/rocketCard';

const Rockets = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllRockets());
  }, []);

  const rockets = useSelector((state) => state.rockets);

  const list = rockets.map((rocket) => {
    return (
      <RocketCard
        key={rocket.id}
        id={rocket.id}
        reservaton
        name={rocket.name}
        description={rocket.description}  
        imgUrl={rocket.imgUrl}
      />
    );
  });

  return (
    <>
     {list}
    </>
  )
}


export default Rockets;
