import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyC9i1zm6nLbWqofCwPfd7IgEPVDwP-JbgY';

const App = () => {
  return (
      <div>
        <SearchBar /> 
      </div>
  )
};

ReactDOM.render(<App />, document.querySelector('.container'));
