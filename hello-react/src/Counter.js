import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // state의 초깃값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                    onClick={() => {
                        //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                        // this.setState 함수는 인자로 전달된 객체 안에 들어있는 값만 바꾸어준다.
                        this.setState({ number: number+1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;