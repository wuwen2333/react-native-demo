/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import appStyle from '../styles';
import Tabs from 'react-native-tabs';

const styles = StyleSheet.create({
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

class Page extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[appStyle.container,appStyle.containerCentered]}>
        <Text style={appStyle.h2}>
          Welcome to page.
        </Text>
        <Button title="Back" onPress={() => Actions.pop()}/>
        <Tabs style={{backgroundColor:'white'}}
                      selectedStyle={{color:'red'}}>
            <Text name="first">First</Text>
            <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Second</Text>
            <Text name="third">Third</Text>
            <Text name="fourth" selectedStyle={{color:'green'}}>Fourth</Text>
            <Text name="fifth">Fifth</Text>
        </Tabs>
      </View>
    );
  }
}
export default Page;
