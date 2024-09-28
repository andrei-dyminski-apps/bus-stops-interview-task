export const completeTime = (time: string): string => {
  const timeParts = time.split(":");

  if (timeParts.length === 1 || time.length > 5 || time.length < 4)
    throw new Error("Invalid time format");

  if (timeParts[0].length === 1) timeParts[0] = `0${timeParts[0]}`;

  return timeParts.join(":");
};
