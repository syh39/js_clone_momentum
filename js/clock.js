const clock = document.querySelector('h2#clock');
const currentDate = document.querySelector('h2#date');

days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getClock = () => {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');

    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, '0');
    const dateNum = String(date.getDate()).padStart(2, '0');
    const day = days[date.getDay()];

    clock.innerText = `${hour}:${minute}`;
    currentDate.innerText = `${year}.${month}.${dateNum} ${day}`
};

getClock();
setInterval(getClock, 1000)
