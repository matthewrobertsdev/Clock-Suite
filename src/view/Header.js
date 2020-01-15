import React from 'react'
import NavigationItem from './NavigationItem'
import {getRandomColorString} from './DefaultReducer'
import './App.css';
class Header extends React.Component{
  componentDidMount(){
    //document.body.style.backgroundColor=getRandomColorString()
  }
    render(){
      return(<nav className="navigation-bar"><ul className="navigation-list">
        <NavigationItem left={true} URL="/" title="Celeritas Apps"/>
        <NavigationItem left={true} URL="/about" title="About"/>
        <NavigationItem left={true} URL="/contact" title="Contact"/>
        <NavigationItem left={true} URL="/privacy" title="Privacy"/>
      </ul></nav>);
    }
}
export default Header;