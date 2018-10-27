import { Alert } from 'react-native';
import FCM, {
    FCMEvent, LocalNotification, NotificationType, RemoteNotificationResult, WillPresentNotificationResult
} from 'react-native-fcm';

import FCMConstants from '../../constants/Firebase.constants';

class Notification {
    token;
    constructor() {
        this.init();
        this.showLocalNotification();
    }

    async init() {
        try {
            let result = await FCM.requestPermissions({ badge: false, sound: true, alert: true });
            // console.log('Success!');
        } catch (err) {
            Alert.alert('Error');
        }

        FCM.getFCMToken().then(token => {
            // console.log("TOKEN (getFCMToken)", token);
            this.token = token;
        });

        FCM.getInitialNotification().then(notif => {
            this.showLocalNotification(notif);
        });

        this.notificationListener = FCM.on(FCMEvent.Notification, (notif) => {
            console.log("Notification", notif);
            if (notif.local_notification) {
              // Local notification
              // The only case to receive that is nearby benefits notification (for now)
              Alert.alert('Send');
              return;
            }
            if (notif.opened_from_tray) {
                Alert.alert('Send from trey');
              return;
            }
      
            this.showLocalNotification(notif.fcm);

          });
      

    }

    

    showLocalNotification(localNotification) {
        FCM.presentLocalNotification({
           vibrate: 500,
           priority: 'high',
           show_in_foreground: true,
           sound: 'default',
           icon: 'ic_star',
           title: 'Benefits',
           ...localNotification,
        });
    }
    
}

export default new Notification;