import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BodyData = ({ navigation }) => {
  const handleLogoutPress = () => {
    navigation.navigate('Login');
  };

  const handleNextPress = () => {
    navigation.navigate('DietKind');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <MaterialCommunityIcons name="menu" size={24} color="black" />
        <MaterialCommunityIcons name="logout" size={24} color="black" onPress={handleLogoutPress} />
      </View>
      <View style={styles.profileContainer}>
        <MaterialCommunityIcons name="account-circle" size={200} color="black" />
        <Text>User Name</Text>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.subtitle}>Enter your body metrics</Text>
        <TextInput style={styles.input} placeholder="Weight" />
        <TextInput style={styles.input} placeholder="Height" />
        <TextInput style={styles.input} placeholder="Age" />
        <View style={styles.genderContainer}>
          <Text style={styles.genderText}>Gender:</Text>
          <TouchableOpacity style={styles.genderButton}>
            <Text style={styles.genderButtonText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.genderButton}>
            <Text style={styles.genderButtonText}>Female</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
    marginTop: 50,
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
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
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
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  genderButtonText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default BodyData;
