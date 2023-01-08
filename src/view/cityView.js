
import { get7Days, getCity } from "../api/data.js";
import { homeTemplate } from "../cards.js";
import { infoFunc } from "../infoArrays.js";


export async function cityView(ctx){

    const searchedCity = ctx.params.city;
    const splitName = searchedCity.split(' - ')
    const wikiDataId = splitName.pop();

    const result = await getCity(splitName[0]);
    const myCity = result.data.find(city => city.wikiDataId == wikiDataId);
    const cityName = document.getElementById("cityName");
    cityName.textContent = (splitName.join(' - '));

    const lat = myCity.latitude;
    const lon = myCity.longitude;

    const data = await get7Days(lat, lon);

    const unit = data.hourly_units.temperature_2m;
 
    
  
    const info = infoFunc(data);
    console.log(info)
    



    ctx.render(homeTemplate(info, unit));
    document.getElementById("inputBox").value = '';

}