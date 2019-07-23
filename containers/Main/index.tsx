import React from "react";
import { DateList } from "../../components/DateList";
import { HabitList } from "../../components/HabitList/indes";
import { Header } from "../../components/Header";

export const Main = () => {
  return (
    <>
      <Header />
      <DateList />
      <HabitList/>
    </>
  );
};

