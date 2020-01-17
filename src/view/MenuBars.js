import React from 'react'
import './App.css';
class UnconnectedMenuBars extends React.Component {
    render() {
        return (<span class="menuBarContainer">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </span>)
    }
}
const MenuBars=UnconnectedMenuBars
export default MenuBars