class AlarmClock {
    constructor(alarmCollection = []) {
        this.alarmCollection = alarmCollection;
        this.timerId = null;
    }
    addClock(time, callBack, id) {
        if (id === undefined) {
            throw new Error('error text');
        }
        if (this.alarmCollection.some(elem => {
            return elem.id === id
        }
        )) {
            return;
        }
        this.alarmCollection.push({
            id,
            time,
            callBack
        })
    }
    removeClock(id) {
        let oldLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(el => el.id != id);
        return !(oldLength === this.alarmCollection.length);
    }
    getCurrentFormattedTime() {
        let time = new Date();
        let hours;
        let minutes;
        if (time.getHours() < 10) {
            hours = "0" + time.getHours();
        } else {
            hours = time.getHours();
        }
        if (time.getMinutes() < 10) {
            minutes = "0" + time.getMinutes();
        } else {
            minutes = time.getMinutes();
        }
        return hours + ":" + minutes;
    }
    start() {
        let forTime = this;
        function checkClock(alarm) {
            if (alarm.time === forTime.getCurrentFormattedTime()) {
                alarm.callBack();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(elem => checkClock(elem));
            }, 5000);
        }
    }
    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(elem => console.log(`Звонок с id = ${elem.id} заведен на время ${elem.time}.`));
    }
    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}