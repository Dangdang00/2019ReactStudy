import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: '' // state 초깃값 설정
    }

    // 메서드 바인딩 -> 생성자 메서드에서 해야함, 새 메서드를 만들때마다 constructor을 수정해야함
    // 이를 간단하게 하기 위해서 화살표 함수 형태로 메서드 정의
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
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
