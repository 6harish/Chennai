import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Screen2 = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [patientInfo, setPatientInfo] = useState(null);

  const handleAddPatient = () => {
    // Validation logic
    if (!name.trim()) {
      alert('Please enter a name');
      return;
    }

    if (!gender) {
      alert('Please select a gender');
      return;
    }

    if (!dob.trim()) {
      alert('Please enter a age');
      return;
    }

    const info = {
      name,
      gender,
      dob,
    };
    setPatientInfo(info);

    setName('');
    setGender('');
    setDob('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
        style={styles.input}
        placeholderTextColor={'#808080'}
      />
      <Text style={styles.userName}>Gender:</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => setGender('male')}>
          <Text style={styles.gender}>{gender === 'male' ? '✓' : ''} Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('female')}>
          <Text style={styles.gender}>
            {gender === 'female' ? '✓' : ''} Female
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('other')}>
          <Text style={styles.gender}>
            {gender === 'other' ? '✓' : ''} Other
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.userName}>Age:</Text>
      <TextInput
        value={dob}
        onChangeText={setDob}
        placeholder="Enter Age"
        style={styles.input}
        placeholderTextColor={'#808080'}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddPatient}>
        <Text style={styles.addButtonText}>Add Patient</Text>
      </TouchableOpacity>

      {patientInfo && (
        <View>
          <Text style={styles.userName}> Patient Information </Text>
          <Text style={styles.output}>Name: {patientInfo.name}</Text>
          <Text style={styles.output}>Gender: {patientInfo.gender}</Text>
          <Text style={styles.output}>Age: {patientInfo.dob}</Text>
        </View>
      )}
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 16,
  },
  output: {
    backgroundColor: 'gray',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignSelf: 'stretch',
    color: '#fff',
  },

  gender: {
    backgroundColor: '#080808',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignSelf: 'stretch',
    color: '#fff',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  userDetails: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'stretch',
    marginBottom: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  patientList: {
    alignSelf: 'stretch',
  },
  patientItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  patientDetails: {
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    alignSelf: 'stretch',
    color: '#000',
  },
});
