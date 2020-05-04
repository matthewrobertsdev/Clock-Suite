//Copyright  © 2020  Matt Roberts
import React, { useEffect } from 'react'
import {useSelector } from 'react-redux'
import {displayMenu} from '../store/DefaultReducerActions'
import NavigationItem from './NavigationItem'
import '../styles/App.css'
import '../styles/NavigationStyle.css'
import '../styles/Colors.css'
const Header = () => {
  const colorClass=useSelector(state => state.misc.colorClass)
  const menuDisplayed=useSelector(state => state.misc.menuDisplayed)
    const leftNavigation='top-navigation-item float-left'
  useEffect(()=> {
  window.addEventListener('resize', () => closeMenuAsNeeded());
  window.document.title="Clock Suite"; document.body.classList=colorClass})
    return (
      <nav className={"navigation-bar "+colorClass}>
      <NavigationItem styleName={leftNavigation} URL="/" title="Clock Suite"/>
      {/*<NavigationItem styleName={leftNavigation} URL="/about" title="About"/>*/}
      <NavigationItem styleName={leftNavigation} URL="/contact" title="Contact"/>
      <NavigationItem styleName={leftNavigation} URL="/privacy" title="Privacy"/>
    </nav>)
    function closeMenuAsNeeded(){
      if(menuDisplayed&&window.innerWidth>600){
        displayMenu(false)
      }
    }
}
//<MenuBars/><br></br>
export default Header;