import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.asideHeader}>
          <Text style={styles.asideTitle}></Text>
          <Button style={styles.field}></Button>
          <Button style={styles.field}></Button>
          <Button style={styles.field}></Button>
          <Button style={styles.field}></Button>
          <Button style={styles.field}></Button>
        </View>
        <View style={styles.main}>
          <NavBar style={styles.topNav}>
            <Button style={styles.hamburger}</Button>
            <Text style={styles.title}</Text>
            <Button style={styles.searchButton}</Button>
            <Button style={styles.createButton}</Button>
          </NavBar>
          <View style={styles.articleContainer}>
            <Text style={styles.article}></Text>
            <Button style={styles.newArticle}></Button>
            <Button style={styles.newSubArticle}></Button>
          </View>
          <NavBar style={styles.bottomNav}>
            <Button style={styles.builder}></Button>
            <Button style={styles.deploy}></Button>
            <Button style={styles.deployed}></Button>
            <Button style={styles.notifications}></Button>
          </NavBar>
        </View>
      </View>
    );
  }
}

// render() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>
//         Welcome to React Native!
//       </Text>
//       <Text style={styles.instructions}>
//         To get started, edit App.js
//       </Text>
//       <Text style={styles.instructions}>
//         {instructions}
//       </Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
