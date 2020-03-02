import React from "react";
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent name="다영" favoriteNumber={7}>리액트</MyComponent>;
};

export default App;
// App 컴포넌트에서 MyComponent를 사용할 떄 props를 바꾸어 주어야 값 변경 가능