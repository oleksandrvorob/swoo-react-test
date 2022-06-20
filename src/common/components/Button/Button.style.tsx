import styled from "styled-components";

export const ButtonBox = styled.button`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 160px;
  height: auto; /* 61px */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  overflow: visible;
  border-radius: 24px;
  border:none;
  @media (min-width: 991px) {
    cursor:pointer;
  } 
  outline:none;
`;

export const ButtonTitle = styled.p`
  flex-shrink: 0;
  width: auto; /* 23px */
  height: auto; /* 29px */
  white-space: pre;
  font-weight: 700;
  font-family: "Inter-Bold", "Inter", sans-serif;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 1.2;
  margin:0;
`;