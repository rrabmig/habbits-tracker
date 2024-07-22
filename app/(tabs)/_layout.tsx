import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Modal from "@/components/Modals/Modal";

const TabsLayout: React.FC = () => {
  return (
    <>
      <Modal />
      <Tabs>
        <Tabs.Screen
          name="good"
          options={{
            title: "Good",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "happy" : "happy-outline"}
                color={"green"}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bad"
          options={{
            title: "Bad",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "happy" : "happy-outline"}
                color={"red"}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="stats"
          options={{
            title: "Stats",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "stats-chart" : "stats-chart-outline"}
                color={"blue"}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
