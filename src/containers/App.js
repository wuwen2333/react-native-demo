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
import ImmutablePropTypes from 'react-immutable-proptypes';

function mapStateToProps(state) {
  return {
    welcomeText: state.home.get('welcomeText')
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
    welcomeText: PropTypes.object
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
    const welcomeText = this.props.welcomeText || {};
    return (
      <Home welcomeText={welcomeText} />
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
