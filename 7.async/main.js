// тут вы можете вызывать функции из task.js

function testCase() {
    clock = new AlarmClock();
    clock.addClock("16:45", () => console.log(`Новый звонок, не будильник, не таймер.`), 1);

    clock.addClock("16:46", () => {
        console.log(`Эх раз, еще раз, еще много много раз.`);
        clock.removeClock(2);
    }, 2);

    clock.addClock("16:47", () => {
        console.log(`Не доживем до этого звонка, а-ля будильника.`);
        clock.stop();
        clock.clearAlarms();
        clock.printAlarms();
    }, 3);

    clock.printAlarms();

    clock.start();
}

testCase();