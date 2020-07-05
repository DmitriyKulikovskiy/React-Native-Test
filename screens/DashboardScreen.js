import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderComponent from '../src/header';
import AddTodo from '../src/addTodo';


class DashboardScreen extends Component {
  render() {
 
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <AddTodo/>
      </View>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
