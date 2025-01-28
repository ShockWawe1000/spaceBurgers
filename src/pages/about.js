import { iconImage } from "./elements/images/images";
export function renderAbout(){
    const container = document.querySelector('.content--canvas');
    iconImage.classList.remove("icon")
    iconImage.classList.add("iconAbout")
    const car = document.createElement("div");
    car.classList.add("about")
    car.id="content"
    const img = document.createElement("div");
    const text = document.createElement("div");
    text.classList.add("aboutDesc")
    const h1 = document.createElement("h1");
    h1.textContent = "Who are we?"
    const p = document.createElement("p");
    p.textContent = "SpaceBurgers™ was born in 2013 after a fruitless search for a good old-fashioned hamburger. During his days in the financial industry, Jacques traveled the world and discovered that the best food, anywhere in the world, could be found in restaurants that had a limited menu. With the hamburger being one of his favourite foods, Jacques frequented many hamburger spots during his travels. Back home in Toronto, the inability to find a well-made classic hamburger was particularly frustrating to him. Despite Toronto being a hub for restaurants, and hamburgers, he simply could not find the delicious old-fashioned fresh burger he was seeking. It felt as though restaurants were trying too hard to be different and innovative, overcomplicating a simple concept."

    text.append(h1,p);
    car.append(iconImage,text);
    container.appendChild(car);
    

}