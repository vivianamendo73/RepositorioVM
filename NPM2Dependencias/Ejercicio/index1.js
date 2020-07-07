const CalendarDates = require("calendar-dates");
const calendarDates = new CalendarDates();

const log = console.log;
const may2018 = new Date(2018, 4);

mainAsync = async () => {
  const mayDates = await calendarDates.getDates(may2018);
  const mayMatrix = await calendarDates.getMatrix(may2018);
  log(`May, 2018 Dates`, mayDates);
  log(`May, 2018 Matrix`, mayMatrix);
};
mainAsync();