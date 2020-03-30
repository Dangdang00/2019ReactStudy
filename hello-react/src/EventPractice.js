import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: '' // state 초깃값 설정
    }

    constructor(props) { // 함수를 바인딩하는 작업
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handClick = this.handleClick.bind(this);
        // this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩해야함
        // 바인딩 하지 않으면 this가 undefined를 가리키게 된다.
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick() {
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
