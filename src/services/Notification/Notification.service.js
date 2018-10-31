import {
    Alert
} from 'react-native';
import FCM from 'react-native-fcm';

export class Notification {
    showLocalNotification() {
        FCM.presentLocalNotification({
            channel: 'default',
            id: new Date().valueOf().toString(), // (optional for instant notification)
            title: "Test Notification with action", // as FCM payload
            body: "Force touch to reply", // as FCM payload (required)
            sound: "bell.mp3", // "default" or filename
            priority: "high", // as FCM payload
            click_action: "com.myapp.MyCategory", // as FCM payload - this is used as category identifier on iOS.
            badge: 10, // as FCM payload IOS only, set 0 to clear badges
            number: 10, // Android only
            ticker: "My Notification Ticker", // Android only
            auto_cancel: true, // Android only (default true)
            large_icon: "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg", // Android only
            icon: "ic_launcher", // as FCM payload, you can relace this with custom icon you put in mipmap
            big_text: "Show when notification is expanded", // Android only
            sub_text: "This is a subText", // Android only
            color: "red", // Android only
            vibrate: 300, // Android only default: 300, no vibration if you pass 0
            wake_screen: true, // Android only, wake up screen when notification arrives
            group: "group", // Android only
            picture: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png", // Android only bigPicture style
            ongoing: true, // Android only
            my_custom_data: "my_custom_field_value", // extra data you want to throw
            lights: true, // Android only, LED blinking (default false)
            show_in_foreground: true // notification when app is in foreground (local & remote)
        });
    }

    scheduleLocalNotification() {
        FCM.scheduleLocalNotification({
            id: "testnotif",
            fire_date: new Date().getTime() + 5000,
            vibrate: 500,
            title: "Hello",
            body: "Test Scheduled Notification",
            sub_text: "sub text",
            priority: "high",
            large_icon: "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg",
            show_in_foreground: true,
            picture: "https://firebase.google.com/_static/af7ae4b3fc/images/firebase/lockup.png",
            wake_screen: true,
            extra1: {
                a: 1
            },
            extra2: 1
        });
    }

    showLocalNotificationWithAction() {
        FCM.presentLocalNotification({
            title: "Test Notification with action",
            body: "Force touch to reply",
            priority: "high",
            show_in_foreground: true,
            click_action: "com.myidentifi.fcm.text", // for ios
            android_actions: JSON.stringify([{
                    id: "view",
                    title: "view"
                },
                {
                    id: "dismiss",
                    title: "dismiss"
                }
            ]) // for android, take syntax similar to ios's. only buttons are supported
        });
    }
}