import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const handleMetricsPress = () => {
    navigation.navigate('BodyMetrics');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <MaterialCommunityIcons name="menu" size={24} color="black" />
        <MaterialCommunityIcons name="login" size={24} color="black" />
      </View>
      <View style={styles.profileContainer}>
        <MaterialCommunityIcons name="account-circle" size={200} color="grey" />
      </View>
      <View style={styles.centerContent}>
        <View style={styles.inputContainer}>
          <Text>User</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text>Password</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Log in" onPress={handleMetricsPress} /> {/* Cambiado de 'Metrics' a 'Log in' */}
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
    marginTop: 100, // Ajusta la altura del icono de perfil
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    marginBottom: 20, // Ajusta la distancia del botón al siguiente elemento
    alignItems: 'center',
  },
});

export default Login;
