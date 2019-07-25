import Store from "store";

interface HabbitStorage {
  setHabit(habit): void;
  getHabit(): any;
  cleanStorage(): void;
}

class StorageImpl implements HabbitStorage {
  private static HABIT = "habit";
  public setHabit(habit): void {
    if (habit) {
      Store.set(StorageImpl.HABIT, habit);
    }
  }

  public getHabit(): any {
    return Store.get(StorageImpl.HABIT);
  }

  public cleanStorage(): void {
    Store.clearAll();
  }
}

export { StorageImpl };
