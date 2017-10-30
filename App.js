import React, { Component } from 'react';
import { Header } from './src/components';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  TextInput
} from 'react-native';
import Tabs from 'react-native-tabs';

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
          <Text style={styles.asideTitle}>legalBlocks</Text>
          <Button title="Article" style={styles.field}></Button>
          <Button title="Asset" style={styles.field}></Button>
          <Button title="Signature" style={styles.field}></Button>
        </View>
        <View style={styles.main}>
          <Header />
          <TextInput style={{flex: 3}}></TextInput>
          <Tabs style={{backgroundColor:'#E2D9A2', height: 30,}}
                selectedStyle={{color:'#9B2915'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="first">First</Text>
            <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Second</Text>
            <Text name="third">Third</Text>
            <Text name="fourth" selectedStyle={{color:'green'}}>Fourth</Text>
          </Tabs>
        </View>
      </View>
    );
  }
}

{/* // return (
//   <View style={styles.body}>
//     <View style={styles.asideHeader}>
//       <Text style={styles.asideTitle}>legalBlocks</Text>
//       <Button title={title} style={styles.field}></Button>
//       <Button title={title} style={styles.field}></Button>
//       <Button title={title} style={styles.field}></Button>
//     </View>
//     <ScrollView style={styles.main}>
//       <Tabs style={styles.topNav}>
//         <Button title={top} style={styles.hamburger}</Button>
//         <Text style={styles.title}</Text>
//         <Button title={title} style={styles.searchButton}</Button>
//         <Button title={title} style={styles.createButton}</Button>
//       </Tabs>
//       <View style={styles.articleContainer}>
//         <Text style={styles.article}></Text>
//         <Button title={title} style={styles.newArticle}></Button>
//         <Button title={title} style={styles.newSubArticle}></Button>
//       </View>
//       <Tabs style={styles.bottomNav}>
//         <Button title={bottom} style={styles.builder}></Button>
//         <Button title={title} style={styles.deploy}></Button>
//         <Button title={title} style={styles.deployed}></Button>
//         <Button title={title} style={styles.notifications}></Button>
//       </Tabs>
//     </ScrollView>
//   </View>
// ); */}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  asideHeader: {
    flex: 1,
    backgroundColor: '#4A4E69',
    justifyContent: 'space-around'
  },
  asideTitle: {
    textAlign: "center",
    color: '#E2D9A2'
  },
  main: {
    flex: 4,
    backgroundColor: '#22223B',
  },
  header: {
    height: 30,
    backgroundColor: '#E2D9A2',
  },
});
