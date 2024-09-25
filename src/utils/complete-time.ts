export const completeTime = (time: string): string =>
  time.length === 4 ? `0${time}` : time;
