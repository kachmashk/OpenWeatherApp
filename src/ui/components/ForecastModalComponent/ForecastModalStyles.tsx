import { StyleSheet } from 'react-native'

const ForecastModalStyles = StyleSheet.create({
  container: {
    height: 680,
    justifyContent: 'flex-start',
    alignItems: 'center',

    backgroundColor: 'rgb(34, 43, 56)',
    borderRadius: 20,

    paddingTop: 12,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  title: {
    fontSize: 24,
    color: '#FFFFFF',
  },

  subtitleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  subtitle: {
    fontSize: 21,
    padding: 6,
    color: '#FFFFFF',
  },

  dataContainer: {
    alignSelf: 'center',
    padding: 8,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },

  dataLabel: {
    fontSize: 14,
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
  },

  button: {
    padding: 12,
    width: 150,
  },
})

const FutureForecastStyles = StyleSheet.create({
  container: {
    width: '95%',
    marginVertical: 8,
    height: 80,
    padding: 4,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },

  tileContainer: {
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tileTitle: {
    fontSize: 18,
  },

  tileLabel: {
    fontSize: 21,
  },
})

export { ForecastModalStyles, FutureForecastStyles }
