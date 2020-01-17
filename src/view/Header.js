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
      return(<nav className={"navigation-bar "+this.props.colorClass}><ul className="navigation-list">
        <NavigationItem left={true} URL="/" title="Celeritas Apps"/>
        <NavigationItem left={true} URL="/about" title="About"/>
        <NavigationItem left={true} URL="/contact" title="Contact"/>
        <NavigationItem left={true} URL="/privacy" title="Privacy"/>
      </ul><span className='navigation-link'>Celeritas Apps</span><MenuBars/></nav>);
    }

    closeMenuAsNeeded(){
        console.log(window.innerWidth)
    }
}
const Header=connect(mapStateToProps, mapDispatchToProps)(UnconnectedHeader)
export default Header;