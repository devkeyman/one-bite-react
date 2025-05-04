export const getStringedDate = (targetDateStr) => {
  // 날짜 - YYYY-MM-DD
  const targetDate = new Date(targetDateStr);

  let year = targetDate.getFullYear();
  let month =
    targetDate.getMonth() + 1 < 10
      ? `0${targetDate.getMonth() + 1}`
      : targetDate.getMonth() + 1;
  let date =
    targetDate.getDate() < 10
      ? `0${targetDate.getDate()}`
      : targetDate.getDate();

  return `${year}-${month}-${date}`;
};
