
import {html} from "../../node_modules/lit-html/lit-html.js";


export async function welcomeView(ctx) {

        ctx.render(welcomeTemplate())
    }

    function welcomeTemplate(){
        return    html`
 
 <h3 id="cityName"> Type the name of city, choose from list and click search, to view the weather forecast!</h3>

        <section id="dashboard">
        
            <div class="card-wrapper">
            <div class="welcome" id="week"></div>
            </div>
        </section>
        
  `
    }
  
  
        
    

 


   
