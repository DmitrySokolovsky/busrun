/** @format */

import {AppRegistry} from 'react-native';
import App from './src2/App';
import {name as appName} from './app.json';
//import './src/services/Notification/Notification.service'; // TODO: refactoring

AppRegistry.registerComponent(appName, () => App);
