import {
  ImageBackground,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import TitleAndSettings from "../Header/TitleAndSettings";
import { NativeScrollEvent } from "react-native";
import { useState } from "react";

interface IScrollViewWithHeader {
  children: React.ReactNode;
  title: string;
  type: string;
}

const MIN_HEADER_HEIGHT = 100;
const MAX_HEADER_HEIGHT = 200;

const ScrollViewWithHeader: React.FC<IScrollViewWithHeader> = ({
  children,
  title,
  type,
}) => {
  const [isTitleSticky, setIsTitleSticky] = useState(false);

  let BG
  switch (type) {
    case "good":
      BG = require("../../assets/images/backgrounds/green.jpg");
      break;
    case "bad":
      BG = require("../../assets/images/backgrounds/red.jpg");
      break;
    case "stats":
      BG = require("../../assets/images/backgrounds/stats.jpg");
      break;
  }

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ): void => {
    const y = event.nativeEvent.contentOffset.y;
    if (y > MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT) {
      setIsTitleSticky(true);
    } else {
      setIsTitleSticky(false);
    }
  };

  return (
    <>
      {isTitleSticky && (
        <TitleAndSettings
          title={title}
          minHeight={MIN_HEADER_HEIGHT}
          maxHeight={MAX_HEADER_HEIGHT}
          sticky={isTitleSticky}
          type={type}
        />
      )}

      <ScrollView
        onScroll={handleScroll}
      >
        <ImageBackground
          source={BG}
          style={{
            width: "100%",
            height: MAX_HEADER_HEIGHT,
            zIndex: -2,
            overflow: "hidden",
            justifyContent: "flex-end",
          }}
          resizeMethod="resize"
          resizeMode="cover"
        >
          <View
            style={{
              height: MAX_HEADER_HEIGHT,
              justifyContent: "flex-end",
              marginTop: -MAX_HEADER_HEIGHT,
            }}
          >
            {!isTitleSticky && (
              <TitleAndSettings
                title={title}
                minHeight={MIN_HEADER_HEIGHT}
                maxHeight={MAX_HEADER_HEIGHT}
                sticky={isTitleSticky}
                type={type}
              />
            )}
          </View>
        </ImageBackground>
        {children}
      </ScrollView>
    </>
  );
};

export default ScrollViewWithHeader;

const styles = StyleSheet.create({});
