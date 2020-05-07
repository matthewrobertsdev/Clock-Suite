/*
Copyright  © 2020  Matt Roberts
*/
import React from 'react';
import {useSelector } from 'react-redux'
const ContactPage = () => {
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