import React, { useEffect } from 'react'
import {useSelector } from 'react-redux'
import NavMenu from './NavMenu'
import MenuBars from './MenuBars'
import {displayMenu} from '../management/DefaultReducerActions'
import NavigationItem from './NavigationItem'
import './App.css'
import './NavigationStyle.css'
import './Colors.css'

const Header = ()=> {
  const colorClass=useSelector(state => state.misc.colorClass)
  const menuDisplayed=useSelector(state => state.misc.menuDisplayed)
  let menuStyle="navigation-list"
    menuStyle+=colorClass
    const leftNavigation='top-navigation-item float-left'
  useEffect(()=> {
  window.addEventListener('resize', () => closeMenuAsNeeded());
  window.document.title="Clock Suite"; document.body.classList=colorClass})
    return (
      <nav className={"navigation-bar "+colorClass}><ul className={menuStyle}>
      <NavigationItem styleName={leftNavigation} URL="/" title="Clock Suite"/>
      {/*<NavigationItem styleName={leftNavigation} URL="/about" title="About"/>*/}
      <NavigationItem styleName={leftNavigation} URL="/contact" title="Contact"/>
      <NavigationItem styleName={leftNavigation} URL="/privacy" title="Privacy"/>
    </ul></nav>)
    function closeMenuAsNeeded(){
      if(menuDisplayed&&window.innerWidth>600){
        displayMenu(false)
      }
    }
}
//<MenuBars/><br></br>
export default Header;