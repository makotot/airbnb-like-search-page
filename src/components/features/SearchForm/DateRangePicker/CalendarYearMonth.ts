import { getWeeksInMonth, eachDayOfInterval, addDays, startOfMonth, startOfWeek } from 'date-fns'
import { WEEK_DAYS } from './config'

const WEEK_DAY_LENGTH = WEEK_DAYS.length

export class CalendarYearMonth {
  month: number;
  year: number;
  date: Date;

  constructor (date: Date) {
    this.month = date.getMonth() + 1
    this.year = date.getFullYear()
    this.date = date
  }

  get formatted () {
    return `${this.year}年${this.month}月`
  }

  get totalDays () {
    const start = startOfWeek(startOfMonth(this.date))
    const end = addDays(start, (WEEK_DAY_LENGTH * getWeeksInMonth(this.date)) - 1)

    return eachDayOfInterval({ start, end })
  }

  public static create (date: Date) {
    if (date instanceof Date) {
      return new CalendarYearMonth(date)
    }
  }
}
