import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message: '' // state 초깃값 설정
    }

    // 메서드 바인딩 -> 생성자 메서드에서 해야함, 새 메서드를 만들때마다 constructor을 수정해야함
    // 이를 간단하게 하기 위해서 화살표 함수 형태로 메서드 정의
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
            // 객체 안에서 key를 [ ]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />

                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
