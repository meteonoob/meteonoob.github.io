


import page from "//unpkg.com/page/page.mjs";


import { render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js'
import { homeView } from "./view/home.js";
import { cityView} from "./view/cityView.js";
import {  showOptions } from "./view/datalist.js";
import { welcomeView } from "./view/welcomeView.js";
import { getNearCity } from "./api/data.js";

const main = document.getElementsByTagName('main')[0];

const inputBox = document.getElementById("inputBox");
inputBox.addEventListener('keyup', showOptions);

const btn = document.getElementById("inputBtn");
btn.addEventListener('click', search)



function search (e){    
    const input = (inputBox.value);
    inputBox.value = 'Loading...';
    
    if(input.split(" - ").length == 4){
    setTimeout(() => {page.redirect(`/${input}`)}, 2000);
   
    }
    inputBox.value = "Loading..."
}

function ctxDecorator(ctx, next){
    ctx.render = (content) => render(content, main);

    next();
}

page(ctxDecorator);

page("/index.html","/");
page("/", welcomeView);
page("/home", homeView );
page("/:city", cityView)

page.start();




console.log("ok");

export const successCallback = (position) => {
    getPosition(position);
  };
  export const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  
  
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




