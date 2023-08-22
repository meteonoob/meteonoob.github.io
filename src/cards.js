import { html } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js'


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const meteoEnum = {

  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Light Drizzle",
  53: "Moderate Drizzle",
  55: "Intensity Drizzle",
  56: "Light Freezing Drizzle",
  57: "Intensity Freezing Drizzle",
  61: "Slight Rain",
  63: "Moderate Rain",
  65: "Heavy Intensity Rain",
  66: "Light Freezing Rain",
  67: "Heavy Intensity Freezing Rain",
  71: "Slight Snow Fall",
  73: "Moderate Snow Fall",
  75: "Heavy Intensity Snow Fall",
  77: "Snow Grains",

  80: "Slight Rain Showers",
  81: "Moderate Rain Showers",
  82: "Violent Rain Showers",

  85: "Slight Snow Showers",
  86: "Heavy Snow Showers",
  95: "Thunderstorm",
  96: "Thunderstorm",
  99: "Thunderstorm"

}

export function todayCardTemplate(obj, unit) {

  return html`
              <div class="card" id="today" >
              
              <div class="img-container">
                <img  src="/images/${obj[0].img}.gif" alt="o" />
              </div>

              <div class="info-container">
                <p class="date">Now</p>

                <p class="meteo">${meteoEnum[`${obj[0].weathercode}`]}</p>
              
                <p>
                <strong>Temperature:</strong> <span class="max">${Math.round(obj[0].temperature_2m)}${unit}</span>
                </p>
                <p>
                <strong>Apparent: ${Math.round(obj[0].apparent_temperature)}${unit}</strong> 
                </p>
                <p>
                <strong>Cloudcover: ${Math.round(obj[0].cloudcover)}%</strong> 
                </p>
                <p>
                <strong>Windspeed: ${(obj[0].windspeed_10m)}m/s</strong> 
                </p>
              </div>
              </div>`
}



export function cardTemplate(obj, unit){


    return html`
          <div class="card" id="week">
           <div class="img-container">
            <img src="/images/${obj.img}.gif" alt="o" />
            </div>

            <div class="info-container">
            <p class="date">
              <strong>${daysOfWeek[new Date(obj.time).getDay()]} ${obj.time}</strong>
            </p>

            <p>
                 <span class="max">${Math.round(obj.temperature_2m_min)}/${Math.round(obj.temperature_2m_max)}${unit}</span>
            </p>
            <p class="meteo">${meteoEnum[`${obj.weathercode}`]}</p>
            </div>
         </div>`
}

export function homeTemplate(info, unit) {

  const todayInfo = info.hoursInfo;
  const weekInfo = info.weekInfo;

  return html`

  <div class="today-container" >
       ${todayCardTemplate(todayInfo, unit)}
  </div>
  
  <div class="week-container">
          ${weekInfo.map(day => day = cardTemplate(day, unit))}
  </div>
  
  `
}