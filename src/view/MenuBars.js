import React from 'react'
import { connect } from 'react-redux'
import {displayMenu} from '../management/DefaultReducerActions'
import './App.css';
const mapStateToProps = (state) => { return { menuDisplayed: state.misc.menuDisplayed } };
const mapDispatchToProps = dispatch => {
    return { displayMenu: (displayed) => { dispatch(displayMenu(displayed)); } }};
class UnconnectedMenuBars extends React.Component {
    render() {
        return (<span className="menu-bar-container" onClick={()=>this.toggleMenuState()}>
            <div className={this.props.menuDisplayed ? "change-bar-1" : "bar-1"}></div>
            <div className={this.props.menuDisplayed ? "change-bar-2" : "bar-2"}></div>
        </span>)
    }
    toggleMenuState(){
        this.props.displayMenu(!this.props.menuDisplayed)
      }
}
const MenuBars=connect(mapStateToProps, mapDispatchToProps)(UnconnectedMenuBars)
export default MenuBars