export default class GetProperWeatherIcon {
  static getIcon(weather: string): string {
    switch (weather) {
      case "Thunderstorm":
        return "bolt"
      case "Drizzle":
        return "umbrella"
      case "Haze":
        return "smog"
      case "Rain":
        return "umbrella"
      case "Snow":
        return "snowflake"
      case "Atmosphere":
        return "meteor"
      case "Clear":
        return "sun"
      case "Clouds":
        return "cloud"

      default:
        return "temperature-high"
    }
  }
}
