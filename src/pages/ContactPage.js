/*
Copyright  © 2020  Matt Roberts
*/
import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux'
const ContactPage = () => {
    const dispatch=useDispatch()
    useEffect(()=>{dispatch({type: 'CHANGE_COLOR'});document.title = "Clock Suite | Contact"})
    const colorClass=useSelector(state => state.misc.colorClass)
        return (<div className={'main-background main-'+
                colorClass}>
            <br></br>
            <h1 className='main-h-1'>Reach out!</h1>
            <div className='main-text'>
                Do you have a question or feedback about Clock Suite?  
                Please do not hesitate.  Send the developer an email 
                at:
            <br></br><br></br>
            <a className='main-text ten-percent-margin' 
            href="mailto:matt.roberts.is@gmail.com">
                matt.roberts.is@gmail.com
            </a>
            </div>
            <br></br><br></br><br></br>
            </div>);
}
export default ContactPage;