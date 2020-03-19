import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: '' // state 초깃값 설정
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
                    onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value // state 업데이트
                            })
                        }
                    }
                />

                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: '' // 값을 공백으로 변경
                        });
                    }
                }>확인</button>
            </div>
        );
    }
}

export default EventPractice;
