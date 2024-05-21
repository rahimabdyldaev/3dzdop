import React from 'react';
import { useSelector } from 'react-redux';

const ComponentA = () => {
  const previousPath = useSelector((state) => state.navigation.path);
  return (
    <div>
      <h1>Component A</h1>
      {previousPath && <p>Previous component: {previousPath}</p>}
    </div>
  );
};

export default ComponentA;