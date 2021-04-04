import * as ExpoLocation from "expo-location"
import * as ExpoPermissions from "expo-permissions"

import Location from "../models/Location"

export default class LocationService {
  static async getLocationPermission(): Promise<boolean> {
    try {
      await ExpoLocation.requestPermissionsAsync()
      const { status } = await ExpoPermissions.getAsync(
        ExpoPermissions.LOCATION
      )

      return status === "granted"
    } catch (e) {
      throw Error(e)
    }
  }

  static async getDeviceLocation(): Promise<{
    latitude: number
    longitude: number
  }> {
    try {
      const currentPosition: ExpoLocation.LocationData = await ExpoLocation.getCurrentPositionAsync(
        {
          enableHighAccuracy: true,
        }
      )

      const coords: {
        latitude: number
        longitude: number
      } = {
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
      }

      return coords
    } catch (e) {
      throw Error(e)
    }
  }

  static async getLocationByCoords(
    latitude: number,
    longitude: number
  ): Promise<Location> {
    try {
      const fetchedLocation: ExpoLocation.Address = (
        await ExpoLocation.reverseGeocodeAsync({
          latitude: latitude,
          longitude: longitude,
        })
      )[0]

      const location = new Location({
        city: fetchedLocation.city,
        country: fetchedLocation.country,
        latitude: latitude,
        longitude: longitude,
      })

      return location
    } catch (e) {
      throw Error(e)
    }
  }

  static async getLocationByAddress(address: string): Promise<Location> {
    try {
      const fetchedLocationCoords: ExpoLocation.GeocodedLocation = (
        await ExpoLocation.geocodeAsync(address)
      )[0]

      const fetchedLocationData = await this.getLocationByCoords(
        fetchedLocationCoords.latitude,
        fetchedLocationCoords.longitude
      )

      const location = new Location({
        city: fetchedLocationData.city,
        country: fetchedLocationData.country,
        latitude: fetchedLocationCoords.latitude,
        longitude: fetchedLocationCoords.longitude,
      })

      return location
    } catch (e) {
      throw Error(e)
    }
  }
}
