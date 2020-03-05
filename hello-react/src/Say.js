import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState(''); // 배열 비구조화 할당을 통해 이름을 자유롭게 정할 수 있다.
    // message 현재 상태, setMessage 상태를 바꾸어주는 함수
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;
