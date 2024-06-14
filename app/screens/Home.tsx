import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";

interface RouterPropts {
  navigation: NavigationProp<any, any>;
}

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
