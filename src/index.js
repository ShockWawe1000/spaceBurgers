import "./styles.css";
import { renderHeader } from "./pages/elements/header.js";
import {renderMain} from "./pages/main.js"
import {renderAbout} from "./pages/about.js"
import {renderContact} from "./pages/contact.js"
import { renderBg} from "./pages/elements/bg.js";

const canvas = document.createElement("canvas")
canvas.classList.add("bg");
document.body.appendChild(canvas);

const bg = document.createElement("div")
bg.classList.add("content--canvas","canvas");
document.body.appendChild(bg);

renderBg();
renderHeader();
renderContact();


const MainBtn = document.getElementById("Main");
const AboutBtn = document.getElementById("About");
const ContactBtn = document.getElementById("Contact");

MainBtn.onclick = function(){
    let content = document.getElementById("content")
    if (typeof(content) != 'undefined' && content != null)
        {
            content.remove();
        }
 
    renderMain();
}


AboutBtn.onclick = function(){
    let content = document.getElementById("content")
    if (typeof(content) != 'undefined' && content != null)
        {
            content.remove();

        }
 
    renderAbout();
}
    

ContactBtn.onclick = function(){
    let content = document.getElementById("content")
    if (typeof(content) != 'undefined' && content != null)
        {
            content.remove();
        }
 

    renderContact();
}
        

