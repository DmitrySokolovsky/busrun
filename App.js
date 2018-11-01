/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FCM, {NotificationActionType} from "react-native-fcm";
import { registerKilledListener, registerAppListener } from './src/services/Notifications/Listeners';
import { NotificationService } from './src/services/Notifications/Notification';
import { BackgroundService } from './src/services/BackgroundService';

// Kill Listener

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  showLocalNotification2() {
    NotificationService.showLocalNotification();
  }

  startInterval = () => {
      BackgroundService.start(NotificationService.showLocalNotification);
  }

  stopInterval = () => {
      BackgroundService.stop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Notifications!!!!!!!!!!!!!</Text>
        <Button title="PRESS ME" onPress={this.showLocalNotification2.bind(this)}/>
        <Button title="Start ME" onPress={this.startInterval}/>
        <Button title="Stop ME" onPress={this.stopInterval}/>
      </View>
    );
  }
}

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
  }
});
