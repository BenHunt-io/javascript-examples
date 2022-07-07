import {createImg} from '../../utility/ElementFactory.js';

let gitCommitsUrl = 'https://api.github.com/repos/BenHunt-io/javascript-examples/commits';

async function getCommitsSince(date){
    console.log(date.toISOString())
    gitCommitsUrl = `${gitCommitsUrl}?since=${date.toISOString()}`;
    let response = await fetch(gitCommitsUrl); // simple GET Request
    
    
    if(response.ok){
        return await response.json();
    }else{
        throw new Error("Error occured fetching latest commits");
    }
}

let today = new Date();
let weekAgo = new Date(today.setDate(today.getDate() - 7));

// To see more commits
let date2021 = new Date('2021-06-21T00:00:00.000Z');

getCommitsSince(weekAgo).then(commits => {
    commits.map(commit => commit.commit.message)
        .forEach(msg => console.log(msg));
})


// Fetch in binary format (blob)
async function loadImg(url){
    let response = await fetch(url);
    let blob = await response.blob();
    createImg(blob);
}

loadImg('resources/btc-icon.png');