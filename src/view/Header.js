import React from 'react'
import NavigationItem from './NavigationItem'
import './App.css';
function Header(){
    return(<nav className="navigation-bar"><ul className="navigation-list">
        <NavigationItem left={true} URL="/" title="Celeritas Apps"/>
        <NavigationItem left={true} URL="/about" title="About"/>
        <NavigationItem left={true} URL="/contact" title="Contact"/>
      </ul></nav>);
}
export default Header;