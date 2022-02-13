import React from 'react';
import styled, { css } from 'styled-components';

const LoginSignupBtn = ({ main, top }) => {
  const styles = {
    main,
    top,
  };

  return (
    <Wrapper {...styles}>
      <SignUpBtn {...styles}>Create account</SignUpBtn>
      <LogInBtn {...styles}>Log in</LogInBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  ${(props) =>
    props.main &&
    css`
      flex-direction: column;
    `};
`;

const SignUpBtn = styled.button`
  height: 40px;
  color: #3b49df;
  border: 1px solid #3b49df;
  padding: 7px 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 6px;
  margin-bottom: 4px;

  ${(props) =>
    props.top &&
    css`
      order: 2;
    `};

  &:hover {
    background: #3b49df;
    color: #fff;
  }
`;

const LogInBtn = styled.button`
  height: 40px;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
  color: #404040;

  ${(props) =>
    props.top &&
    css`
      order: 1;
    `};

  &:hover {
    color: #2f3ab2;
    background: #ebecfc;
    text-decoration: underline solid #2f3ab2;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default LoginSignupBtn;
