import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const activeMissionsList = useSelector((state) => state.missions.missionsList.filter(
    (element) => element.reserved,
  ));

  const displayActiveMissions = () => {
    if (activeMissionsList.length) {
      return activeMissionsList.map((element) => (
        <li
          className="w-full h-24 text-xl font-medium p-2 first:rounded-tl first:rounded-tr last:rounded-bl last:rounded-br border-2 border-gray-500"
          key={element.mission}
        >
          {element.mission}
        </li>
      ));
    }
    return (
      <li className="flex w-full h-24 text-3xl font-lg text-gray-500 border-4 border-gray-500 items-center justify-center">
        NO ACTIVE MISSIONS
      </li>
    );
  };

  return (
    <main className="mt-6 px-12 w-full flex flex-col gap-6 md:flex-row">
      <section className="w-1/2">
        <h2 className="text-3xl font-semibold pl-2 pb-4">
          My missions
        </h2>
        <ul className="flex flex-col">
          {displayActiveMissions()}
        </ul>
      </section>
      <section className="w-1/2">
        <h2 className="text-3xl font-semibold pl-2 pb-4">
          My Rockets
        </h2>
        <ul className="flex flex-col">
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
        </ul>
      </section>
    </main>
  );
};

export default Profile;
