import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { getPostList, postType } from '../lib/postList';

const InfiniteScroll = (): JSX.Element => {
  const [page, setPage] = useState<number>(1); // 요청할 페이지 번호
  const [posts, setPosts] = useState<postType[]>(getPostList(1)); // posts 배열의 초기값은 페이지가 1인 객체들

  const handleScroll = useCallback((): void => {
    // 브라우저창 크기 (뷰포트)
    const { innerHeight } = window;
    // 브라우저 컨텐츠 전체 크기 (안 보이는 내용 포함)
    const { scrollHeight } = document.body;
    // 현재 스크롤바 위치
    const { scrollTop } = document.documentElement;

    // ** 스크롤이 현재 렌더링된 컨텐츠의 가장 아래에 도달하면
    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      // 다음 페이지 내용을 렌더링할 배열에 추가하고
      setPosts((posts: postType[]) => [...posts, ...getPostList(page + 1)]);
      // 페이지 변수에는 1을 더해준다. (윗줄과 자리를 바꾸거나 이 줄을 생략하면 이상하게 실행됨)
      setPage((prevPage: number) => prevPage + 1);
    }
  }, [page]);

  // 새로고침 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    // 이벤트 리스너 3항에 true가 들어가면 = 이벤트 캡처링을 사용한다는 뜻
    window.addEventListener('scroll', handleScroll);

    // useEffect의 return 정리문: 해당 컴포넌트가 언마운트될 때 실행
    // 해당 컴포넌트가 언마운트되면 스크롤 이벤트 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Container>
      {posts.map((post: postType, idx: number) => (
        <PostItem key={idx}>{post.contents}</PostItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 4rem auto;
`;

const PostItem = styled.div`
  width: 100%;
  height: 350px;
  border: 2px solid #000000;
`;

export default InfiniteScroll;
