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
import BackgroundTimer from 'react-native-background-timer';

registerKilledListener();

export default class App extends Component {
  notificator;
  constructor(props) {
    super(props);
    this.notificator = new NotificationService();
    this.state = {
      token: "",
      tokenCopyFeedback: ""
    };
  }

  async componentDidMount() {
    //FCM.createNotificationChannel is mandatory for Android targeting >=8. Otherwise you won't see any notification
    // FCM.createNotificationChannel({
    //   id: 'default',
    //   name: 'Default',
    //   description: 'used for example',
    //   priority: 'high'
    // })
    // registerAppListener(this.props.navigation);
    // FCM.getInitialNotification().then(notif => {
    //   console.log(notif);
    //   this.setState({
    //     initNotif: notif
    //   });
    //   if (notif && notif.targetScreen === "detail") {
    //     setTimeout(() => {
    //       this.props.navigation.navigate("Detail");
    //     }, 500);
    //   }
    // });

    // try {
    //   let result = await FCM.requestPermissions({
    //     badge: false,
    //     sound: true,
    //     alert: true
    //   });
    // } catch (e) {
    //   console.error(e);
    // }

    // FCM.getFCMToken().then(token => {
    //   console.log("TOKEN (getFCMToken)", token);
    //   this.setState({ token: token || "" });
    // });

    // topic example
    // FCM.subscribeToTopic('sometopic')
    // FCM.unsubscribeFromTopic('sometopic')

    // let timer = BackgroundTimer.setInterval(() => {
    //   NotificationService.showLocalNotification();
    // }, 1000);
  };

  showLocalNotification2() {
    NotificationService.showLocalNotification();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Notifications!!!!!!!!!!!!!</Text>
        <Button title="PRESS ME" onPress={this.showLocalNotification2.bind(this)}/>
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
