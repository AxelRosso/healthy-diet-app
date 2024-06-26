import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BodyMetrics = ({ navigation }) => {
  const handleLogoutPress = () => {
    navigation.navigate('Login');
  };

  const handleMetricsPress = () => {
    navigation.navigate('BodyData');
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
        <Text style={styles.subtitle}>Body Metrics</Text>
        <TouchableOpacity style={[styles.buttonContainer, { paddingVertical: 8, paddingHorizontal: 16 }]} onPress={handleMetricsPress}>
          <Text style={[styles.buttonText, { fontSize: 16 }]}>Metrics</Text>
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
    marginTop: 40,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default BodyMetrics;
