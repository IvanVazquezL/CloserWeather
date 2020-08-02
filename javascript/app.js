var key = '37727e9eb03e2a34aca1e1b3ae84c871';
var city = document.querySelector(".location-timezone");
var date = document.querySelector(".location-date");
var temperature = document.querySelector(".temperature-degree");
var description = document.querySelector(".temperature-description");
var temperatureSection = document.querySelector(".degree-section");
var temperatureSpan = document.querySelector(".degree-section span");
var submitButton = document.getElementById("submit");
var weatherIconTag;
var skycons = new Skycons({
  "color": "white"
});

var skyconsTwo = new Skycons({
  "color": "black"
});

var countries = {
  AF: 'Afghanistan',
  AX: 'Aland Islands',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarctica',
  AG: 'Antigua And Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia',
  BA: 'Bosnia And Herzegovina',
  BW: 'Botswana',
  BV: 'Bouvet Island',
  BR: 'Brazil',
  IO: 'British Indian Ocean Territory',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  CV: 'Cape Verde',
  KY: 'Cayman Islands',
  CF: 'Central African Republic',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Christmas Island',
  CC: 'Cocos (Keeling) Islands',
  CO: 'Colombia',
  KM: 'Comoros',
  CG: 'Congo',
  CD: 'Congo, Democratic Republic',
  CK: 'Cook Islands',
  CR: 'Costa Rica',
  CI: 'Cote D\'Ivoire',
  HR: 'Croatia',
  CU: 'Cuba',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  ET: 'Ethiopia',
  FK: 'Falkland Islands (Malvinas)',
  FO: 'Faroe Islands',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories',
  GA: 'Gabon',
  GM: 'Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HM: 'Heard Island & Mcdonald Islands',
  VA: 'Holy See (Vatican City State)',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IR: 'Iran, Islamic Republic Of',
  IQ: 'Iraq',
  IE: 'Ireland',
  IM: 'Isle Of Man',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  KR: 'Korea',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: 'Lao People\'s Democratic Republic',
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libyan Arab Jamahiriya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macao',
  MK: 'Macedonia',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  FM: 'Micronesia, Federated States Of',
  MD: 'Moldova',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  AN: 'Netherlands Antilles',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  NU: 'Niue',
  NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestinian Territory, Occupied',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PN: 'Pitcairn',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',
  RE: 'Reunion',
  RO: 'Romania',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  BL: 'Saint Barthelemy',
  SH: 'Saint Helena',
  KN: 'Saint Kitts And Nevis',
  LC: 'Saint Lucia',
  MF: 'Saint Martin',
  PM: 'Saint Pierre And Miquelon',
  VC: 'Saint Vincent And Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome And Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  GS: 'South Georgia And Sandwich Isl.',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SD: 'Sudan',
  SR: 'Suriname',
  SJ: 'Svalbard And Jan Mayen',
  SZ: 'Swaziland',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syrian Arab Republic',
  TW: 'Taiwan',
  TJ: 'Tajikistan',
  TZ: 'Tanzania',
  TH: 'Thailand',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad And Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TC: 'Turks And Caicos Islands',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom',
  US: 'United States',
  UM: 'United States Outlying Islands',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VE: 'Venezuela',
  VN: 'Viet Nam',
  VG: 'Virgin Islands, British',
  VI: 'Virgin Islands, U.S.',
  WF: 'Wallis And Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe'
}
window.addEventListener("load", () => {
  let lon;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      var api = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + key;

      fetch(api)
        .then(function(resp) {
          return resp.json()
        }) // Convert data to json
        .then(function(data) {
          console.log(data);

          var celsius = Math.round(parseFloat(data.main.temp) - 273.15);
          var fahrenheit = Math.round(((parseFloat(data.main.temp) - 273.15) * 1.8) + 32);
          var countryOne = countries[data.sys.country];
          city.textContent = data.name+", "+countryOne;

          //Date
          var milliseconds = data.dt * 1000;
          console.log(milliseconds);
          var dateObject = new Date(milliseconds);

          var hourPeriod = dateObject.toLocaleString("en-US", {hour: "numeric"}).split(" ");
          console.log(hourPeriod);
          var minute = dateObject.toLocaleString("en-US", {minute: "numeric"}) // 30
          console.log(minute);
          var dayName = dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
          var month = dateObject.toLocaleString("en-US", {month: "long"}) // December
          var dayNumber = dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
          var year = dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019

          date.textContent = hourPeriod[0]+":"+minute+hourPeriod[1]+", "+dayName+", "+month+" "+dayNumber+", "+year;
          //end of date

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
              weatherIconTag = Skycons.RAIN;

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

          skycons.add(document.getElementById("icon1"), weatherIconTag);

          skycons.play();

          temperatureSection.addEventListener("click", function() {
            if (temperatureSpan.textContent === "F") {
              temperatureSpan.textContent = "C";
              temperature.textContent = celsius;
            } else {
              temperatureSpan.textContent = "F"
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

submitButton.addEventListener("click", function() {
  var country = document.getElementById("country").value;
  var cityTwo = document.getElementById("city").value;
  var divTwo = document.querySelector(".divTwo");
  var form = document.querySelector("form");
  var cityTitle = document.querySelector(".location-timezone-two");

  form.classList.add("hidden");
  divTwo.classList.remove("hidden");

  const keyCountry = Object.keys(countries).find(key => countries[key] === country);

  console.log(country);
  console.log(cityTwo);
  console.log(keyCountry);

  var apiTwo = "https://api.openweathermap.org/data/2.5/weather?q=" + cityTwo + "," + keyCountry + "&appid=" + key;

  fetch(apiTwo)
    .then(function(resp) {
      return resp.json()
    }) // Convert data to json
    .then(function(data) {
      console.log(data);

      var celsius = Math.round(parseFloat(data.main.temp) - 273.15);
      var fahrenheit = Math.round(((parseFloat(data.main.temp) - 273.15) * 1.8) + 32);
      var temperatureTwo = document.querySelector(".temperature-degree-two");
      var descriptionTwo = document.querySelector(".temperature-description-two");
      var temperatureSectionTwo = document.querySelector(".degree-section-two");
      var temperatureSpanTwo = document.querySelector(".degree-section-two span");
      var dateTwo = document.querySelector(".location-date-two");

      cityTitle.textContent = data.name+", "+country;

      //Date
      var millisecondsTwo = data.dt * 1000;
      console.log(millisecondsTwo);
      var dateObjectTwo = new Date(millisecondsTwo);
      console.log(dateObjectTwo);

      var hourPeriodTwo = dateObjectTwo.toLocaleString("en-US", {hour: "numeric"}).split(" ");
      console.log(hourPeriodTwo);
      var minuteTwo = dateObjectTwo.toLocaleString("en-US", {minute: "numeric"}) // 30
      console.log(minuteTwo);
      var dayNameTwo = dateObjectTwo.toLocaleString("en-US", {weekday: "long"}) // Monday
      var monthTwo = dateObjectTwo.toLocaleString("en-US", {month: "long"}) // December
      var dayNumberTwo = dateObjectTwo.toLocaleString("en-US", {day: "numeric"}) // 9
      var yearTwo = dateObjectTwo.toLocaleString("en-US", {year: "numeric"}) // 2019

      dateTwo.textContent = hourPeriodTwo[0]+":"+minuteTwo+hourPeriodTwo[1]+", "+dayNameTwo+", "+monthTwo+" "+dayNumberTwo+", "+yearTwo;
      //end of date

      temperatureTwo.textContent = celsius;
      descriptionTwo.textContent = data.weather[0].description;
      var iconTwo = data.weather[0].icon;

      switch (iconTwo) {
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
          weatherIconTag = Skycons.RAIN;

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

      skyconsTwo.add(document.getElementById("icon2"), weatherIconTag);

      skyconsTwo.play();

      temperatureSectionTwo.addEventListener("click", function() {
        if (temperatureSpanTwo.textContent === "F") {
          temperatureSpanTwo.textContent = "C";
          temperatureTwo.textContent = celsius;
        } else {
          temperatureSpanTwo.textContent = "F"
          temperatureTwo.textContent = fahrenheit;
        }
      });

    })
    .catch(function() {
      // catch any errors
    });

});
