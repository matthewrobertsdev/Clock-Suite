//Copyright  © 2020  Matt Roberts
import React, { useEffect } from 'react'
import {useSelector } from 'react-redux'
import {displayMenu} from '../store/DefaultReducerActions'
import { withRouter, Link, useLocation } from 'react-router-dom';
import '../styles/App.css'
import '../styles/NavigationStyle.css'
import '../styles/Colors.css'
const Header = () => {
  const colorClass=useSelector(state => state.misc.colorClass)
  const menuDisplayed=useSelector(state => state.misc.menuDisplayed)
  let location = useLocation();
  useEffect(()=> {
  window.addEventListener('resize', () => closeMenuAsNeeded());
  document.body.classList=colorClass})
    return (
      <nav className={"navigation-bar "+colorClass}>
      <Link className={getClassNameLeft("/")} key={0} to="/">Clock Suite</Link>
      <Link className={getClassNameLeft("/contact")} key={1} to="/contact">Contact</Link>
      <Link className={getClassNameLeft("/privacy")} key={2} to="/privacy">Privacy</Link>
    </nav>)
    function closeMenuAsNeeded(){
      if(menuDisplayed&&window.innerWidth>600){
        displayMenu(false)
      }
    }

    //selected or unslected css style that floats left
function getClassNameLeft(url) {
  if (url === location.pathname) {
    return 'selected-navigation-item top-navigation-item float-left top-navigation-link';
  } else {
    return 'top-navigation-item float-left top-navigation-link';
  }
}
}

//<MenuBars/><br></br>
export default withRouter(Header);