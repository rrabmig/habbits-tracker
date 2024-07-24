import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const ChartSection: React.FC = () => {
  const [mode, setMode] = useState<String>("All");

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <View className="w-[90%] h-fit bg-slate-50 border-slate-200 justify-center items-center rounded-xl my-5 mx-1">
      <View>
        <Text className="text-center text-xl">Good vs Bad</Text>
      </View>
      <LineChart
        data={data}
        width={Dimensions.get("window").width * 0.8}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
        style={{borderRadius: 16 }}
      />

      <View className="w-full h-[1px] bg-slate-300 my-1" />

      <View className="w-full h-fit flex-row justify-around">
        <TouchableOpacity
          onPress={() => {
            setMode("All");
          }}
        >
          <Text className={`text-center text-slate-600 px-2 py-[0.5] ${mode === "All" && "border-[1px]"} border-slate-600 rounded-sm`}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMode("6 Months");
          }}
        >
          <Text className={`text-center text-slate-600 px-2 py-[0.5] ${mode === "6 Months" && "border-[1px]"} border-slate-600 rounded-sm`}>
            6 Months
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMode("Month");
          }}
        >
          <Text className={`text-center text-slate-600 px-2 py-[0.5] ${mode === "Month" && "border-[1px]"} border-slate-600 rounded-sm`}>
            Month
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMode("Week");
          }}
        >
          <Text className={`text-center text-slate-600 px-2 py-[0.5] ${mode === "Week" && "border-[1px]"} border-slate-600 rounded-sm`}>
            Week
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChartSection;
