import React from "react";
import styled from "styled-components";
import { WeekDay } from "../../core/types/Date";

interface DateItemProps {
  weekDay: number;
  weekDates: number;
}
export const DateItem: React.FunctionComponent<DateItemProps> = ({ weekDay, weekDates }) => (
  <Item>
    <p>{WeekDay[weekDay]}</p>
    {weekDates}
  </Item>
);

const Item = styled.div`
  flex: 1;
  width: 30px;
  height: 35px;
  font-size: 12px;
  p {
    margin: 0;
    padding: 0;
  }
`;
