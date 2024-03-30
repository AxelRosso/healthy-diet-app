import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DietGoal = ({ navigation }) => {
  const handleLogoutPress = () => {
    navigation.navigate('Login');
  };

  // Función para manejar la navegación a DietKind.js cuando se hace clic en el botón específico
  const handleDietKindPress = () => {
    navigation.navigate('DietKind');
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
        <Text style={styles.subtitle}>Choose your diet goal</Text>
        {/* Asigna la función handleDietKindPress al botón específico */}
        <TouchableOpacity style={[styles.button, { width: '80%', paddingVertical: 8, paddingHorizontal: 30 }]} onPress={handleDietKindPress}>
          <Text style={[styles.buttonText, { fontSize: 16 }]}>Increase muscle mass</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { width: '80%', paddingVertical: 8, paddingHorizontal: 30 }]} onPress={handleDietKindPress}>
          <Text style={[styles.buttonText, { fontSize: 16 }]}>Lose Weight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { width: '80%', paddingVertical: 8, paddingHorizontal: 30 }]} onPress={handleDietKindPress}>
          <Text style={[styles.buttonText, { fontSize: 16 }]}>Keep healthy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { width: '80%', paddingVertical: 8, paddingHorizontal: 30 }]} onPress={handleDietKindPress}>
          <Text style={[styles.buttonText, { fontSize: 16 }]}>Endurance training</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { width: '80%', paddingVertical: 8, paddingHorizontal: 30 }]} onPress={handleDietKindPress}>
          <Text style={[styles.buttonText, { fontSize: 16 }]}>Sports training</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Ajuste aquí para subir los elementos
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default DietGoal;
