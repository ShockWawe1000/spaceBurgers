export default function createCard(imgPath , heading, text, alt){
   
    let div = document.createElement("div");
    let textDiv = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.textContent=heading;
    let p = document.createElement("p");
    p.textContent=text;
    textDiv.append(h1,p);
    textDiv.classList.add("description");
 
    let img = document.createElement('img');
    img.src =imgPath;
    img.alt=alt;

    div.append(img, textDiv);
    div.classList.add("card");
 
    return div;


}