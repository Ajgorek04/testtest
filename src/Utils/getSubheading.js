export function getSubHeading(numberOfTasks) {
  switch (true) {
    case numberOfTasks > 4:
      return `${numberOfTasks} zadań`;
    case numberOfTasks > 1:
      return `${numberOfTasks} zadania`;
    case numberOfTasks === 1:
      return `1 zadanie`;
    default:
      return "Brak zadań";
  }
}
