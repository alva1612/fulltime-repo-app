export const paddForDates = (text: string) => {
  return text.padStart(2, "0");
};

export const decomposeDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const paddedDay = paddForDates(day + "");

  const month = date.getMonth();
  const paddedMonth = paddForDates(month + "");

  const year = date.getFullYear();

  const hour = date.getHours();
  const paddedHour = paddForDates(hour + "");

  const minute = date.getMinutes();
  const paddedMinute = paddForDates(minute + "");

  return { year, paddedMonth, day, paddedDay, paddedHour, paddedMinute };
};
