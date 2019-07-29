export interface Habit {
  id: number;
  name: string;
  des: string;
  activeDate: {
    [key: string]: ActiveDate,
  };
}

export interface ActiveDate {
  isActive: boolean;
}
