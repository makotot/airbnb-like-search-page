import { isAfter, isBefore } from 'date-fns'
import { toDate } from './utils'

export class DateRange {
  start: Date;
  end: Date;

  constructor ({ start, end }: { start: Date; end: Date }) {
    this.start = start
    this.end = end
  }

  public static create ({ start, end }: {start: string; end: string }) {
    const startDate = toDate(start)
    const endDate = toDate(end)

    return new DateRange({ start: startDate, end: endDate })
  }

  public isDuring (date: Date) {
    return [
      isBefore(date, this.start),
      isAfter(date, this.end)
    ].every(v => !v)
  }
}
