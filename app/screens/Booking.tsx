import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { format } from "date-fns";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FIREBASE_DB } from "../../FirebaseConfig"; // Adjust this import to your actual path
import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  // Monitor authentication state
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleSubmit = async () => {
    if (!selectedDate || !userId) {
      Alert.alert("Please select a date and ensure you are logged in");
      return;
    }

    const formattedDate = format(selectedDate, "dd/MM/yyyy");

    try {
      await addDoc(collection(FIREBASE_DB, "praktek/sesi 1/pasien"), {
        name,
        userId,
        tanggal: selectedDate,
      });

      Alert.alert(
        "Form Submitted",
        `Name: ${name}, Selected Date: ${formattedDate}`
      );

      setSelectedDate(null);
      setName("");
    } catch (error) {
      Alert.alert("Error", "There was an error submitting the form.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Selected Date:</Text>
      <View style={styles.dateContainer}>
        <TouchableOpacity>
          <Text style={styles.input} onPress={showDatePicker}>
            {selectedDate
              ? format(selectedDate, "dd-MM-yyyy")
              : "No date selected"}
          </Text>
        </TouchableOpacity>
      </View>
      <Button title="Submit Form" onPress={handleSubmit} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 20,
    textAlignVertical: "center",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  dateText: {
    fontSize: 18,
    marginRight: 16,
  },
});

export default Booking;
