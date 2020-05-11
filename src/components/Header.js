//Copyright  © 2020  Matt Roberts
import React, { useEffect } from 'react'
import {useSelector } from 'react-redux'
import {displayMenu} from '../store/DefaultReducerActions'
import NavigationItem from './NavigationItem'
import { withRouter, Link } from 'react-router-dom';
import '../styles/App.css'
import '../styles/NavigationStyle.css'
import '../styles/Colors.css'
const Header = () => {
  const colorClass=useSelector(state => state.misc.colorClass)
  const menuDisplayed=useSelector(state => state.misc.menuDisplayed)
    const leftNavigation='top-navigation-item float-left top-navigation-link'
  useEffect(()=> {
  window.addEventListener('resize', () => closeMenuAsNeeded());
  document.body.classList=colorClass})
    return (
      <nav className={"navigation-bar "+colorClass}>
      <Link className={leftNavigation} key={0} to="/">Clock Suite</Link>
      <Link className={leftNavigation} key={1} to="/contact">Contact</Link>
      <Link className={leftNavigation} key={1} to="/privacy">Privacy</Link>
    </nav>)
    function closeMenuAsNeeded(){
      if(menuDisplayed&&window.innerWidth>600){
        displayMenu(false)
      }
    }
}
//<MenuBars/><br></br>
export default withRouter(Header);