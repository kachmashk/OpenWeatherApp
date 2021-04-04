import DateCounters from "../helpers/DateCounters"
import TemperatureConverters from "../helpers/TemperatureConverters"

interface IDailyForecast {
  date: string

  sunrise: string
  sunset: string

  kelvinTemp: string
  fahrenheitTemp: string
  celsiusTemp: string

  kelvinMin: string
  fahrenheitMin: string
  celsiusMin: string

  kelvinMax: string
  fahrenheitMax: string
  celsiusMax: string

  kelvinNight: string
  fahrenheitNight: string
  celsiusNight: string

  kelvinEvening: string
  fahrenheitEvening: string
  celsiusEvening: string

  kelvinMorning: string
  fahrenheitMorning: string
  celsiusMorning: string

  kelvinFeelsLikeDay: string
  fahrenheitFeelsLikeDay: string
  celsiusFeelsLikeDay: string

  kelvinFeelsLikeNight: string
  fahrenheitFeelsLikeNight: string
  celsiusFeelsLikeNight: string

  kelvinFeelsLikeEvening: string
  fahrenheitFeelsLikeEvening: string
  celsiusFeelsLikeEvening: string

  kelvinFeelsLikeMorning: string
  fahrenheitFeelsLikeMorning: string
  celsiusFeelsLikeMorning: string

  pressure: number
  humidity: number

  windSpeed: number
  windDeg: number

  weather: string
}

export default class DailyForecast implements IDailyForecast {
  date: string

  sunrise: string
  sunset: string

  kelvinTemp: string
  fahrenheitTemp: string
  celsiusTemp: string

  kelvinMin: string
  fahrenheitMin: string
  celsiusMin: string

  kelvinMax: string
  fahrenheitMax: string
  celsiusMax: string

  kelvinNight: string
  fahrenheitNight: string
  celsiusNight: string

  kelvinEvening: string
  fahrenheitEvening: string
  celsiusEvening: string

  kelvinMorning: string
  fahrenheitMorning: string
  celsiusMorning: string

  kelvinFeelsLikeDay: string
  fahrenheitFeelsLikeDay: string
  celsiusFeelsLikeDay: string

  kelvinFeelsLikeNight: string
  fahrenheitFeelsLikeNight: string
  celsiusFeelsLikeNight: string

  kelvinFeelsLikeEvening: string
  fahrenheitFeelsLikeEvening: string
  celsiusFeelsLikeEvening: string

  kelvinFeelsLikeMorning: string
  fahrenheitFeelsLikeMorning: string
  celsiusFeelsLikeMorning: string

  pressure: number
  humidity: number

  windSpeed: number
  windDeg: number

  weather: string

  constructor(response: any, index: number) {
    this.date = DateCounters.getDateIncrementedByDay(index + 1)

    this.sunrise = response.sunrise
    this.sunset = response.sunset

    this.kelvinTemp = response.temp.day
    this.fahrenheitTemp = `${TemperatureConverters.kelvinToFahrenheit(
      response.temp.day
    )}°F`
    this.celsiusTemp = `${TemperatureConverters.kelvinToCelsius(
      response.temp.day
    )}°C`

    this.kelvinMin = response.temp.min
    this.fahrenheitMin = `${TemperatureConverters.kelvinToFahrenheit(
      response.temp.min
    )}°F`
    this.celsiusMin = `${TemperatureConverters.kelvinToCelsius(
      response.temp.min
    )}°C`

    this.kelvinMax = response.temp.max
    this.fahrenheitMax = `${TemperatureConverters.kelvinToFahrenheit(
      response.temp.max
    )}°F`
    this.celsiusMax = `${TemperatureConverters.kelvinToCelsius(
      response.temp.max
    )}°C`

    this.kelvinNight = response.temp.night
    this.fahrenheitNight = `${TemperatureConverters.kelvinToFahrenheit(
      response.temp.night
    )}°F`
    this.celsiusNight = `${TemperatureConverters.kelvinToCelsius(
      response.temp.night
    )}°C`

    this.kelvinEvening = response.temp.eve
    this.fahrenheitEvening = `${TemperatureConverters.kelvinToFahrenheit(
      response.temp.eve
    )}°F`
    this.celsiusEvening = `${TemperatureConverters.kelvinToCelsius(
      response.temp.eve
    )}°C`

    this.kelvinMorning = response.temp.morn
    this.fahrenheitMorning = `${TemperatureConverters.kelvinToFahrenheit(
      response.temp.morn
    )}°F`
    this.celsiusMorning = `${TemperatureConverters.kelvinToCelsius(
      response.temp.morn
    )}°C`

    this.kelvinFeelsLikeDay = response.feels_like.day
    this.fahrenheitFeelsLikeDay = `${TemperatureConverters.kelvinToFahrenheit(
      response.feels_like.day
    )}°F`
    this.celsiusFeelsLikeDay = `${TemperatureConverters.kelvinToCelsius(
      response.feels_like.day
    )}°C`

    this.kelvinFeelsLikeNight = response.feels_like.night
    this.fahrenheitFeelsLikeNight = `${TemperatureConverters.kelvinToFahrenheit(
      response.feels_like.night
    )}°F`
    this.celsiusFeelsLikeNight = `${TemperatureConverters.kelvinToCelsius(
      response.feels_like.night
    )}°C`

    this.kelvinFeelsLikeEvening = response.feels_like.eve
    this.fahrenheitFeelsLikeEvening = `${TemperatureConverters.kelvinToFahrenheit(
      response.feels_like.eve
    )}°F`
    this.celsiusFeelsLikeEvening = `${TemperatureConverters.kelvinToCelsius(
      response.feels_like.eve
    )}°C`

    this.kelvinFeelsLikeMorning = response.feels_like.morn
    this.fahrenheitFeelsLikeMorning = `${TemperatureConverters.kelvinToFahrenheit(
      response.feels_like.morn
    )}°F`
    this.celsiusFeelsLikeMorning = `${TemperatureConverters.kelvinToCelsius(
      response.feels_like.morn
    )}°C`

    this.pressure = response.pressure
    this.humidity = response.humidity

    this.windSpeed = response.wind_speed
    this.windDeg = response.wind_deg

    this.weather = response.weather[0].main
  }
}
