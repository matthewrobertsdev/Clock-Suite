/*
Copyright  © 2020  Matt Roberts
*/
import React, { useEffect } from 'react';
const ContactPage = () => {
    useEffect(()=>{document.title = "Clock Suite | Contact"})
        return (<main className={'main-background main-blue'}>
            <br></br>
            <h1 className='main-h-1'>Reach out!</h1>
            <h2 className='main-text'>
                Do you have a question or feedback about Clock Suite?  
                Please do not hesitate.  Send the developer an email 
                at:
            <br></br><br></br>
            <a className='main-text ten-percent-margin' 
            href="mailto:matt.roberts.is@gmail.com">
                matt.roberts.is@gmail.com
            </a>
            </h2>
            <br></br><br></br><br></br>
            </main>);
}
export default ContactPage;