import DateCounters from "../helpers/DateCounters"
import TemperatureConverters from "../helpers/TemperatureConverters"

interface IHourlyForecast {
  time: string

  kelvinTemp: string
  fahrenheitTemp: string
  celsiusTemp: string

  kelvinFeelsLike: string
  fahrenheitFeelsLike: string
  celsiusFeelsLike: string

  pressure: number
  humidity: number

  clouds: string
  visibility: number

  windSpeed: number
  windDeg: number

  weather: string
}

export default class HourlyForecast implements IHourlyForecast {
  time: string

  kelvinTemp: string
  fahrenheitTemp: string
  celsiusTemp: string

  kelvinFeelsLike: string
  fahrenheitFeelsLike: string
  celsiusFeelsLike: string

  pressure: number
  humidity: number

  clouds: string
  visibility: number

  windSpeed: number
  windDeg: number

  weather: string

  constructor(response: any, index: number) {
    this.time = DateCounters.getTimeIncrementedByMinute(index + 1)

    this.kelvinTemp = `${response.temp}°K`
    this.fahrenheitTemp = `${TemperatureConverters.kelvinToFahrenheit(
      response.temp
    )}°F`
    this.celsiusTemp = `${TemperatureConverters.kelvinToCelsius(
      response.temp
    )}°C`

    this.kelvinFeelsLike = `${response.feels_like}°K`
    this.fahrenheitFeelsLike = `${TemperatureConverters.kelvinToFahrenheit(
      response.feels_like
    )}°F`
    this.celsiusFeelsLike = `${TemperatureConverters.kelvinToCelsius(
      response.feels_like
    )}°C`

    this.pressure = response.pressure
    this.humidity = response.humidity

    this.clouds = `${response.clouds}%`
    this.visibility = response.visibility

    this.windSpeed = response.wind_speed
    this.windDeg = response.wind_deg

    this.weather = response.weather[0].main
  }
}
