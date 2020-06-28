class DateUtility {
  getDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    return year + month + day;
  };
}
export const dateUtil = new DateUtility();
