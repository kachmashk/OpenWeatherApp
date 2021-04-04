export default class TemperatureConverters {
  static kelvinToCelsius(kelvin: number): number {
    return Math.round(kelvin - 273.15)
  }
  static kelvinToFahrenheit(kelvin: number): number {
    return Math.round(1.8 * (kelvin - 273) + 32)
  }
}
