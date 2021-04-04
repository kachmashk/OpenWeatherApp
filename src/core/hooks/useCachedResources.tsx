import { useState, useEffect } from "react"
import * as Font from "expo-font"
import { FontAwesome5 } from "@expo/vector-icons"

export default function useCachedResources() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHideAsync()

        await Font.loadAsync({
          ...FontAwesome5.font,
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setIsLoading(false)
        // SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoading
}
