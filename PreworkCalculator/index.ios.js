/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Calculator from "./apps/calculator";
import Setting from "./apps/Settings";



const PreworkCalculator = StackNavigator({
    Calculator: { screen: Calculator },
    Setting: { screen: Setting },
});

AppRegistry.registerComponent('PreworkCalculator', () => PreworkCalculator);
