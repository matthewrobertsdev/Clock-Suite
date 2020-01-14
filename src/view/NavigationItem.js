import React from 'react'
function NavigationItem(props){
    return(<li className="navigation-item" style={props.left==true ? {float: "left"} : {float: "right"}}>
        <a className="navigation-link" href={props.URL}>{props.title}</a></li>);
}
export default NavigationItem