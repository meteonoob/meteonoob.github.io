import { html } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js'


export async function welcomeView(ctx) {

        ctx.render(welcomeTemplate())
    }

    function welcomeTemplate(){
        return    html`
 
 <h3 id="cityName"> Type the name of city, choose from list and click search, to view the weather forecast!</h3>

  `
    }
  
  
        
    

 


   
