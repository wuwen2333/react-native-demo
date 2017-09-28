/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as homeAction from '../actions/homeAction';
import Home from '../components/Home';

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

function mapStateToProps(state) {
  return {
    welcomeText: state.home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeAction, dispatch),
  };
}
class App extends Component {
  static propTypes = {
    actions: PropTypes.func,
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const param = {
      page: 'home'
    }
    this.props.actions.getWelcomeText(param);
  }
  render() {
    return (
      <Home welcomeText={this.props.welcomeText} />
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
