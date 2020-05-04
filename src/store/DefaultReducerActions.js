export function changeColor() {
  return { type: 'CHANGE_COLOR' }
}
export function displayMenu(displayed) {
  return { type: 'CHANGE_MENU', displayed: displayed }
}
