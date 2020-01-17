import React from 'react'
function NavigationItem(props){
    return(<li className={props.styleName}>
        <a className={"top-navigation-link"} href={props.URL}>{props.title}</a></li>);
}
export default NavigationItem