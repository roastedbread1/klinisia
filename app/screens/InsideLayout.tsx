import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import Booking from "./Booking";

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name="Booking"
        component={Booking}
        options={{ headerShown: false }}
      />
    </InsideStack.Navigator>
  );
}

export default InsideLayout;
