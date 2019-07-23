import React from "react";
import styled from "styled-components";
import { getRecetWeek } from "../../core/utils/getRecentWeek";
import { DateItem } from "./DateItem";

export const DateList = () => {
  const week = getRecetWeek();
  const { weekDay, weekDates } = week;
  return (
    <Container>
      <DateWrap/>
      <DateWrap>
        {weekDay.map((val, index) => (
          <DateItem key={index} weekDates={weekDates[index]} weekDay={val} />
        ))}
      </DateWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #888;
  display: flex;
  align-items: center;
`;

const DateWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
`;
