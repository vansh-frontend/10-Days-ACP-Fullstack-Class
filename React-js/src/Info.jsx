import React from 'react';

const Info = (props) => {
  return (
    <div>
      <h1>Username: {props.username}</h1>
      <h1>Password: {props.password}</h1>
    </div>
  );
};

export default Info;
