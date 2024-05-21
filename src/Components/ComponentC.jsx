import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const previousPath = useSelector((state) => state.navigation.path);
  return (
    <div>
      <h1>Component C</h1>
      {previousPath && <p>Previous component: {previousPath}</p>}
    </div>
  );
};

export default ComponentC;