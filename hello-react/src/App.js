import React from 'react';

function App() {
  const name = '다영';
  return (
    <div>
      {/* {조건 ? (참일때) : (거짓일때)} */}
      {name === '리액트' ? (
        <h1>리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  );
}

export default App;
