interface ILocation {
  id: number
  city: string
  country: string
  latitude: number
  longitude: number

  getLocationString: () => string
}

export default class Location implements ILocation {
  id: number
  city: string
  country: string
  latitude: number
  longitude: number

  constructor(response: any) {
    this.id = response.id
    this.city = response.city
    this.country = response.country
    this.latitude = response.latitude
    this.longitude = response.longitude
  }

  getLocationString(): string {
    return `${this.city}, ${this.country}`
  }
}
