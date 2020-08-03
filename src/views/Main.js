import React from 'react';
import '../styles/Main.styles.css';
import MapElement from '../components/map';
import SearchBox from '../layouts/search-box';

function App() {
  return (
    <div className="App">
        { /* Map Container */ }
        <MapElement/>

        { /* Search Box */ }
        <SearchBox/>

    </div>
  );
}

export default App;
