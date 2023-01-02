import { get } from "./api.js";


export async function get7Days(lat, lon){
    const result = await get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,rain,showers,snowfall,weathercode,cloudcover,visibility,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&windspeed_unit=ms&timezone=auto`);
    return result
}


export async function getCity (city){
      const result = get(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${city}&namePrefixDefaultLangResults=true&limit=8&sort=-population`);
      return result
}

export async function getNearCity(lat, lon){
    const result = get (`https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${lat}${lon}/nearbyCities?radius=10`);
    return result

}



// export async function getNasa(){
//     const nasaData = await get('https://api.nasa.gov/planetary/apod?api_key=4dqsaEdR8HbKfF5ms7ZVd6ovqHL85NvqIuBwRaqE');
//     return nasaData
// }

// export async function getImage (url) {
//     const image = await get(url);
//     return image
// }

