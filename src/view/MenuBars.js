import React from 'react'
import { connect } from 'react-redux'
import './App.css';
const mapStateToProps = (state) => { return { menuDisplayed: state.misc.menuDisplayed } };
class UnconnectedMenuBars extends React.Component {
    render() {
        return (<span class="menu-bar-container">
            <div class={"bar-1"+this.props.menuDisplayed ? " change" : ""}></div>
            <div class={"bar-2"+this.props.menuDisplayed ? " change" : ""}></div>
        </span>)
    }
}
const MenuBars=connect(mapStateToProps, null)(UnconnectedMenuBars)
export default MenuBars