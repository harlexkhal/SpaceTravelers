import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/button/Button';
import Badge from '../../components/badge/Badge';
import { getMissions } from '../../store/missions/Missions';

const Missions = () => {
  const missionsList = useSelector(
    (state) => state.missions.missionsList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missionsList.length) dispatch(getMissions());
  }, []);

  return (
    <main className="mt-6 px-12 w-full">
      <table className="table-fixed w-full border-2">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missionsList.map((dataEntry) => (
            <tr
              key={dataEntry.id}
              className="even:bg-gray-100 border-2 border-gray-400"
            >
              <td className=" border-2 p-2 align-top">
                {dataEntry.mission}
              </td>
              <td className=" border-2 p-2">
                {dataEntry.description}
              </td>
              <td className=" border-2 p-2">
                <div className="grid grid-cols-2  p-2 justify-items-center items-center">
                  <Badge
                    text={dataEntry.status[0]}
                    twClasses="bg-sky-500 text-md w-fit"
                  />
                  <Button
                    text={dataEntry.status[1]}
                    twClasses="border-sky-500 border-2 text-md w-fit"
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
