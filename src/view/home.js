


import { get7Days } from "../api/data.js";
import { homeTemplate } from "../cards.js";
import { infoFunc } from "../infoArrays.js";
import { cityView } from "./cityView.js";


export async function homeView(ctx) {


    const lat = sessionStorage.lat;
    const lon = sessionStorage.lon;
    const location = sessionStorage.location;

    const data = await get7Days(lat, lon);
    
    const unit = data.hourly_units.temperature_2m;
    const info = infoFunc(data);
    document.getElementById("cityName").textContent = location;

    console.log(info)

    ctx.render(homeTemplate(info, unit));


    }
    









