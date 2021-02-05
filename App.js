import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListAlunos from "./src/pages/ListAlunos";
import CreateAlunos from "./src/pages/CreateAlunos";
import AlterarAluno from "./src/pages/AlterarAluno";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="List" component={ListAlunos} />
        <Tab.Screen name="Home" component={CreateAlunos} />
        <Tab.Screen name="AlterarAluno" component={AlterarAluno} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
