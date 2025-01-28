import { location } from "./elements/images/images";

export function renderContact(){
    const container = document.querySelector('.content--canvas');
    const car = document.createElement("div");
    car.classList.add("contact")
      car.id="content"
    let img;
    const form = document.createElement("form");
    form.classList.add("form")
    function createInput(placeholder,elementType, inputType){
         
        var input = document.createElement(elementType);
        if(elementType == "input")
        {
            input.type = inputType;
            input.className = "input";
        }
        else
        {
            input.className = "textarea";
        }
        input.placeholder = placeholder;
        form.appendChild(input); 
    }
    createInput ("Name","input","text")
    createInput ("Surame","input", "text")
    createInput ("Email","input", "email")
    createInput ("Tell us more...","textarea", "text")

    img = location;
    car.append(img,form)
    container.appendChild(car);








}