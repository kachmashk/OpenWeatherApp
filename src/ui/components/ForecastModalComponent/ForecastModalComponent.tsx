import React, { FC } from 'react'
import { View, Text, FlatList } from 'react-native'

import Modal from 'react-native-modal'
import Map from '../MapComponent/MapComponent'
import { Button } from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons'

import Forecast from '../../../core/models/CurrentForecast'
import DailyForecast from '../../../core/models/DailyForecast'
import HourlyForecast from '../../../core/models/HourlyForecast'
import GetProperWeatherIcon from '../../../core/helpers/GetProperWeatherIcon'
import {
  ForecastModalStyles,
  FutureForecastStyles,
} from './ForecastModalStyles'

type ForecastModalProps = {
  isModalOpened: boolean
  onModalClose: () => void
  onForecastAdd?: () => void

  forecast: Forecast
}

const HourlyForecastComponent: FC<{
  hourlyForecast: HourlyForecast[]
}> = (props) => {
  return (
    <View style={FutureForecastStyles.container}>
      <FlatList
        data={props.hourlyForecast}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => (
          <View style={FutureForecastStyles.tileContainer}>
            <Text style={FutureForecastStyles.tileTitle}>{item.item.time}</Text>

            <FontAwesome5
              size={24}
              name={GetProperWeatherIcon.getIcon(item.item.weather)}
            />

            <Text style={FutureForecastStyles.tileLabel}>
              {item.item.celsiusTemp}
            </Text>
          </View>
        )}
      />
    </View>
  )
}

const DailyForecastComponent: FC<{ dailyForecast: DailyForecast[] }> = (
  props
) => {
  return (
    <View
      style={{
        ...FutureForecastStyles.container,
        marginVertical: 0,
        marginBottom: 8,
      }}
    >
      <FlatList
        data={props.dailyForecast}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => (
          <View style={{ ...FutureForecastStyles.tileContainer, margin: 12 }}>
            <Text style={FutureForecastStyles.tileTitle}>{item.item.date}</Text>

            <FontAwesome5
              size={24}
              name={GetProperWeatherIcon.getIcon(item.item.weather)}
            />

            <Text style={FutureForecastStyles.tileLabel}>
              {item.item.celsiusTemp}
            </Text>
          </View>
        )}
      />
    </View>
  )
}

const ForecastModal: FC<ForecastModalProps> = (props) => {
  return (
    <Modal
      isVisible={props.isModalOpened}
      animationIn='zoomIn'
      animationOut='zoomOut'
    >
      <View style={ForecastModalStyles.container}>
        <View style={ForecastModalStyles.titleContainer}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome5
              size={28}
              color='#FFFFFF'
              name={GetProperWeatherIcon.getIcon(props.forecast.weather)}
              style={{ alignSelf: 'center', marginRight: 8 }}
            />
            <Text style={ForecastModalStyles.title}>
              {props.forecast.celsiusTemp}°C{' - '}
            </Text>
          </View>

          <View style={{ alignSelf: 'center' }}>
            <Text style={ForecastModalStyles.title}>
              {props.forecast.location.getLocationString()}
            </Text>
          </View>
        </View>

        <View style={ForecastModalStyles.subtitleContainer}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome5
              size={28}
              color='#FFFFFF'
              name='cloud'
              style={{ alignSelf: 'center' }}
            />
            <Text style={ForecastModalStyles.subtitle}>
              {props.forecast.clouds}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <FontAwesome5
              size={28}
              color='#FFFFFF'
              name='wind'
              style={{ alignSelf: 'center' }}
            />
            <Text style={ForecastModalStyles.subtitle}>
              {props.forecast.windSpeed}
            </Text>
          </View>
        </View>

        <View style={ForecastModalStyles.subtitleContainer}>
          <View style={ForecastModalStyles.dataContainer}>
            <Text style={ForecastModalStyles.dataLabel}>
              {props.forecast.pressure}
            </Text>
          </View>

          <View style={ForecastModalStyles.dataContainer}>
            <Text style={ForecastModalStyles.dataLabel}>
              humidity {props.forecast.humidity}
            </Text>
          </View>

          <View style={ForecastModalStyles.dataContainer}>
            <Text style={ForecastModalStyles.dataLabel}>
              visibility {props.forecast.visibility}
            </Text>
          </View>
        </View>

        <HourlyForecastComponent
          hourlyForecast={props.forecast.hourlyForecast}
        />

        <DailyForecastComponent dailyForecast={props.forecast.dailyForecast} />

        <Map
          latitude={props.forecast.location.latitude}
          longitude={props.forecast.location.longitude}
        />

        <View style={ForecastModalStyles.bottom}>
          <Button
            containerStyle={ForecastModalStyles.button}
            title='Close'
            type='clear'
            onPress={props.onModalClose}
          />
          <Button
            containerStyle={ForecastModalStyles.button}
            title='Add forecast'
            type='clear'
            onPress={props.onForecastAdd}
          />
        </View>
      </View>
    </Modal>
  )
}

export default ForecastModal
