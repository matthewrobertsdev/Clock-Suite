import React from 'react'
import { connect } from 'react-redux'
import NavigationItem from './NavigationItem'
const mapStateToProps = (state) => { return { menuDisplayed: state.misc.menuDisplayed } };
class UnconnectedNavMenu extends React.Component{
    render(){
    const menuStyle=this.props.sideMenu ? "navigation-list side-menu" : "hide-for-small navigation-list"
    const leftNavigation=this.props.sideMenu ? 'side-navigation-item' : 'top-navigation-item float-left'
    const hidableLeftNavigation='top-navigation-item float-left hide-for-small'
    return(
    <ul className={menuStyle}>
        <NavigationItem styleName={hidableLeftNavigation} URL="/" title="Celeritas Apps"/>
        <NavigationItem styleName={leftNavigation} URL="/about" title="About"/>
        <NavigationItem styleName={leftNavigation} URL="/contact" title="Contact"/>
        <NavigationItem styleName={leftNavigation} URL="/privacy" title="Privacy"/>
      </ul>)
}
}
const NavMenu=connect(mapStateToProps, null)(UnconnectedNavMenu)
export default NavMenu