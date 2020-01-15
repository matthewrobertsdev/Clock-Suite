
const initialState = {
    colorClass: getColorClass()
};

export default function defaultReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COLOR': return { ...state, colorClass: getColorClass() };
        default: return state;
    }
};

export function getColorClass(){
    console.log("abcd")
    const red="red"//"rgb(236, 77, 61)"
    const orange="orange"//"rgb(242, 153, 56)"
    const yellow="yellow"//"rgb(248, 204, 70)"
    const green="green"//"rgb(100, 201, 86)"
    const blue="blue"//"rgb(44, 124, 246)"
    const purple="purple"//"rgb(163, 92, 215)"
    const colors=[red, orange, yellow, green, blue, purple]
    return colors[getRandomInt(5)]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max+1));
  }