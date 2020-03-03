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
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1
                            };
                        });
                        // 위 코드와 아래 코드는 똑같은 기능을 한다.
                        // 아래 코드는 함수에서 바로 객체를 반환한다는 의미이다.
                        this.setState(prevState => ({   // 화살표 함수에서 바로 객체를 반환하도록 했기 때문에 prevState => ({ })의 형태
                            number: prevState.number + 1
                        }));
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;