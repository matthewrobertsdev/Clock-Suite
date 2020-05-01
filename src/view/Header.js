import React, { useEffect } from 'react'
import {useSelector } from 'react-redux'
import NavMenu from './NavMenu'
import MenuBars from './MenuBars'
import {displayMenu} from '../management/DefaultReducerActions'
import './App.css'
import './NavigationStyle.css'
import './Colors.css'

const Header = ()=> {
  const colorClass=useSelector(state => state.misc.colorClass)
  const menuDisplayed=useSelector(state => state.misc.menuDisplayed)
  useEffect(()=> {
  window.addEventListener('resize', () => closeMenuAsNeeded());
  window.document.title="Clock Suite"; document.body.classList=colorClass})
    return (
      <nav className={"navigation-bar "+colorClass}><NavMenu/><span className={"navigation-bar navigation-list hide-for-not-small "+colorClass}>
        <a className={"top-navigation-item float-left top-navigation-link"} 
    href=''>Clock Suite</a><MenuBars/><br></br><NavMenu sideMenu={true}/></span></nav>)
    function closeMenuAsNeeded(){
      if(menuDisplayed&&window.innerWidth>600){
        displayMenu(false)
      }
    }
}
export default Header;