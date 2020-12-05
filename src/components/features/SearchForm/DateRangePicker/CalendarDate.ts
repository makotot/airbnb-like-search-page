import { isSameMonth, isFuture, format } from "date-fns";

export class CalendarDate {
  value: number;
  date: Date;

  constructor(date: Date) {
    this.value = date.getDate();
    this.date = date;
  }

  get dashed() {
    return format(this.date, "yyyy-MM-dd");
  }

  public isSameMonth(comparedDate: Date) {
    return isSameMonth(this.date, comparedDate);
  }

  public unlessFuture() {
    return !isFuture(this.date);
  }

  public static create(date: Date) {
    if (date instanceof Date) {
      return new CalendarDate(date);
    }
  }
}
