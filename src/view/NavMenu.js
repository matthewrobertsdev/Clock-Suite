import React from 'react'
import { connect } from 'react-redux'
import NavigationItem from './NavigationItem'
const mapStateToProps = (state) => { return { menuDisplayed: state.misc.menuDisplayed,
colorClass: state.misc.colorClass } };
class UnconnectedNavMenu extends React.Component{
    render(){
    let menuStyle="navigation-list"
    menuStyle+=this.props.colorClass
    const leftNavigation='top-navigation-item float-left'
    //const hidableLeftNavigation='top-navigation-item float-left hide-for-small'
    return(
    <ul className={menuStyle}>
        <NavigationItem styleName={leftNavigation} URL="/" title="Clock Suite"/>
        {/*<NavigationItem styleName={leftNavigation} URL="/about" title="About"/>*/}
        <NavigationItem styleName={leftNavigation} URL="/contact" title="Contact"/>
        <NavigationItem styleName={leftNavigation} URL="/privacy" title="Privacy"/>
      </ul>)
}

}
const NavMenu=connect(mapStateToProps, null)(UnconnectedNavMenu)
export default NavMenu