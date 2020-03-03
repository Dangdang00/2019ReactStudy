import React, { Component } from 'react';

class Counter extends Component {
    // constructor 메서드를 선언하지 않고도 state의 초깃값을 설정할 수 있다.
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                    onClick={() => {
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                            // setState를 사용하여 값을 업데이트하고 난 다음 특정 작업을 하고 싶을 때,
                            // setState의 두 번째 피라미터로 콜백 함수 등록
                        )
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;