import React, { useEffect } from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { fetchAllRockets } from '../../store/rockets/Rockets';
import RocketCard from '../../components/rocket/rocketCard';

const Rockets = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllRockets());
  }, []);

  useSelector((state) => console.log(state));

  //console.log(rockets);
  return (
    <>
    <RocketCard id={1} reservaton name="Falcon 9" description="kfjksjakjfkasjf" />
    <RocketCard id={2} reservaton name="Falcon 7" description="kfjksjakjfkasjf" />
  </>
  )
}


export default Rockets;
