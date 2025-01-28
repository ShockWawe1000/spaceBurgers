import icon from "./icon.svg"
const iconImage = document.createElement("img")
iconImage.src = icon;
iconImage.classList.add("icon")


import burger1 from "./chicken.png"

import burger2 from "./hamburger.png"

import burger3 from "./mixed.png"

import locations from "./location.PNG"
const location = document.createElement("img")
location.src = locations;
location.classList.add("location")

export {iconImage, burger1, burger2, burger3, location};