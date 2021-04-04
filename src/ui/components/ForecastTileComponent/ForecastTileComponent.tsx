import React, { FC } from 'react'
import { Animated, Text, View, Pressable } from 'react-native'

import GetProperWeatherIcon from '../../../core/helpers/GetProperWeatherIcon'
import { FontAwesome5 } from '@expo/vector-icons'

import CurrentForecast from '../../../core/models/CurrentForecast'

import { CurrentForecastStyles } from './ForecastTileStyles'
import { FutureForecastStyles } from './ForecastTileStyles'
import { ForecastTileStyles } from './ForecastTileStyles'

type ForecastTileProps = {
  forecastIndex: number
  forecast: CurrentForecast
  onTilePress: () => void
}

const CurrentForecastContainer: FC<{
  forecast: CurrentForecast
}> = (props) => {
  return (
    <View style={CurrentForecastStyles.container}>
      <Text style={{ alignSelf: 'center', fontSize: 18 }}>
        {props.forecast.location.getLocationString()}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginVertical: 4,
        }}
      >
        <FontAwesome5
          size={18}
          name={GetProperWeatherIcon.getIcon(props.forecast.weather)}
        />
        <Text style={{ marginLeft: 8, fontSize: 18 }}>
          {props.forecast.celsiusTemp}°C
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome5
            size={18}
            color='#000000'
            name='cloud'
            style={{ alignSelf: 'center' }}
          />
          <Text style={{ marginLeft: 4, fontSize: 18 }}>
            {props.forecast.clouds}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <FontAwesome5
            size={18}
            color='#000000'
            name='wind'
            style={{ alignSelf: 'center' }}
          />
          <Text style={{ marginLeft: 4, fontSize: 18 }}>
            {props.forecast.windSpeed}
          </Text>
        </View>
      </View>

      <View
        style={{
          margin: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 16 }}>{props.forecast.pressure}</Text>

        <Text style={{ fontSize: 16 }}>
          humidity: {props.forecast.humidity}
        </Text>

        <Text style={{ fontSize: 16 }}>
          visibility: {props.forecast.visibility}
        </Text>
      </View>
    </View>
  )
}

const FutureForecastContainer: FC<{
  forecast: CurrentForecast
}> = (props) => {
  return (
    <>
      <View style={FutureForecastStyles.container}>
        <View
          style={{
            margin: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18 }}>
            {props.forecast.hourlyForecast[1].time}
          </Text>

          <FontAwesome5
            size={24}
            name={GetProperWeatherIcon.getIcon(
              props.forecast.dailyForecast[1].weather
            )}
          />

          <Text style={{ fontSize: 21 }}>
            {props.forecast.hourlyForecast[1].celsiusTemp}
          </Text>
        </View>

        <View
          style={{
            margin: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18 }}>
            {props.forecast.hourlyForecast[2].time}
          </Text>

          <FontAwesome5
            size={24}
            name={GetProperWeatherIcon.getIcon(
              props.forecast.dailyForecast[1].weather
            )}
          />

          <Text style={{ fontSize: 21 }}>
            {props.forecast.hourlyForecast[2].celsiusTemp}
          </Text>
        </View>

        <View
          style={{
            margin: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18 }}>
            {props.forecast.hourlyForecast[3].time}
          </Text>

          <FontAwesome5
            size={24}
            name={GetProperWeatherIcon.getIcon(
              props.forecast.dailyForecast[1].weather
            )}
          />

          <Text style={{ fontSize: 21 }}>
            {props.forecast.hourlyForecast[3].celsiusTemp}
          </Text>
        </View>
      </View>

      <View style={FutureForecastStyles.container}>
        <View
          style={{
            margin: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18 }}>
            {props.forecast.dailyForecast[1].date}
          </Text>

          <FontAwesome5
            size={24}
            name={GetProperWeatherIcon.getIcon(
              props.forecast.dailyForecast[1].weather
            )}
          />

          <Text style={{ fontSize: 21 }}>
            {props.forecast.dailyForecast[1].celsiusTemp}
          </Text>
        </View>

        <View
          style={{
            margin: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18 }}>
            {props.forecast.dailyForecast[2].date}
          </Text>

          <FontAwesome5
            size={24}
            name={GetProperWeatherIcon.getIcon(
              props.forecast.dailyForecast[2].weather
            )}
          />

          <Text style={{ fontSize: 21 }}>
            {props.forecast.dailyForecast[2].celsiusTemp}
          </Text>
        </View>

        <View
          style={{
            margin: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18 }}>
            {props.forecast.dailyForecast[3].date}
          </Text>

          <FontAwesome5
            size={24}
            name={GetProperWeatherIcon.getIcon(
              props.forecast.dailyForecast[3].weather
            )}
          />

          <Text style={{ fontSize: 21 }}>
            {props.forecast.dailyForecast[3].celsiusTemp}
          </Text>
        </View>
      </View>
    </>
  )
}

const ForecastTile: FC<ForecastTileProps> = (props) => {
  return (
    <Pressable onPress={props.onTilePress}>
      <View style={ForecastTileStyles.container}>
        <View style={ForecastTileStyles.sideForecastsContainers}>
          <CurrentForecastContainer forecast={props.forecast} />
        </View>

        <View style={ForecastTileStyles.sideForecastsContainers}>
          <FutureForecastContainer forecast={props.forecast} />
        </View>
      </View>
    </Pressable>
  )
}

export default ForecastTile
