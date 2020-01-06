import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다.<br/>
            children값은 {children}입니다.<br/>
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
    {/* 뒤에 isRequired를 붙여준다 */}
};

export default MyComponent;
