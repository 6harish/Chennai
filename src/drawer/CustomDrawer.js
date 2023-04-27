import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Login from '../login/Login';

const CustomDrawer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logout}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'flex-end'},
  logout: {
    color: '#000',
    margin: 20,
    fontSize: 25,
    fontWeight: 700,
  },
});
