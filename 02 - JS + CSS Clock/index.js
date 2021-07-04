// 获取时分秒指针
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDeg = 90 + (second / 60) * 360;

    const min = now.getMinutes();
    const minDeg = 90 + (min / 60) * 360;

    const hour = now.getHours();
    const hourDeg = 90 + (hour / 12) * 360 + (min / 12 / 60) * 360;

    if (secondDeg === 90) {
        secondHand.style.transition = 'all 0s';
    } else {
        secondHand.style.transition = 'all 0.05s cubic-bezier(0.9, 0.54, 0.26, 1.68)';
    }

    if (minDeg === 90) {
        minHand.style.transition = 'all 0s';
    } else {
        minHand.style.transition = 'all 0.05s cubic-bezier(0.9, 0.54, 0.26, 1.68)';
    }

    if (hourDeg === 116.5) {
        hourHand.style.transition = 'all 0s';
    } else {
        hourHand.style.transition = 'all 3s';
    }

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    console.log(`${hour}:${min}:${second} - ${hourDeg}:${minDeg}:${secondDeg}` );
}
setInterval(setDate, 1000);