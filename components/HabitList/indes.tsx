import React from "react";
import styled from "styled-components";
import { getRecetWeek } from "../../core/utils/getRecentWeek";

const mockHabitList = {
  20160709: {
    isActive: true,
  },
};

export const HabitList = () => {
  const week = getRecetWeek();
  return (
    <Container>
      <Title>Wake up early</Title>
      <ClickWrap>
        {week.weekDay.map((val, index) => (
          <Item key={index}>Y</Item>
        ))}
      </ClickWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  margin: 5px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
`;

const ClickWrap = styled.div`
  flex: 1;
  display: flex;
`;

const Item = styled.div`
  flex: 1;
  width: 30px;
  height: 35px;
  font-size: 12px;
  margin-right: 10px;
  p {
    margin: 0;
    padding: 0;
  }
`;
