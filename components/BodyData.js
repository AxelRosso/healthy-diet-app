import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BodyData = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleLogoutPress = () => {
    navigation.navigate('Login');
  };

  const handleNextPress = () => {
    navigation.navigate('DietGoal');
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <MaterialCommunityIcons name="menu" size={24} color="black" />
        <MaterialCommunityIcons name="logout" size={24} color="black" onPress={handleLogoutPress} />
      </View>
      <View style={styles.profileContainer}>
        <MaterialCommunityIcons name="account-circle" size={150} color="black" />
        <Text>User Name</Text>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.subtitle}>Enter your body metrics</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Weight" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Height" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Age" />
        </View>
        <View style={styles.genderContainer}>
          <Text style={styles.genderText}>Gender:</Text>
          <TouchableOpacity
            style={[styles.genderButton, selectedGender === 'Male' && styles.selectedGender]}
            onPress={() => handleGenderSelect('Male')}
          >
            <Text style={[styles.genderButtonText, selectedGender === 'Male' && styles.selectedGenderText]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, selectedGender === 'Female' && styles.selectedGender]}
            onPress={() => handleGenderSelect('Female')}
          >
            <Text style={[styles.genderButtonText, selectedGender === 'Female' && styles.selectedGenderText]}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.arrowButton, { marginLeft: 10 }]}>
            <MaterialCommunityIcons name="arrow-right" size={20} color="white" onPress={handleNextPress} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
  },
  input: {
    padding: 10,
    fontSize: 16,
    color: 'black',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  genderText: {
    marginRight: 10,
  },
  genderButton: {
    backgroundColor: '#15ECFE',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedGender: {
    backgroundColor: 'green',
  },
  genderButtonText: {
    color: 'white',
  },
  selectedGenderText: {
    color: 'black',
  },
  arrowButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginleft: 30,
  },
});

export default BodyData;
