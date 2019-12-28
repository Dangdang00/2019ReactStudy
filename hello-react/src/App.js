import React from 'react';

function App() {
  const name = '리액트';
  return (
    <div>
      {/* {조건 ? (참일때) : (거짓일때)} */}
      {/*{name === '리액트' ? <h1>리액트입니다.</h1> : null}*/}
      {name === '리액트' && <h1>리액트입니다.</h1>}
      {/* 0은 예외적으로 화면에 나타난다. */}
    </div>
  );
}

export default App;
