export type postType = {
  page: number;
  contents: string;
};

// 전체 postList 배열에서 받아온 page 번호와 페이지가 일치하는 객체만 반환하는 함수
export const getPostList = (page: number): postType[] => {
  return postList.filter((post: postType) => post.page === page);
};

export const postList: postType[] = [
  {
    page: 1,
    contents: '안녕하세요 1번째 글',
  },
  {
    page: 1,
    contents: '안녕하세요 2번째 글',
  },
  {
    page: 1,
    contents: '안녕하세요 3번째 글',
  },
  {
    page: 2,
    contents: '안녕하세요 4번째 글',
  },
  {
    page: 2,
    contents: '안녕하세요 5번째 글',
  },
  {
    page: 2,
    contents: '안녕하세요 6번째 글',
  },
  {
    page: 3,
    contents: '안녕하세요 7번째 글',
  },
  {
    page: 3,
    contents: '안녕하세요 8번째 글',
  },
  {
    page: 3,
    contents: '안녕하세요 9번째 글',
  },
  {
    page: 4,
    contents: '안녕하세요 10번째 글',
  },
];
