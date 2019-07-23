import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <Title>我的習慣</Title>
      <Link href={"create"}><Plus>+</Plus></Link>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  display: flex;
  background: red;
  align-items: center;
  padding: 10px;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 16px;
  margin: 0;
  padding: 0;
  flex: 1;
`;

const Plus = styled.span`
  font-size: 24px;
  margin: 0;
  padding: 0;
`;
