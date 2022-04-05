import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/button/Button';
import Badge from '../../components/badge/Badge';
import {
  getMissions,
  joinMission,
} from '../../store/missions/Missions';

const Missions = () => {
  const missionsList = useSelector(
    (state) => state.missions.missionsList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missionsList.length) dispatch(getMissions());
  }, []);

  const toggleJointMission = (event) => {
    const missionId = event.target.id;
    dispatch(joinMission(missionId));
  };

  return (
    <main className="mt-6 px-12 w-full">
      <table className="table-fixed w-full border-2">
        <thead>
          <tr className="bg-gray-500 text-white text-left">
            <th className="pl-2">Mission</th>
            <th className="pl-2">Description</th>
            <th className="pl-2">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-grey-500">
          {missionsList.map((dataEntry) => (
            <tr
              key={dataEntry.id}
              className="even:bg-gray-100"
            >
              <td className=" border-2 p-3 align-top text-2xl font-medium">
                {dataEntry.mission}
              </td>
              <td className=" border-2 p-3">
                {dataEntry.description}
              </td>
              <td className=" border-2 p-3">
                <div className="grid grid-cols-2  p-2 justify-items-center items-center">
                  <Badge
                    text={`${
                      dataEntry.reserved
                        ? 'Active member'
                        : 'Not a Member'
                    }`}
                    twClasses={`text-base px-2 font-medium text-white ${
                      dataEntry.reserved
                        ? 'bg-sky-500'
                        : 'bg-gray-500'
                    }`}
                  />
                  <Button
                    id={String(dataEntry.id)}
                    text={`${
                      dataEntry.reserved
                        ? 'Leave mission'
                        : 'Join Mission'
                    }`}
                    twClasses={`border-2 text-lg font-medium w-fit px-2 py-1  ${
                      dataEntry.reserved
                        ? 'border-red-500 text-red-500'
                        : 'border-gray-500 text-gray-500'
                    }`}
                    handleClick={toggleJointMission}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Missions;
