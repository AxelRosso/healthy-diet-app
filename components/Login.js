import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
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
        <MaterialCommunityIcons name="account-circle" size={150} color="grey" />
      </View>
      <View style={styles.centerContent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="User"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Log in" onPress={handleMetricsPress} color="#007AFF" />
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
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
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
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
});

export default Login;
