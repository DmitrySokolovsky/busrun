/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NotificationService} from './src/services/Notifications';
//import './src/services/Notification/Notification.service'; // TODO: refactoring

NotificationService.initNotificationService();

AppRegistry.registerComponent(appName, () => App);
