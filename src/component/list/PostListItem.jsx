import styled from 'styled-components';


const Wrapper = styled.div`
    
    /* 너비를 전체 너비에서 32px를 뺀 값으로 설정합니다. */
    width: calc(100% - 32px);
    
    /* 컨텐츠 주변에 16px의 패딩을 설정합니다. */
    padding: 16px;
    
    /* 요소를 세로 방향으로 정렬하기 위해 컬럼 방향으로 설정합니다. */
    flex-direction: column;
    
    /* 요소를 수직으로 중앙 정렬합니다. */
    align-items: center;
    
    /* 요소를 수평으로 정렬합니다. */
    justify-content: center;
    
    /* 1px 너비의 회색 테두리를 설정합니다. */
    border: 1px solid grey;
    
    /* 요소의 테두리 반경을 8px로 설정합니다. */
    border-radius: 8px;
    
    /* 커서를 포인터로 변경하여 마우스 이벤트를 인식할 수 있도록 합니다. */
    cursor: pointer;
    
    /* 배경색을 흰색으로 설정합니다. */
    background: white;

    /* 마우스 커서가 해당 요소 위로 올라갔을 때의 배경색을 정의합니다. */
    :hover {
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;


function PostListItem(props) {
    const { post, onClick } = props;

    // Wrapper 컴포넌트를 클릭할 때 onClick 이벤트가 발생하도록 설정합니다.
    return (
        <Wrapper onClick={onClick}>
            {/* TitleText 컴포넌트를 사용하여 post의 제목을 렌더링합니다. */}
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;
