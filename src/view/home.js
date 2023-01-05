


import { cityView } from "./cityView.js";


export async function homeView(ctx) {
  
       ctx.params.city = sessionStorage.location;
        setTimeout( () => cityView(ctx), 1500) ;

    }
    









