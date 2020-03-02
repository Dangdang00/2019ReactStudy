import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다.<br/>
                children값은 {children}입니다.<br/>
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
};

export default MyComponent;
// MyComponent에서는 App 컴포넌트에서 전달받은 name 값을 직접 바꿀 수 없다.