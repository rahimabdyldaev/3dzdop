import React from 'react';
import { useSelector } from 'react-redux';

const ComponentB = () => {
  const previousPath = useSelector((state) => state.navigation.path);
  return (
    <div>
      <h1>Component B</h1>
      {previousPath && <p>Previous component: {previousPath}</p>}
    </div>
  );
};

export default ComponentB;
