import { StyleSheet } from 'react-native'

export const TILE_MARGIN = 6
export const DEFAULT_TILE_HEIGHT = 180
export const TILE_HEIGHT = DEFAULT_TILE_HEIGHT + TILE_MARGIN * 2

const ForecastTileStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: DEFAULT_TILE_HEIGHT,

    flexDirection: 'row',
    marginVertical: TILE_MARGIN,

    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },

  sideForecastsContainers: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignSelf: 'center',
  },
})

const CurrentForecastStyles = StyleSheet.create({
  container: {
    width: '95%',
    height: DEFAULT_TILE_HEIGHT - 20,

    justifyContent: 'flex-start',
    alignSelf: 'center',

    padding: 8,
    marginVertical: 4,

    borderRadius: 18,
    backgroundColor: '#FFFFFF',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
})

const FutureForecastStyles = StyleSheet.create({
  container: {
    width: '95%',
    height: 80,

    flexDirection: 'row',
    justifyContent: 'space-evenly',

    padding: 4,
    marginVertical: 4,

    borderRadius: 18,
    backgroundColor: '#FFFFFF',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
})

export { ForecastTileStyles, CurrentForecastStyles, FutureForecastStyles }
