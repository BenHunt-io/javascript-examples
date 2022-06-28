export function createElement(content){
    let priceParagraphElem = document.createElement("p");
    priceParagraphElem.innerHTML = content;
    priceParagraphElem.style = "color:yellow; background:black;";
    document.body.appendChild(priceParagraphElem);
}

export function createPreElement(content){
    let pricePreElem = document.createElement("pre");
    pricePreElem.innerHTML = content;
    pricePreElem.style = "color:yellow; background:black;";
    document.body.appendChild(pricePreElem);
}