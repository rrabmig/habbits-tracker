import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useModals } from "@/store/store";

interface ITitleAndSettings {
  title: string;
  minHeight: number;
  maxHeight: number;
  sticky: boolean;
  type: string;
}

const TitleAndSettings: React.FC<ITitleAndSettings> = ({
  title,
  minHeight,
  maxHeight,
  sticky,
  type,
}) => {
  const setModalType = useModals((state) => state.setModalType);
  const modalType = useModals((state) => state.modalType);

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

  return (
   
      <ImageBackground

        source={BG}
        style={{
          position: sticky ? "absolute" : "relative",
          top: sticky ? -(maxHeight - minHeight): 0,
          width: "100%", 
          height: maxHeight, 
          justifyContent: "flex-end",
          zIndex: 2,
        }}
        resizeMode="cover"

      >
         <View
          style={{
          width: "100%",
          height: minHeight,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 1,
        }}
      >
      <Text className="text-2xl text-white z-0">{title}</Text>
      <TouchableOpacity onPress={() => setModalType("settings")}>
        <Ionicons
          name={modalType === "settings" ? "settings" : "settings-outline"}
          size={24}
          color="white"
        />
      </TouchableOpacity>
      </View>
      </ImageBackground>
    
  );
};

export default TitleAndSettings;
