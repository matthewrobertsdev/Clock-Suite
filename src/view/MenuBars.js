import React from 'react'
import './App.css';
class UnconnectedMenuBars extends React.Component {
    render() {
        return (<span class="menu-bar-container">
            <div class="bar-1"></div>
            <div class="bar-2"></div>
        </span>)
    }
}
const MenuBars=UnconnectedMenuBars
export default MenuBars