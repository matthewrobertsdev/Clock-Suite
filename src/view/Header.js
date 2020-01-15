import React from 'react'
import { connect } from 'react-redux';
import NavigationItem from './NavigationItem'
import {changeColor} from './DefaultReducerActions'
import './App.css';
import './Colors.css';
const mapStateToProps = (state) => { return { colorClass: state.misc.colorClass } };
const mapDispatchToProps = dispatch => {
  return { changeColor: () => { dispatch(changeColor()); }} };
class UnconnectedHeader extends React.Component{
  componentDidMount(){
    this.props.changeColor();
  }
    render(){
      document.body.classList=this.props.colorClass
      return(<nav className={"navigation-bar "+this.props.colorClass}><ul className="navigation-list">
        <NavigationItem left={true} URL="/" title="Celeritas Apps"/>
        <NavigationItem left={true} URL="/about" title="About"/>
        <NavigationItem left={true} URL="/contact" title="Contact"/>
        <NavigationItem left={true} URL="/privacy" title="Privacy"/>
      </ul></nav>);
    }
}
const Header=connect(mapStateToProps, mapDispatchToProps)(UnconnectedHeader)
export default Header;