import React from 'react';

const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람']; // 문자열로 구성된 배열 선언
    const nameList = names.map(name => <li>{name}</li>); // 배열 값을 사용해 JSX코드로 된 배열을 새로 생성한 후 nameList에 담기
    return <ul>{nameList}</ul>;
};

export default IterationSample;
