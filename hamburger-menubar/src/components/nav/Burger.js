import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const Burger = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        {/* div 세개 - 햄버거 바 아이콘 구현 */}
        <div />
        <div />
        <div />
      </StyledBurger>

      {/* state값을 props로 전달 */}
      <RightNav open={open} />
    </>
  );
};

const StyledBurger = styled.div`
  width: 32px;
  height: 32px;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  // div 3개 - 햄버거 바 아이콘
  div {
    width: 32px;
    height: 4px;
    /* open 상태에 따라 햄버거 색깔 바꾸기 */
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px; // transform: rotate(45deg)에서 요소가 회전하는 '축'
    transition: all 0.2s linear;

    /* 메뉴바가 열려 있을 때 햄버거 아이콘을 X자로 만드는 애니메이션 */
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(15%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default Burger;
