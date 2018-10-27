/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import FCM, {NotificationActionType} from "react-native-fcm";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      tokenCopyFeedback: ""
    };
  }

  async componentDidMount() {
    try {
      let result = await FCM.requestPermissions({badge: false, sound: true, alert: true});
      Alert.alert('Success!');
    } catch(err) {
      Alert.alert('Error');
    }

    FCM.getFCMToken().then(token => {
      console.log("TOKEN (getFCMToken)", token);
      this.setState({token: token || ""})
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Notifications!</Text>
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
