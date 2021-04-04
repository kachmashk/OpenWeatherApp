import moment from "moment"

export default class DateCounters {
  static getTimeIncrementedByMinute(addition: number): string {
    const today: moment.Moment = moment(new Date())
    today.add(addition, "hours")

    let minutes: string = today.minutes().toString()

    if (minutes.toString().length === 1) {
      minutes = `0${minutes}`
    }

    return `${today.hour()}:${minutes}`
  }

  static getDateIncrementedByDay(addition: number): string {
    const today: moment.Moment = moment(new Date())
    today.add(addition, "day")

    return `${today.date()}/${today.month() + 1}`
  }
}
