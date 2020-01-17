
const initialState = {
    colorClass: getColorClass(), menuDisplayed: false
}

export default function defaultReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COLOR': return { ...state, colorClass: getColorClass() };
        case 'CHANGE_MENU': return { ...state, menuDisplayed: action.displayed };
        default: return state;
    }
}

export function getColorClass(){
    const red="red", orange="orange", yellow="yellow", green="green"
    const blue="blue", purple="purple"
    const colors=[red, orange, yellow, green, blue, purple]
    return colors[getRandomInt(5)]
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max+1));
}