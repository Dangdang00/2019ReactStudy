import React from 'react';
import './App.css';

function App() {
  const name ='리액트';
    return (
      <>
        <div className="react">{name}</div>
        <input/>
        {/* <input></input> 혹은 <input />으로 태그를 닫아 주어야한다. */}
      </>
    )
}

export default App;
