import Axios from 'axios'
import OPEN_WEATHER_API_KEY from '../config/config'

import Location from '../models/Location'
import CurrentForecast from '../models/CurrentForecast'

const getCurrentWeatherAPIUri = (input: string): string => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${OPEN_WEATHER_API_KEY}`
}

const getOneCallAPIUri = (latitude: number, longitude: number): string => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${OPEN_WEATHER_API_KEY}`
}

export default class ForecastService {
  static async getForecast(searchInput: string): Promise<CurrentForecast> {
    try {
      const input = searchInput.replace(/","\s/g, '')

      const openWeatherApiUri = getCurrentWeatherAPIUri(input)

      const response = await Axios.get(openWeatherApiUri, {
        responseType: 'json',
      })

      const forecast = await this.getOneCallAPIForecast(
        response.data.coord.lat,
        response.data.coord.lon
      )

      forecast.location = new Location({
        id: response.data.id,
        city: response.data.name,
        country: response.data.sys.country,
        latitude: response.data.coord.lat,
        longitude: response.data.coord.lon,
      })

      return forecast
    } catch (e) {
      throw Error(e)
    }
  }

  static async getOneCallAPIForecast(
    latitude: number,
    longitude: number
  ): Promise<CurrentForecast> {
    try {
      const openWeatherApiUri = getOneCallAPIUri(latitude, longitude)

      const response = await Axios.get(openWeatherApiUri, {
        responseType: 'json',
      })

      const forecast = new CurrentForecast(response.data)

      return forecast
    } catch (e) {
      throw Error(e)
    }
  }
}
