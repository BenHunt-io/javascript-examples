function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;
    document.head.append(script);
    script.onload = () => callback();
};

benReserverationTime = new Date();

loadScript("11.1-callback-reservation.js", () => {
    console.log(makeReservation(benReserverationTime));
})

loadScript("11.1-callback-cook.js", () => {
    console.log(cook());
})
