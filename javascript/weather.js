var city = document.querySelector(".location-timezone");
var temperature = document.querySelector(".temperature-degree");
var description = document.querySelector(".temperature-description");
var temperatureSection = document.querySelector(".degree-section");
var temperatureSpan = document.querySelector(".degree-section span");
var weatherIconTag;
var skycons = new Skycons({"color": "white"});

window.addEventListener("load",()=>{
  let lon;
  let lat;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      var key = '37727e9eb03e2a34aca1e1b3ae84c871';
      var api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+key;

      fetch(api)
      .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
        console.log(data);

        var celsius = Math.round(parseFloat(data.main.temp)-273.15);
        var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
        city.textContent = data.name;
        temperature.textContent = celsius;
        description.textContent = data.weather[0].description;
        var icon = data.weather[0].icon;

        switch (icon) {
          case "01d":
            weatherIconTag = Skycons.CLEAR_DAY;

            break;
          case "01n":
            weatherIconTag = Skycons.CLEAR_NIGHT;

            break;

          case "02d":
          case "03d":
            weatherIconTag = Skycons.PARTLY_CLOUDY_DAY;

            break;

          case "02n":
          case "03n":
            weatherIconTag = Skycons.PARTLY_CLOUDY_NIGHT;

            break;

          case "04d":
          case "04n":
            weatherIconTag = Skycons.CLOUDY;

            break;

          case "09d":
          case "09n":
          case "10d":
          case "10n":
          case "11d":
          case "11n":
            weatherIconTag = Skycons.RAINY;

            break;

          case "13d":
          case "13n":
            weatherIconTag = Skycons.SNOW;

            break;

          case "50d":
          case "50n":
            weatherIconTag = Skycons.WIND;

                break;
        }
        // document.querySelector("img").setAttribute("src","http://openweathermap.org/img/w/"+data.weather[0].icon+".png");

        skycons.add(document.getElementById("icon1"), weatherIconTag);

        skycons.play();

        temperatureSection.addEventListener("click",function(){
          if(temperatureSpan.textContent==="F"){
              temperatureSpan.textContent="C";
              temperature.textContent = celsius;
          }
          else{
            temperatureSpan.textContent="F"
            temperature.textContent = fahrenheit;
          }
        });


      })
      .catch(function() {
        // catch any errors
      });
    })
  }
});
