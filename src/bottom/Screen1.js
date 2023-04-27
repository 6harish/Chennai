import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function Screen1({navigation}) {
  const [user, setUser] = useState({
    name: 'Welcome',
    email: 'example@gmail.com',
  });

  const [patients, setPatients] = useState([
    {id: 1, name: 'Jane Doe', gender: 'Female', dob: '02/02/1980'},
    {id: 2, name: 'Bob Smith', gender: 'Male', dob: '03/03/1980'},
  ]);

  const handleAddPatient = () => {
    navigation.navigate('PatientCreate');
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.patientItem}
      onPress={() => navigation.navigate('PatientDetail', {patient: item})}>
      <Text style={styles.patientName}>{item.name}</Text>
      <Text style={styles.patientDetails}>
        {item.gender} | {item.dob}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userDetails}>{user.email}</Text>
      </View>
      <View style={styles.addButtonText}>
        <Text style={styles.addButtonText}>Patient List</Text>
      </View>

      <FlatList
        style={styles.patientList}
        data={patients}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 16,
  },
  userCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignSelf: 'stretch',
    color: '#000',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  userDetails: {
    fontSize: 16,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'stretch',
    marginBottom: 16,
    color: '#000',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  patientList: {
    alignSelf: 'stretch',
  },
  patientItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    color: '#000',
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  patientDetails: {
    fontSize: 14,
    color: '#000',
  },
});
