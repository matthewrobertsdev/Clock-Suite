import React from 'react'
import { connect } from 'react-redux'
import NavigationItem from './NavigationItem'
import MenuBars from './MenuBars'
import {changeColor} from '../management/DefaultReducerActions'
import './App.css';
import './Colors.css';
const mapStateToProps = (state) => { return { colorClass: state.misc.colorClass } };
const mapDispatchToProps = dispatch => {
  return { changeColor: () => { dispatch(changeColor()); }} };
class UnconnectedHeader extends React.Component{
  componentDidMount(){
    this.props.changeColor();
    window.addEventListener('resize', this.closeMenuAsNeeded);
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
        console.log(window.innerWidth)
    }
}
const Header=connect(mapStateToProps, mapDispatchToProps)(UnconnectedHeader)
export default Header;