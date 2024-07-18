import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBadHabbits, useUserInfo, useGoodHabbits } from "@/store/store";
import {
  createTables,
  getBadHabbits,
  getGoodHabbits,
} from "@/data/LocalDatabase";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [userInfoLoaded, setUserInfoLoaded] = useState(false);
  const [BadHabbitsLoaded, setBadHabbitsLoaded] = useState(false);
  const [GoodHabbitsLoaded, setGoodHabbitsLoaded] = useState(false);

  const setIsWelcomed = useUserInfo((state) => state.setIsWelcomed);
  const setBadHabbits = useBadHabbits((state) => state.setBadHabbits);
  const setGoodHabbits = useGoodHabbits((state) => state.setGoodHabbits);

  AsyncStorage.getItem("isLoggedIn")
    .then((value) => {
      value === "true" ? setIsWelcomed(true) : setIsWelcomed(false);
      setUserInfoLoaded(true);
      return value !== "true";
    })
    .then((needToCreateDB) => {
      if (needToCreateDB) {
        createTables()
          .then(() =>
            getBadHabbits()
              .then((badHabbits) => setBadHabbits(badHabbits))
              .then(() => setBadHabbitsLoaded(true))
          )
          .then(() =>
            getGoodHabbits()
              .then((goodHabbits) => setGoodHabbits(goodHabbits))
              .then(() => setGoodHabbitsLoaded(true))
          );
      } else {
        getBadHabbits().then((badHabbits) => setBadHabbits(badHabbits));
        getGoodHabbits().then((goodHabbits) => setGoodHabbits(goodHabbits));
      }
    });

  useEffect(() => {
    if (error) throw error;

    if (
      fontsLoaded &&
      userInfoLoaded &&
      BadHabbitsLoaded &&
      GoodHabbitsLoaded
    ) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error, userInfoLoaded, BadHabbitsLoaded, GoodHabbitsLoaded]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
