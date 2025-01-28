import {carouselLogic} from "./elements/carousel.js"
import createCard from "./elements/cards.js"

import { burger1, burger2,burger3 } from "./elements/images/images.js";



export function renderMain(){
    const container = document.querySelector('.content--canvas');

    const car = document.createElement("div");
    const cardContainer = document.createElement("div");
    const leftBtn = document.createElement("button");
    const rightBtn = document.createElement("button");
    leftBtn.classList.add("btn","prev");
    car.id="content"
    rightBtn.classList.add("btn","next");


    leftBtn.textContent="‹"
    rightBtn.textContent="›"

    cardContainer.classList.add("img-wrap");
    cardContainer.id = "cardContainer";
    car.classList.add("car")
 



    
    let card1 = createCard(burger1,"THE CHEESEBURGER", "Bun, 2 mixed burgers (200g), cheddar x 4, special sauce, iceberg, fresh onion, pickles","1")
    let card2 = createCard(burger2,"THE HAMBURGER ", "Bun, 2 mixed burgers (200g), cheddar x 4, special sauce, iceberg, fresh onion, pickles","2")
    let card3 = createCard(burger3,"THE ALL IN ONE BURGER", "Bun, 2 mixed burgers (200g), cheddar x 4, special sauce, iceberg, fresh onion, pickles","3")
    let card4 = createCard("https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png","THE DEFAULT BURGER", "Bun, 2 mixed burgers (200g), cheddar x 4, special sauce, iceberg, fresh onion, pickles","4")
   
    cardContainer.appendChild(card1);
    cardContainer.appendChild(card2);
    cardContainer.appendChild(card3);
    cardContainer.appendChild(card4);

    console.log(cardContainer)

    car.append(rightBtn,leftBtn , cardContainer  );

    car.append(cardContainer);
    container.appendChild(car);


    carouselLogic(leftBtn,rightBtn);
 
}