
// Callbacks are a way to pass a function around for execution after something completes.
function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;
    document.head.append(script);
    script.onload = () => callback();
};

benReserverationTime = new Date();

loadScript("11.1-callback-reservation.js", () => {
    console.log(makeReservation(benReserverationTime));
});

loadScript("11.1-callback-cook.js", () => {
    console.log(cook());
});

loadScript("11.1-callback-cook.js", function () {
    cookParagraphElem = document.createElement("p");
    cookParagraphElem.innerHTML = cook();
    cookParagraphElem.style = "color:yellow; background:black;";
    document.body.appendChild(cookParagraphElem);
});

// Can have a "pyramid of doom" or "callback-hell" if we nest asynchronous functions.
// We need promises for this to handle them neatly.