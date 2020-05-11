//Copyright  © 2020  Matt Roberts
import React, { useEffect } from 'react';
import {useSelector } from 'react-redux'
const PrivacyPolicyPage = () => {
    useEffect(()=>{document.title = "Clock Suite | Privacy Policy"})
        const colorClass=useSelector(state => state.misc.colorClass)
        return (<div className={'main-background main-'+colorClass}>
            <br></br>
            <h1 className='main-h-1'>
                Privacy Policy
                </h1>
            <div className='main-text'>
                I, Matt Roberts, collect log data as allowed by the users of Clock Suite 
                and provided by Apple.  I do not collect any data on my own 
                from the use of Clock Suite by its users.
            </div>
            <br></br><br></br><br></br>
            </div>);
}
export default PrivacyPolicyPage;