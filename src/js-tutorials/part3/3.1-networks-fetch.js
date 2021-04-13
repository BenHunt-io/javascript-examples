

let = httpMeta = { "Origin": "*" }
let = httpHeader = new Headers(httpMeta);

// let promise = fetch(url, options[]), Promise ~ Future in Java

async function apiFetch(){
    // StarWars API allows CORS, cross origin request sharing. al
    let response = await fetch('https://swapi.co/api/people/1'); // simple GET Request
    console.log(response.status);
    return response;
}

apiFetch().then(response => console.log("Response code: " + response.status));
apiFetch().then(response => console.log("Response code: " + response.json));
