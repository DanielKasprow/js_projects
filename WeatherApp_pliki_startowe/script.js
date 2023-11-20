const input = document.querySelector("input")
const button = document.querySelector("button")
const cityName = document.querySelector(".city-name")
const warning = document.querySelector(".warning")
const photo = document.querySelector(".photo")
const weather = document.querySelector(".weather")
const temperature = document.querySelector(".temperature")
const humidity = document.querySelector(".humidity")

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = "&appid=d77d62c388de8819062a859d73ab3147"
const API_UNITS = "&units=metric"

const getWeather = () => {
  const city = input.value || 'London'
  const URL = API_LINK + city + API_KEY + API_UNITS

  axios.get(URL).then(res => {
    const status = Object.assign({}, ...res.data.weather)

    switch(Math.floor(status.id / 100)){
        case 2:
            photo.setAttribute('src', './img/thunderstorm.png')
            break;
        case 3:
            photo.setAttribute('src', './img/drizzle.png.png')
            break;
        case 5:
            photo.setAttribute('src', './img/rain.png')
            break;
        case 6:
            photo.setAttribute('src', './img/ice.png')
            break;
        case 7:
            photo.setAttribute('src', './img/fog.png')
            break;
        case 8:
            photo.setAttribute('src', './img/sun.png')
            if(status.id > 800)
                photo.setAttribute('src', './img/cloud.png')
            break;
        default:
            photo.setAttribute('src', './img/unknown.png')
    }

    cityName.textContent = res.data.name
    temperature.textContent = `${Math.floor(res.data.main.temp)}℃`
    humidity.textContent = res.data.main.humidity + '%'
    weather.textContent = status.main
    warning.textContent = ''
    input.value = ''
  }).catch(() => warning.textContent = 'Wpisz poprawną nazwę miasta!')
}

const enterCheck = e =>{
    if(e.key ==='Enter'){
        getWeather()
    }
}
input.addEventListener('keyup', enterCheck)
button.addEventListener('click', getWeather)
