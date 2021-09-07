//Copyright  © 2020  Matt Roberts
import React, { useEffect } from 'react';
const PrivacyPolicyPage = () => {
    useEffect(()=>{document.title = "Clock Suite | Privacy Policy"})
        return (<main className={'main-background main-blue'}>
            <br></br>
            <h1 className='main-h-1'>
                Privacy Policy
                </h1>
            <h2 className='main-text'>
                Clock Suite does not collect data from its users, and doesn't connect to the internet.  
                Any changes to its privacy policy will be reflected here.
            </h2>
            <br></br><br></br><br></br>
            </main>);
}
export default PrivacyPolicyPage;