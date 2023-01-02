import page from "../../node_modules/page/page.mjs";
import { getNearCity } from "../api/data.js";


export const successCallback = (position) => {
  getPosition(position);
};
export const errorCallback = (error) => {
  console.log(error);
};

   async function getPosition(position) {
    const lat = ((position.coords.latitude).toFixed(6));
    let lon = ((position.coords.longitude).toFixed(6));
   
    if (!isNaN(lon[0])){
       lon = `+${lon}`
    }

    const result = await getNearCity(lat, lon);
    const myCity = (result.data[0]);

    const cityString = `${myCity.name} - ${myCity.region} - ${myCity.country} - ${myCity.wikiDataId}`;

    sessionStorage.setItem("lat", lat );
    sessionStorage.setItem("lon", lon ); 
    sessionStorage.setItem("location", cityString)

    page.redirect("/home")

   };
   
  
