import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getCity } from "../api/data.js";


const datalist = document.getElementsByTagName('datalist')[0];

let timer;
const waitingTime = 1001;

export async function showOptions(e) {
    const inputBox = e.target;
    clearTimeout(timer)
    timer = setTimeout(() => {
        getList(inputBox.value)
    }, waitingTime);
}

export const getList = async (input) => {
    const cityList = await getCity(input);
 
    if(!Object.keys(cityList).includes('message')){
    const options = cityList.data.map(el => el = `${el.name} - ${el.region} - ${el.country} - ${el.wikiDataId}`);
    render(html`${options.map(el => el = optionsTemplate(el))}`, datalist);

}
}

function optionsTemplate(str) {
    return html`
<option value=${str}></option>`
}








