import React from 'react';
import styled from 'styled-components';

const RightNav = ({ open }) => {
  return (
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
  list-style: none; // li가 아닌 ul에 넣기
  display: flex;
  flex-flow: row nowrap; // flex-direction + flex-wrap

  li {
    padding: 18px 0 18px 14px;
  }

  /* 'screen and' 생략 가능 */
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
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
