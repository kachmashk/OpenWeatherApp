import Location from "./Location"
import DailyForecast from "./DailyForecast"
import HourlyForecast from "./HourlyForecast"
import TemperatureConverters from "../helpers/TemperatureConverters"

interface ICurrentForecast {
  sunrise: string
  sunset: string

  kelvinTemp: number
  fahrenheitTemp: number
  celsiusTemp: number

  kelvinFeelsLike: number
  fahrenheitFeelsLike: number
  celsiusFeelsLike: number

  pressure: string
  humidity: string

  clouds: string
  visibility: string

  windSpeed: string
  windDeg: number

  weather: string
}

export default class CurrentForecast implements ICurrentForecast {
  sunrise: string
  sunset: string

  kelvinTemp: number
  fahrenheitTemp: number
  celsiusTemp: number

  kelvinFeelsLike: number
  fahrenheitFeelsLike: number
  celsiusFeelsLike: number

  pressure: string
  humidity: string

  clouds: string
  visibility: string

  windSpeed: string
  windDeg: number

  weather: string

  location: Location

  hourlyForecast: HourlyForecast[]
  dailyForecast: DailyForecast[]

  constructor(response: any) {
    this.sunrise = new Date(response.current.sunrise).toLocaleTimeString()
    this.sunset = new Date(response.current.sunset).toLocaleTimeString()

    this.kelvinTemp = Math.round(response.current.temp)
    this.fahrenheitTemp = TemperatureConverters.kelvinToFahrenheit(
      response.current.temp
    )
    this.celsiusTemp = TemperatureConverters.kelvinToCelsius(
      response.current.temp
    )

    this.kelvinFeelsLike = Math.round(response.current.feels_like)
    this.fahrenheitFeelsLike = TemperatureConverters.kelvinToFahrenheit(
      response.current.feels_like
    )
    this.celsiusFeelsLike = TemperatureConverters.kelvinToCelsius(
      response.current.feels_like
    )

    this.pressure = `${response.current.pressure}hPa`
    this.humidity = `${response.current.humidity}%`

    this.clouds = `${response.current.clouds}%`
    this.visibility = `${response.current.visibility}m`

    this.windSpeed = `${response.current.wind_speed}m/s`
    this.windDeg = response.current.wind_deg

    this.weather = response.current.weather[0].main

    let hourlyForecast: HourlyForecast[] = []
    let dailyForecast: DailyForecast[] = []

    for (let x = 0; x < 13; x++) {
      const temp = new HourlyForecast(response.hourly[x], x)
      hourlyForecast.push(temp)
    }

    for (let x = 0; x < response.daily.length; x++) {
      const temp = new DailyForecast(response.daily[x], x)
      dailyForecast.push(temp)
    }

    this.hourlyForecast = hourlyForecast
    this.dailyForecast = dailyForecast
  }
}
