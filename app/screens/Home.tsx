import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Home = ({ navigation }: RouterProps) => {
  const handleProfilePress = () => {
    console.log("Navigate to doctor's profile");
  };

  const handleArticlePress = () => {
    console.log("Navigate to article");
  };
  const handlePress = () => {
    console.log("Navigate to article or doctor's profile");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={24}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.iconsContainer}>
        <View style={styles.iconWrapper}>
          <TouchableHighlight
            style={styles.pressable}
            underlayColor="#ddd"
            onPress={() => navigation.navigate("Booking")}
          >
            <FontAwesome5 name="briefcase-medical" size={24} color="black" />
          </TouchableHighlight>
          <Text style={styles.iconText}>Booking Kunjungan</Text>
        </View>

        <View style={styles.iconWrapper}>
          <TouchableHighlight
            style={styles.pressable}
            underlayColor="#ddd"
            onPress={() => navigation.navigate("DaftarBooking")}
          >
            <FontAwesome5 name="calendar-alt" size={24} color="black" />
          </TouchableHighlight>
          <Text style={styles.iconText}>Lihat Kunjungan</Text>
        </View>

        <View style={styles.iconWrapper}>
          <TouchableHighlight
            style={styles.pressable}
            underlayColor="#ddd"
            onPress={() => {}}
          >
            <FontAwesome5 name="user-md" size={24} color="black" />
          </TouchableHighlight>
          <Text style={styles.iconText}>Profil Dokter</Text>
        </View>

        <View style={styles.iconWrapper}>
          <TouchableHighlight
            style={styles.pressable}
            underlayColor="#ddd"
            onPress={() => {}}
          >
            <FontAwesome5 name="hospital-user" size={24} color="black" />
          </TouchableHighlight>
          <Text style={styles.iconText}>Informasi Klinik</Text>
        </View>
      </View>

      <TouchableHighlight
        style={styles.boxContainer}
        underlayColor="#ddd"
        onPress={handlePress}
      >
        <View style={styles.innerContainer}>
          {/* Top Part (Doctor's Profile) */}
          <View style={styles.profileContainer}>
            <View style={styles.profileContent}>
              <View style={styles.profileInfo}>
                <View style={styles.profilePicture}></View>
                <View style={styles.profileText}>
                  <Text style={styles.doctorName}>Dr. John Doe</Text>
                  <Text style={styles.specialization}>Pediatrician</Text>
                </View>
              </View>
              <TouchableHighlight
                style={styles.moreOptions}
                underlayColor="#ccc"
                onPress={() => console.log("More options")}
              >
                <FontAwesome5 name="ellipsis-h" size={24} color="black" />
              </TouchableHighlight>
            </View>
          </View>

          {/* Article Part */}
          <View style={styles.articleContainer}>
            <Text style={styles.articleText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableHighlight
                style={styles.actionButton}
                underlayColor="#ccc"
                onPress={() => console.log("Like")}
              >
                <Text>Like</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.actionButton}
                underlayColor="#ccc"
                onPress={() => console.log("Comment")}
              >
                <Text>Comment</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.actionButton}
                underlayColor="#ccc"
                onPress={() => console.log("Share")}
              >
                <Text>Share</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.actionButton}
                underlayColor="#ccc"
                onPress={() => console.log("Bookmark")}
              >
                <Text>Bookmark</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
  },
  searchContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    color: "#000",
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 5,
  },
  iconWrapper: {
    alignItems: "center",
    marginBottom: 20,
    width: 100,
    height: 100,
    flex: 1,
  },
  pressable: {
    backgroundColor: "#f0f0f0",
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#888",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 12,
  },
  profileContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 20,
  },
  profileContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc", // Placeholder for profile picture
  },
  profileText: {
    marginLeft: 16,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  specialization: {
    fontSize: 14,
    color: "#666",
  },
  moreOptions: {
    justifyContent: "center",
    alignItems: "center",
  },
  articleContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  articleContent: {},
  articleText: {
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  boxContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 20,
  },
  innerContainer: {
    padding: 16,
  },
});
