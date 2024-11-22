
let currentComponent;
const componentStates = new Map();
let stateIndex = 0;
function useState(initialValue){

    if(!componentStates.has(currentComponent)){
        componentStates.set(currentComponent, [])
    }

    if(componentStates.get(currentComponent)[stateIndex] === undefined){
        componentStates.get(currentComponent)[stateIndex] = initialValue;
    }

    const currentComponentState = componentStates.get(currentComponent)
    const state = currentComponentState[stateIndex];

    const currentStateIndex = stateIndex;
    const setState = (newVal) => {
        componentStates.get(currentComponent)[currentStateIndex] = newVal;
    }

    stateIndex++;

    return [state, setState];
}



function Button(){
    const [count, setCount] = useState(0);
    if(count === 0){
        const [firstName, setFirstName] = useState("ben")
    }
    const [lastName, setLastName] = useState("smith");


    setCount(count+1);
    return `<button> lastName: ${lastName} </button>`;
}

function render(component) {
    currentComponent = component;
    // simulate rendering
    console.log(component());

    stateIndex = 0;
}

render(Button);
render(Button);
render(Button);