// /project-root/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Menu from './Components/Menu';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <Routes>
          <Route path="/a" element={<ComponentA />} />
          <Route path="/b" element={<ComponentB />} />
          <Route path="/c" element={<ComponentC />} />
          <Route path="/" element={<ComponentA />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
