import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const Header = () => {
  return(
    <View style={{display: 'flex', height: 30,backgroundColor: '#E2D9A2',}}>
      <Text style={{textAlign: 'center',}}>legalBlocks</Text>
    </View>
  )
}

// const style = Stylesheet.create({
//   headerContainer: {
//     flex: 1,
//     height: 30,
//     backgroundColor: '#E2D9A2',
//   },
// })



export default Header;
