class DateUtility {
  getDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth();
    const day = today.getDate();
    return [year, month, day].join("-");
  };
}
export const dateUtil = new DateUtility();
