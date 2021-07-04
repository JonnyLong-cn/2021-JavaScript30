// 获取时分秒指针
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
let secondDeg = 0, minDeg = 0, hourDeg = 0;
// 初始化时刻，将各个指针转换为角度
function initDate() {
    const date = new Date();
    const second = date.getSeconds();
    secondDeg = 90 + (second / 60) * 360;
    const min = date.getMinutes();
    minDeg = 90 + (min / 60) * 360 + ((second / 60) / 60) * 360;
    const hour = date.getHours();
    hourDeg = 90 + (hour / 12) * 360 + ((min / 60) / 12) * 360 + (((second / 60) / 60) / 12) * 360;
}
// 更新时间
function updateDate() {
    secondDeg += (1 / 60) * 360;
    minDeg += ((1 / 60) / 60) * 360;
    hourDeg += (((1 / 60) / 60) / 12) * 360;
    // 每秒增加的度数
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    console.log(`${hourDeg}:${minDeg}:${secondDeg}`);
}
initDate();
setInterval(updateDate, 1000);