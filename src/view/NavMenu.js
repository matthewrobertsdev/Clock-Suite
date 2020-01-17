import React from 'react'
import { connect } from 'react-redux'
import NavigationItem from './NavigationItem'
const mapStateToProps = (state) => { return { menuDisplayed: state.misc.menuDisplayed,
colorClass: state.misc.colorClass } };
class UnconnectedNavMenu extends React.Component{
    render(){
    let menuStyle=this.props.sideMenu ? "navigation-list side-menu " : "hide-for-small navigation-list "
    menuStyle+=this.props.colorClass
    const leftNavigation=this.props.sideMenu ? 'side-navigation-item' : 'top-navigation-item float-left'
    const hidableLeftNavigation='top-navigation-item float-left hide-for-small'
    return(
    <ul className={menuStyle} style={this.getMenuStyle()}>
        <NavigationItem styleName={hidableLeftNavigation} URL="/" title="Celeritas Apps"/>
        <NavigationItem styleName={leftNavigation} URL="/about" title="About"/>
        <NavigationItem styleName={leftNavigation} URL="/contact" title="Contact"/>
        <NavigationItem styleName={leftNavigation} URL="/privacy" title="Privacy"/>
      </ul>)
}
    getMenuStyle(){
        if (!this.props.sideMenu){
            return {width: '100%'}
        } else if (this.props.menuDisplayed){
            return {width: '200px'}
        } else {
            return {width: '0px'}
        }
    }
}
const NavMenu=connect(mapStateToProps, null)(UnconnectedNavMenu)
export default NavMenu