import React from 'react'
import { connect } from 'react-redux'
import NavMenu from './NavMenu'
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
      return(<nav className={"navigation-bar "+this.props.colorClass}><NavMenu/><span className={"navigation-bar navigation-list "+this.props.colorClass}>
        <a className={"top-navigation-item float-left top-navigation-link hide-for-not-small"} 
    href=''>Celeritas Apps</a><MenuBars/><br></br>{this.props.menuDisplayed ? <NavMenu sideMenu={true}/> : <span/>}</span></nav>);
    }
    closeMenuAsNeeded(){
      if(this.props.menuDisplayed&&window.innerWidth>600){
        this.props.displayMenu(false)
      }
    }
}
const Header=connect(mapStateToProps, mapDispatchToProps)(UnconnectedHeader)
export default Header;