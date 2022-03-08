
import './App.scss';
import React from 'react';
import List from './components/list';
import Headline from "./components/headline";

function App() {
  return (
    <div className="App">
      <Headline />
      <List />
    </div>
  );
}

export default App;
