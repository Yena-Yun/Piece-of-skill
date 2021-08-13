import React from "react";
import styled from "styled-components";

const RightNav = ({ open }) => {
  return (
    // props로 받아온 open을 style 컴포넌트에 전달
    <Ul open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none; // list-style: none은 li가 아닌 ul에 넣는다!
  display: flex;
  flex-flow: row nowrap; // flex-flow = flex-direction + flex-wrap

  li {
    padding: 18px 0 18px 14px;
  }

  /* 'screen and' 생략 가능 */
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538; // 약간 밝은 남색 배경

    /* 전달받은 open의 state에 따라 메뉴바 보였다 안 보였다 하기 (슬라이드 기능) */
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    // 화면의 특정 위치에 고정 (화면의 위치: top, right으로 지정)
    position: fixed;
    top: 0;
    right: 0;

    width: 300px;
    height: 100vh;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

export default RightNav;
