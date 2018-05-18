import React from 'react';
import Searchbar from './Searchbar';
import Search from './Search';
import Results from './Results';

export default function App() {
  return (
    <React.Fragment>
      {/* <Searchbar /> */}
      <Search />
      <Results />
    </React.Fragment>
  );
}

