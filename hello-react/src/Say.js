import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState(''); // 배열 비구조화 할당을 통해 이름을 자유롭게 정할 수 있다.
    // message 현재 상태, setMessage 상태를 바꾸어주는 함수
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [color, setColor] = useState('');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>Red</button>
            <button style={{ color: 'green' }} onClick = {() => setColor('green')}>Green</button>
            <button style={{ color: 'blue' }} onClick = {() => setColor('blue')}>Blue</button>
            <button style={{ color: 'black' }} onClick = {() => setColor('black')}>Black</button>
        </div>
    );
};

export default Say;
