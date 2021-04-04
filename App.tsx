import React from 'react'
import { StatusBar } from 'react-native'
import useCachedResources from './src/core/hooks/useCachedResources'
import LandingPage from './src/ui/pages/LandingPage/LandingPage'

export default function App() {
  const isLoading = useCachedResources()

  return (
    !isLoading && (
      <>
        <StatusBar
          barStyle='light-content'
          backgroundColor='black'
          hidden={false}
        />
        <LandingPage />
      </>
    )
  )
}
