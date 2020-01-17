import React from 'react'
import NavigationItem from './NavigationItem'
export default function NavMenu(props){
    const menuStyle=props.sideMenu ? "navigation-list" : "hide-for-small navigation-list"
    const leftNavigation=props.sideMenu ? 'side-navigation-item' : 'top-navigation-item float-left'
    const hidableLeftNavigation='top-navigation-item float-left hide-for-small'
    return(
    <ul className={menuStyle}>
        <NavigationItem styleName={hidableLeftNavigation} URL="/" title="Celeritas Apps"/>
        <NavigationItem styleName={leftNavigation} URL="/about" title="About"/>
        <NavigationItem styleName={leftNavigation} URL="/contact" title="Contact"/>
        <NavigationItem styleName={leftNavigation} URL="/privacy" title="Privacy"/>
      </ul>)
}