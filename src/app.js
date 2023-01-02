


import page from "../node_modules/page/page.mjs";

import { errorCallback, successCallback } from "./api/geoLocation.js";
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


import { render} from "../node_modules/lit-html/lit-html.js";
import { homeView } from "./view/home.js";
import { cityView} from "./view/cityView.js";
import {  showOptions } from "./view/datalist.js";
import { welcomeView } from "./view/welcomeView.js";

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




