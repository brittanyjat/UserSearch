import React from 'react';
import Search from './Search';
import AddUser from './AddUser';
import Results from './Results';

export default function App() {
  return (
    <React.Fragment>
      <Search />
      <AddUser />
      <Results />
    </React.Fragment>
  );
}

