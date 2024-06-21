import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { FIREBASE_DB, FIREBASE_AUTH } from "../../FirebaseConfig"; // Adjust this import to your actual path
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Define TypeScript interfaces for the data
interface Patient {
  id: string;
  name: string;
  tanggal: {
    seconds: number;
    nanoseconds: number;
  };
  userId: string;
}

const DaftarBooking = () => {
  const [clinicName, setClinicName] = useState<string>("");
  const [patients, setPatients] = useState<Patient[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  // Monitor authentication state
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserId(user.uid);
      } else {
        setCurrentUserId(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchClinicData = async () => {
      if (!currentUserId) return;

      try {
        const clinicDocRef = doc(FIREBASE_DB, "Klinik", "8oOYQysgwuDyKy2jLmaN");
        const clinicDoc = await getDoc(clinicDocRef);

        if (clinicDoc.exists()) {
          const clinicData = clinicDoc.data();
          setClinicName(clinicData.nama);

          const patientsCollectionRef = collection(
            FIREBASE_DB,
            "praktek/sesi 1/pasien"
          );
          const patientsSnapshot = await getDocs(patientsCollectionRef);
          const patientsList: Patient[] = patientsSnapshot.docs
            .map(
              (doc) =>
                ({
                  id: doc.id,
                  ...doc.data(),
                } as Patient)
            )
            .filter((patient) => patient.userId === currentUserId); // Filter patients by currentUserId

          setPatients(patientsList);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching clinic data: ", error);
      }
    };

    fetchClinicData();
  }, [currentUserId]);

  const renderItem = ({ item }: { item: Patient }) => (
    <View style={styles.patientContainer}>
      <Text style={styles.patientName}>{item.name}</Text>
      <Text style={styles.patientDate}>
        {new Date(item.tanggal.seconds * 1000).toLocaleDateString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.clinicName}>{clinicName}</Text>
      <FlatList
        data={patients}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DaftarBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  clinicName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  patientContainer: {
    padding: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  patientName: {
    fontSize: 18,
  },
  patientDate: {
    fontSize: 16,
    color: "#555",
  },
});
