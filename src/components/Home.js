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

const styles = StyleSheet.create({
  margin10: {
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Home extends Component {
  static propTypes = {
    welcomeText: PropTypes.Object,
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[appStyle.container,appStyle.containerCentered]}>
        <Text style={[appStyle.h2,styles.margin10]}>
          {this.props.welcomeText.title}
        </Text>
        <Text style={styles.instructions}>
          {this.props.welcomeText.introduction}
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button title="press me to page" onPress={() => Actions.page()}/>
      </View>
    );
  }
}
export default Home;
