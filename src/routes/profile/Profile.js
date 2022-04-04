import React from 'react';
import Button from '../../components/button/Button';

const Profile = () => {
  const testStyle = 'bg-red-500';
  return (
    <div>
      <h1>My Profile</h1>
      <Button
        twClasses={testStyle}
        text="this is a button"
        handleClick={() => {}}
        type="button"
      />
    </div>
  );
};

export default Profile;
