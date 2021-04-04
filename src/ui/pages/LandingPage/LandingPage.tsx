import React, { Dispatch, FC, useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, Text, StatusBar } from 'react-native'
import { SearchBar } from 'react-native-elements'

import ForecastTile from '../../components/ForecastTileComponent/ForecastTileComponent'
import ForecastModal from '../../components/ForecastModalComponent/ForecastModalComponent'

import Location from '../../../core/models/Location'
import CurrentForecast from '../../../core/models/CurrentForecast'

import ForecastService from '../../../core/services/ForecastService'
import LocationService from '../../../core/services/LocationService'

import { FontAwesome5 } from '@expo/vector-icons'
import LandingStyles from './LandingStyles'

type LandingPageProps = {}

const initDeviceLocationAndForecastFetch = async (
  setIsLocationLoading: Dispatch<React.SetStateAction<boolean>>,
  setSearchedForecast: Dispatch<
    React.SetStateAction<CurrentForecast | undefined>
  >,
  setIsForecastModalOpened: Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
  try {
    setIsLocationLoading(true)

    const isLocationPermissionGranted: boolean = await LocationService.getLocationPermission()

    if (!isLocationPermissionGranted) {
      setIsLocationLoading(false)
      return
    }

    const deviceCoords: {
      latitude: number
      longitude: number
    } = await LocationService.getDeviceLocation()

    const deviceLocation: Location = await LocationService.getLocationByCoords(
      deviceCoords.latitude,
      deviceCoords.longitude
    )

    const forecast: CurrentForecast = await ForecastService.getForecast(
      `${deviceLocation.city}, ${deviceLocation.country}`
    )

    setIsLocationLoading(false)
    setSearchedForecast(forecast)
    setIsForecastModalOpened(true)
  } catch (e) {
    setIsLocationLoading(false)
    throw Error(e)
  }
}

const searchForForecast = async (
  input: string,
  setInput: Dispatch<React.SetStateAction<string | undefined>>,
  setIsLocationLoading: Dispatch<React.SetStateAction<boolean>>,
  setSearchedForecast: Dispatch<
    React.SetStateAction<CurrentForecast | undefined>
  >,
  setIsForecastModalOpened: Dispatch<React.SetStateAction<boolean>>
): Promise<CurrentForecast> | null => {
  try {
    setIsLocationLoading(true)

    if (!input || input.trim() === '') {
      return null
    }

    const forecast: CurrentForecast = await ForecastService.getForecast(input)

    setInput()
    setIsLocationLoading(false)
    setSearchedForecast(forecast)
    setIsForecastModalOpened(true)

    return forecast
  } catch (e) {
    setIsLocationLoading(false)
    throw Error(e)
  }
}

const addForecast = (
  forecast: CurrentForecast,
  addedForecasts: CurrentForecast[],
  setForecasts: Dispatch<React.SetStateAction<CurrentForecast[]>>
): void => {
  if (
    addedForecasts.some(
      (element) => element.location.id === forecast.location.id
    )
  ) {
    return
  }

  let tempForecasts = addedForecasts
  tempForecasts.push(forecast)

  setForecasts(tempForecasts)
}

const LandingPage: FC<LandingPageProps> = () => {
  const [isLocationLoading, setIsLocationLoading] = useState<boolean>(false)
  const [isForecastModalOpened, setIsForecastModalOpened] = useState<boolean>(
    false
  )
  const [searchInput, setSearchInput] = useState<string | undefined>()
  const [searchedForecast, setSearchedForecast] = useState<
    CurrentForecast | undefined
  >()
  const [forecasts, setForecasts] = useState<CurrentForecast[]>([])

  useEffect(() => {
    initDeviceLocationAndForecastFetch(
      setIsLocationLoading,
      setSearchedForecast,
      setIsForecastModalOpened
    )
  }, [])

  return (
    <View style={LandingStyles.container}>
      <StatusBar barStyle='light-content' backgroundColor='black' />

      {searchedForecast && (
        <ForecastModal
          isModalOpened={isForecastModalOpened}
          onModalClose={() => {
            setIsForecastModalOpened(false)
            setSearchedForecast(undefined)
            setSearchInput(undefined)
          }}
          onForecastAdd={() => {
            addForecast(searchedForecast, forecasts, setForecasts)
            setIsForecastModalOpened(false)
            setSearchedForecast(undefined)
            setSearchInput(undefined)
          }}
          forecast={searchedForecast}
        />
      )}

      <SafeAreaView style={LandingStyles.searchBar}>
        <SearchBar
          placeholder='i.e. London, US'
          onChangeText={setSearchInput}
          value={searchInput}
          containerStyle={{
            width: '100%',
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          inputContainerStyle={{ borderRadius: 20 }}
          showLoading={isLocationLoading}
          onSubmitEditing={() => {
            searchForForecast(
              searchInput,
              setSearchInput,
              setIsLocationLoading,
              setSearchedForecast,
              setIsForecastModalOpened
            )
          }}
          searchIcon={
            <FontAwesome5
              name='search'
              size={16}
              color='white'
              onPress={() => {
                searchForForecast(
                  searchInput,
                  setSearchInput,
                  setIsLocationLoading,
                  setSearchedForecast,
                  setIsForecastModalOpened
                )
              }}
            />
          }
        />

        <Text style={{ color: 'white', fontSize: 12 }}>
          Forecasts are provided by - OpenWeatherMap.org
        </Text>
      </SafeAreaView>

      <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: 'white' }}>
              No forecasts have been added
            </Text>
          </View>
        }
        data={forecasts}
        keyExtractor={(item, index) => item.location.id.toString()}
        renderItem={(item) => (
          <ForecastTile
            key={item.item.location.id.toString()}
            forecastIndex={item.index}
            forecast={item.item}
            onTilePress={() => {
              setSearchedForecast(item.item)
              setIsForecastModalOpened(true)
            }}
          />
        )}
      />
    </View>
  )
}

export default LandingPage
