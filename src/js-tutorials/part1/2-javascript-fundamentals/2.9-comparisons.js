let msg;

let printMessage = (msg) => {
    if(msg){
        console.log("Message is not (null or undefined)");
    }
    else{
        console.log(`Mesage is: ${msg}`);
    }
}

printMessage(msg);
msg = null;
printMessage(msg);
msg = "";
printMessage(msg);
msg = "NonEmptyString";
printMessage(msg);