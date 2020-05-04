import React from 'react';
import {useSelector } from 'react-redux'
const AboutPage = () => {
        const colorClass=useSelector(state => state.misc.colorClass)
        return (<div className={'main-background main-'+colorClass}>
            <br></br>
            <h1 className='main-h-1'>
                Why Celeritas?
            </h1>
            <div className='main-text'>
                Celeritas is the latin word for swiftness.  
                In Physics, the c of Einstein's equation E=mc<sup>2</sup> 
                stands for the constant celeritas.  
                This is because c is the speed of light in a vacuum and 
                light goes very, very fast in a vacuum.
                We think this is really, really, cool.  Thus, 
                Celeritas Apps.
            </div>
            <br></br><br></br><br></br>
            </div>);
}
export default AboutPage;