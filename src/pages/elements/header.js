
import { iconImage } from "./images/images";
export function renderHeader(){
    const container = document.querySelector('.content--canvas');
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    
    
    const buttonMain = document.createElement("button");
    const buttonAbout = document.createElement("button");
    const buttonContact = document.createElement("button");
    
    
    buttonMain.innerText = "Main";
    buttonAbout.innerText = "About";
    buttonContact.innerText = "Contact";

    buttonMain.id = "Main";
    buttonAbout.id = "About";
    buttonContact.id = "Contact";
    
    nav.append(buttonMain,buttonAbout,buttonContact);
    header.append(nav);
    header.append(iconImage);
    container.appendChild(header);
} 
