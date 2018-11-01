import BackgroundTimer from 'react-native-background-timer';

export class BackgroundService {
    intervalId;
    constructor() {
        this.intervalId = null;
    }

    _checkTime = () => {}

    static start = (callback) => {
        this.intervalId = BackgroundTimer.setInterval(() => {
            callback();
        }, 3000);

        console.log("start!!!!!!!!!!!", this.intervalId);
    }

    static stop = () => {
        console.log(this.intervalId);
        BackgroundTimer.clearInterval(this.intervalId);
    }
}