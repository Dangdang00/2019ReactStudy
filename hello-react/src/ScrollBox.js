import React, { Component } from 'react';

class ScrollBox extends Component {
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

        scrollToBottom = () => {
            const{ scrollHeight, clientHeight } = this.Box; // 비구조화 할당 문법 사용
            /*  위의 코드와 같은 의미
                const scrollHeight = this.box.scrollHeight;
                const clientHeight = this.box.clientHeight;
            */
           this.box.scrollTop = scrollHeight - clientHeight;
        }

        return (
            <div
                style={style}
                ref={ref => {this.box=ref}}>
                <div style={innerStyle}/>
            </div>
        )
    }
}

export default ScrollBox;
