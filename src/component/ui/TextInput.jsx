import styled from 'styled-components';

const StyledTextarea = styled.button`
    width: calc(100% - 32px);
    ${props => props.height && `height: ${props.height}px;`}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props) {
 
    const { height, value, onChange } = props;

   // StyledTextarea 컴포넌트를 렌더링합니다. height, value, onChange를 props로 전달합니다.
    return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
