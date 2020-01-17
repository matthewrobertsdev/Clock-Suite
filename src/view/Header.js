import React from 'react'
import { connect } from 'react-redux'
import NavigationItem from './NavigationItem'
import MenuBars from './MenuBars'
import {changeColor, displayMenu} from '../management/DefaultReducerActions'
import './App.css';
import './Colors.css';
const mapStateToProps = (state) => { return { colorClass: state.misc.colorClass, 
  menuDisplayed: state.misc.menuDisplayed } };
const mapDispatchToProps = dispatch => {
  return { changeColor: () => { dispatch(changeColor()); },
  displayMenu: (displayed) => { dispatch(displayMenu(displayed)); } }};
class UnconnectedHeader extends React.Component{
  componentDidMount(){
    this.props.changeColor();
    window.addEventListener('resize', ()=>this.closeMenuAsNeeded());
  }
    render(){
      document.body.classList=this.props.colorClass
      const leftNavigation='navigation-item float-left'
      const hidableLeftNavigation='navigation-item float-left hide-for-small'
      return(<nav className={"navigation-bar "+this.props.colorClass}><ul className="hide-for-small navigation-list">
        <NavigationItem styleName={hidableLeftNavigation} URL="/" title="Celeritas Apps"/>
        <NavigationItem styleName={leftNavigation} URL="/about" title="About"/>
        <NavigationItem styleName={leftNavigation} URL="/contact" title="Contact"/>
        <NavigationItem styleName={leftNavigation} URL="/privacy" title="Privacy"/>
      </ul><span className={"navigation-bar navigation-list "+this.props.colorClass}>
        <a className={"navigation-item float-left navigation-link hide-for-not-small"} 
        href=''>Celeritas Apps</a><MenuBars/></span></nav>);
    }
    closeMenuAsNeeded(){
      if(this.props.menuDisplayed&&window.innerWidth>600){
        this.props.displayMenu(false)
      }
    }
}
const Header=connect(mapStateToProps, mapDispatchToProps)(UnconnectedHeader)
export default Header;