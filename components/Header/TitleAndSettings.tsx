import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SettingsModal from "../Modals/SettingsModal";
import { useModals } from "@/store/store";

interface ITitleAndSettings {
  title: string;
}

const TitleAndSettings: React.FC<ITitleAndSettings> = ({ title }) => {
  const setModalType = useModals((state) => state.setModalType);
  const modalType = useModals((state) => state.modalType);

  return (
    <>
      <View className="w-full flex-row justify-between items-center px-4 py-2">
        <Text className="text-2xl">{title}</Text>
        <TouchableOpacity onPress={() => setModalType("settings")}>
          <Ionicons
            name={modalType === "settings" ? "settings" : "settings-outline"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TitleAndSettings;
