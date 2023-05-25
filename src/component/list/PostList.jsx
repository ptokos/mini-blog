import styled from 'styled-components';
import PostListItem from './PostListItem';


const Wrapper = styled.div`
    
    displayL flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
 
`;


function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            {/* posts 배열을 map 함수를 사용하여 순회합니다. */}
            {posts.map((post) => {
                return (
                    <PostListItem
                        key={post.id} // 각 PostListItem 컴포넌트에 key로 post의 id를 할당합니다.
                        post={post} // 현재 순회 중인 post를 PostListItem 컴포넌트에 전달합니다.
                        onClick={() => {
                            onClickItem(post); // 클릭 이벤트 발생 시 onClickItem 함수를 호출하고, post를 인자로 전달합니다.
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;
