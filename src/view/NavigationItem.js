import React from 'react'
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { colorClass: state.misc.colorClass } };
class UnconnectedNavigationItem extends React.Component{
    render(){
    return(<li className={"navigation-item "+this.props.colorClass} style={this.props.left==true ? {float: "left"} : {float: "right"}}>
        <a className={"navigation-link "+this.props.colorClass} href={this.props.URL}>{this.props.title}</a></li>);
    }
}
const NavigationItem=connect(mapStateToProps, null)(UnconnectedNavigationItem)
export default NavigationItem