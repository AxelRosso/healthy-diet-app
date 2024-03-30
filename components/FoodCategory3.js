import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FoodCategory3 = ({ navigation }) => {
  const handleLogoutPress = () => {
    navigation.navigate('Login');
  };

  // Función para manejar la navegación a la siguiente pantalla
  const handleNextScreenPress = () => {
    // Aquí iría la navegación a la siguiente pantalla
    // navigation.navigate('NombreDeLaSiguientePantalla');
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
      <ScrollView contentContainerStyle={styles.centerContent}>
        <Text style={styles.title}>Select Food Category</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.column}>
            <TouchableOpacity style={[styles.button, { paddingVertical: 8, paddingHorizontal: 16 }]} onPress={handleNextScreenPress}>
              <Text style={[styles.buttonText, { fontSize: 16 }]}>Frutas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { paddingVertical: 8, paddingHorizontal: 16 }]} onPress={handleNextScreenPress}>
              <Text style={[styles.buttonText, { fontSize: 16 }]}>Vegetales</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { paddingVertical: 8, paddingHorizontal: 16 }]} onPress={handleNextScreenPress}>
              <Text style={[styles.buttonText, { fontSize: 16 }]}>Tubérculos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { paddingVertical: 8, paddingHorizontal: 16 }]} onPress={handleNextScreenPress}>
              <Text style={[styles.buttonText, { fontSize: 16 }]}>Legumbres</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={[styles.button, { paddingVertical: 8, paddingHorizontal: 16 }]} onPress={handleNextScreenPress}>
              <Text style={[styles.buttonText, { fontSize: 16 }]}>Semillas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { paddingVertical: 8, paddingHorizontal: 16 }]} onPress={handleNextScreenPress}>
              <Text style={[styles.buttonText, { fontSize: 16 }]}>Cereales</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { paddingVertical: 8, paddingHorizontal: 16 }]} onPress={handleNextScreenPress}>
              <Text style={[styles.buttonText, { fontSize: 16 }]}>Frutos secos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { paddingVertical: 8, paddingHorizontal: 16 }]} onPress={handleNextScreenPress}>
              <Text style={[styles.buttonText, { fontSize: 16 }]}>Complementarios</Text>
            </TouchableOpacity>            
          </View>
        </View>
      </ScrollView>
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FoodCategory3;
