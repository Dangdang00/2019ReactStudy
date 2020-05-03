import React from 'react';

const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람']; // 문자열로 구성된 배열 선언
    const nameList = names.map((name, index) => <li key={index}>{name}</li>); // 고유한 값이 없을 때만 index 값을 key로 사용해야함
    return <ul>{nameList}</ul>;
};

export default IterationSample;
