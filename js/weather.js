const API_KEY='c459a1fb56171fce0a45fc879d42131e';
const weatherIcon = document.querySelector('#wicon');

const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log('You live in', lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather').querySelector('#a');   
        const temp = document.querySelector('#weather').querySelector('#b');    
        const city = document.querySelector('#weather').querySelector('#c');   
        weather.innerText = data.weather[0].description;
        temp.innerText = Math.round(data.main['temp']-273.15) + '°C';
        city.innerText = data.name;
        weatherIcon.src = `http://openweathermap.org/img/w/${data.weather['0'].icon}.png`;
    });
};
const onGeoError = () => {
    alert('날씨 정보를 불러올 수 없습니다. ');
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);