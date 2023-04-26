let searchBtn = document.getElementById('searchBtn')
let searchInp = document.getElementById('searchInp');
let today = document.getElementById('today');
let todayDate = document.getElementById('todayDate');


let capital = document.getElementById('capital');
let degreeToday = document.getElementById('degreeToday');
let iconToday = document.getElementById('iconToday');
let condtionToday = document.getElementById('condtionToday');
let rain = document.getElementById('rain');
let wind = document.getElementById('wind');
let dirc = document.getElementById('dirc');

let iconTom = document.getElementById('iconTom');
let maxDegreeTom = document.getElementById('maxDegreeTom');
let minDegreeTom = document.getElementById('minDegreeTom');
let condtionTom = document.getElementById('condtionTom');


let iconAfter = document.getElementById('iconAfter');
let maxDegreeAfter = document.getElementById('maxDegreeAfter');
let minDegreeAfter = document.getElementById('minDegreeAfter');
let condtionAfter = document.getElementById('condtionAfter');

displayDate()
getWeather("cairo")


async function getWeather(country) {
    let weatherResp = await fetch(`//api.weatherapi.com/v1/forecast.json?key=9939101afdc3426093b131752232402&q=${country}&days=3&aqi=no&alerts=no`)
    let weatherData = await weatherResp.json()
    console.log(weatherData)

    capital.innerText = `${weatherData.location.name}`

    degreeToday.innerText = `${weatherData.current.temp_c}`
    iconToday.setAttribute('src', `${weatherData.forecast.forecastday[0].day.condition.icon}`)
    condtionToday.innerText = `${weatherData.forecast.forecastday[0].day.condition.text}`
    rain.innerText = `${weatherData.current.cloud}`
    wind.innerText = `${weatherData.current.wind_kph}`
    dirc.innerText = `${weatherData.current.wind_dir}`


    iconTom.setAttribute('src', `${weatherData.forecast.forecastday[1].day.condition.icon}`)
    maxDegreeTom.innerText = `${weatherData.forecast.forecastday[1].day.maxtemp_c}`
    minDegreeTom.innerText = `${weatherData.forecast.forecastday[1].day.mintemp_c}`
    condtionTom.innerText = `${weatherData.forecast.forecastday[1].day.condition.text}`

    iconAfter.setAttribute('src', `${weatherData.forecast.forecastday[2].day.condition.icon}`)
    maxDegreeAfter.innerText = `${weatherData.forecast.forecastday[2].day.maxtemp_c}`
    minDegreeAfter.innerText = `${weatherData.forecast.forecastday[2].day.mintemp_c}`
    condtionAfter.innerText = `${weatherData.forecast.forecastday[2].day.condition.text}`
}

searchBtn.addEventListener('click', function () {
    displayDate()
    getWeather(searchInp.value)
})


function displayDate() {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const cDate = new Date();
    const dayNum = cDate.getDay();
    const cDay = cDate.getDate();
    let month = cDate.toLocaleString('default', { month: 'long' });

    let today = (`${cDay} ${month}`);
    let nextDay = (`${cDay + 1} ${month}`);
    let nextNextday = (`${cDay + 2} ${month}`);

    let headerData = document.querySelectorAll('.header');
    for (let i = 0; i < headerData.length; i++) {
        if (i === 0) {headerData[i].innerHTML = `${week[dayNum]}, ${today}`;} 
        else if (i === 1) {headerData[i].innerHTML = `${nextDay}`;} 
        else if (i === 2) {headerData[i].innerHTML = `${nextNextday}`;}
    };
};







