interface Habit {
  id: number;
  name: string;
  des: string;
  activeDate: {
    [key: string]: ActiveDate,
  };
}

interface ActiveDate {
  isActive: boolean;
}
