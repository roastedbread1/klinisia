import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('')

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

  const handleSubmit = () => {
    if (!selectedDate) {
      Alert.alert('Please select a date');
      return;
    }

    const formattedDate = format(selectedDate, 'dd/MM/yyyy');
    Alert.alert('Form Submitted', `Name: ${name}, Selected Date: ${formattedDate}`);

    setSelectedDate(null);
    setName('');
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
      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        keyboardType="numeric" 
      />
      <Text style={styles.label}>Selected Date:</Text>
      <View style={styles.dateContainer}>
        {/* <Text style={styles.dateText}>
          {selectedDate ? format(selectedDate, 'yyyy/MM/dd') : 'No date selected'}
        </Text> */}
        <TouchableOpacity>
        {/* <Button title="Select Date" onPress={showDatePicker} />
         */}
         <Text style={styles.input} onPress={showDatePicker}>{selectedDate ? format(selectedDate, 'dd-MM-yyyy') : 'No date selected'}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 20,
    textAlignVertical: "center"
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dateText: {
    fontSize: 18,
    marginRight: 16,
  },
});

export default Booking;
