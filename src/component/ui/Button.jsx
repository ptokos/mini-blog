import styled from 'styled-components';

// styled-components를 import합니다.

const StyledButton = styled.button`
    /* 버튼 스타일을 정의합니다. */
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    boder-radius: 8px;
    cursor: pointer;
    margin-bottom: 8px;
`;

function Button(props) {
    // props로부터 title과 onClick을 추출합니다.
    const { title, onClick } = props;

    // styledButton를 사용하여 버튼을 렌더링합니다.
    return <StyledButton onClick={onClick}>{title || 'button'}</StyledButton>;
}

export default Button;
