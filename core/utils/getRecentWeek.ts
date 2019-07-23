import { Week } from "../types/Date";

export const getRecetWeek = (): Week => {
  const weekDates: number[] = new Array(6);
  const weekDay: number[] = [];
  weekDates.fill(0).forEach((val, index) => {
    const day = new Date().getDay() - index;
    const date = new Date().getDate() - index;
    weekDay[index] = day < 0 ? day + 7 : day;
    weekDates[index] = date;
  });
  return {
    weekDates,
    weekDay,
  };
}
