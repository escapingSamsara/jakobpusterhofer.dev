window.addEventListener('load', function () {
  //initializing API from https://openweathermap.org/ via registered API Key
  // https://api.openweathermap.org/data/2.5/weather?q=Graz&units=metric&lang=en&appid=bf1b245c3eb80c2eff8fdafb1d0ad17f
  //---------------------------------------------------------------------------------------------------
  let weather = {
    apiKey: 'bf1b245c3eb80c2eff8fdafb1d0ad17f',
    fetchWeather: function fetchWeather(city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${this.apiKey}`
      )
        .then((res) => res.json())
        .then((data) => this.displayWeather(data))
    },
    //displayWeather Function:
    displayWeather: function (data) {
      const { name } = data
      const { icon, description } = data.weather[0]
      const { temp, humidity } = data.main
      const { speed } = data.wind
      //innerText and background output:
      document.querySelector('.city').innerText = `Weather in ${name}`
      document.querySelector(
        '.icon'
      ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`
      document.querySelector('.temp').innerText = `${Math.floor(temp)}°C`
      document.querySelector('.description').innerText = `${description}`
      document.querySelector('.humidity').innerText = `${humidity} %`
      document.querySelector('.speed').innerText = `${speed} km/h`
      document.querySelector('.weather').classList.remove('loading')
      document.querySelector('.card').style.backgroundImage = `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0,0 ,0 ,0.7) 50%,
      rgba(0, 0, 0, 0.75) 100%
    ), url(https://source.unsplash.com/featured/?${name})`
    },
    //Search Function:
    search: function () {
      this.fetchWeather(document.querySelector('.search-bar').value)
    },
  }
  //---------------------------------------------------------------------------------------------------
  //Geocode Object to determine Users Location (City only)
  let geocode = {
    reverseGeocode: function (latitude, longitude) {
      let api_key = 'e4dd8f89a9d8442e8853cf32ef36cf9f'
      let api_url = 'https://api.opencagedata.com/geocode/v1/json'
      let request_url =
        api_url +
        '?' +
        'key=' +
        api_key +
        '&q=' +
        encodeURIComponent(latitude + ',' + longitude) +
        '&pretty=1' +
        '&no_annotations=1'
      // see full list of required and optional parameters:
      // https://opencagedata.com/api#forward
      let request = new XMLHttpRequest()
      request.open('GET', request_url, true)
      request.onload = function () {
        // see full list of possible response codes:
        // https://opencagedata.com/api#codes
        if (request.status === 200) {
          // Success!
          let data = JSON.parse(request.responseText)
          // console.log(data.results[0].components.city) // print the location
          weather.fetchWeather(data.results[0].components.city)
        } else if (request.status <= 500) {
          // We reached our target server, but it returned an error
          console.log('unable to geocode! Response code: ' + request.status)
          let data = JSON.parse(request.responseText)
          console.log('error msg: ' + data.status.message)
        } else {
          console.log('server error')
        }
      }
      request.onerror = function () {
        // There was a connection error of some sort
        console.log('unable to connect to server')
      }
      request.send() // make the request
    },
    //getLocation Function to determine the Location, if error/not possible, use default location (Graz)
    getLocation: function () {
      function success(data) {
        geocode.reverseGeocode(data.coords.latitude, data.coords.longitude)
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, console.error)
      } else {
        weather.fetchWeather('Graz')
      }
    },
  }
  //---------------------------------------------------------------------------------------------------
  //Search Button and Search Bar EventListener
  document.querySelector('.search-btn').addEventListener('click', function () {
    weather.search()
  })
  document
    .querySelector('.search-bar')
    .addEventListener('keyup', function (event) {
      if (event.key == 'Enter') {
        weather.search()
      }
    })
  //---------------------------------------------------------------------------------------------------
  // weather.fetchWeather('Graz')
  geocode.getLocation()
})
