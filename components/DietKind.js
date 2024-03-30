import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DietKind = ({ navigation }) => {
  const handleLogoutPress = () => {
    navigation.navigate('Login');
  };

  const handleDietKindPress = (dietType) => {
    if (dietType === 'Omnívoro') {
      navigation.navigate('FoodCategory1');
    } else if (dietType === 'Vegetariano') {
      navigation.navigate('FoodCategory2');
    } else if (dietType === 'Vegano') {
      navigation.navigate('FoodCategory3');
    }
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
        <Text style={styles.title}>Choose Your Diet Kind</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleDietKindPress('Omnívoro')}>
          <Text style={styles.buttonText}>Omnívoro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDietKindPress('Vegetariano')}>
          <Text style={styles.buttonText}>Vegetariano</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDietKindPress('Vegano')}>
          <Text style={styles.buttonText}>Vegano</Text>
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
    marginTop: 0,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default DietKind;
