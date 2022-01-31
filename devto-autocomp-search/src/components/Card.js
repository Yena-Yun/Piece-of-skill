import React from 'react';
import styled from 'styled-components';
import DevtoUser from '../assets/img/devto-user.jpg';

const Card = () => {
  return (
    <Wrapper>
      <PostHeader>
        <UserProfile>
          <UserImage src={DevtoUser} alt='user-profile' />
        </UserProfile>
        <UserInfo>
          <Username>Michael Sakhniuk</Username>
          <DateLink>
            <time>Jan 5 '21</time>
          </DateLink>
        </UserInfo>
      </PostHeader>
      <PostSection>
        <Title>
          <TitleLink>300+ React Interview Questions</TitleLink>
        </Title>
        <HashTagList>
          <HashTagItem href='/'>#react</HashTagItem>
          <HashTagItem href='/'>#webdev</HashTagItem>
          <HashTagItem href='/'>#javascript</HashTagItem>
          <HashTagItem href='/'>#beginners</HashTagItem>
        </HashTagList>
        <PostFooter>
          <Details>
            <Reactions>2220 reactions</Reactions>
            <AddComments>32 comments</AddComments>
          </Details>
          <Save>
            <ReadLength>128 min read</ReadLength>
            <SaveBtn>
              <span>Save</span>
            </SaveBtn>
          </Save>
        </PostFooter>
      </PostSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 696px;
  padding: 20px;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.1);

  @media screen and (max-width: 1024px) {
    width: auto;
  }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

const UserProfile = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

const UserImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.button`
  font-size: 14px;
  color: #3d3d3d;
  padding: 4px;
`;

const DateLink = styled.span`
  font-size: 12px;
  color: #525252;
`;

const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;

const Title = styled.h3`
  margin-bottom: 4px;
  color: rgb(23, 23, 23);
  line-height: 1.25;
  font-size: 24px;
  word-break: break-word;
`;

const TitleLink = styled.a`
  display: block;
`;

const HashTagList = styled.div`
  margin-bottom: 4px;
  display: flex;
`;

const HashTagItem = styled.a`
  display: block;
  color: rgb(64, 64, 64);
  padding: 4px 7px;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Details = styled.div`
  display: flex;
`;

const Reactions = styled.span`
  color: #3d3d3d;
  padding: 4px 12px 4px 8px;
`;

const AddComments = styled.span`
  color: #3d3d3d;
  padding: 4px 12px 4px 8px;
`;

const Save = styled.div`
  display: flex;
`;

const ReadLength = styled.div`
  margin-right: 8px;
  font-size: 12px;
  color: #525252;
`;

const SaveBtn = styled.div`
  padding: 4px 12px;
  background: #d6d6d7;
  color: #3d3d3d;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border-radius: 7px;

  &:hover {
    background: #bdbdbd;
    color: #090909;
  }
`;

export default Card;
